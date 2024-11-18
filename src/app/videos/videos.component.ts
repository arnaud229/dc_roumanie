import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RecuFile, User, videoPresentation } from 'src/models/variables';
import { StorageService } from '../services/storage/storage.service';
import { VideosService } from '../services/videos/videos.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

 
  les_url = ["./../../assets/croixDelete.png", "./../../assets/croixDelete.png", "./../../assets/bio-guera.jpg"];

  videoform!: FormGroup;
  @ViewChild('fileInput')
  fileInput!: ElementRef; 

  isUploading = false;
  progressValue  = 0;
  filVideo = "";
  message = "";
  userId = "MtobwWoig2O9pxxSIKhwHuG5h3X2"
 
  currentUser! : User;
  maxFileSize = 10;
 




  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private firebaseStorageService: StorageService,
    private videoService: VideosService,
    public localstorageService: LocalstorageService,
   
  ) {

    this.init_form();
  }



  ngOnInit() {
    this.currentUser = this.localstorageService.getCurrentUser();
    this.userId = this.currentUser.uid
    this.init_form();
  }

  

  init_form(){
    this.videoform = this.formbuilder.group({
      
      secteur:  ['',Validators.required],
      description:  ['',Validators.required],
      filVideo:  [,Validators.required],
      
   
    });
  } 

  
  getfils() {
    console.log('has click', this.fileInput);
    setTimeout(() => {
      this.fileInput.nativeElement.click();
    }, 500);
  }

 async onFilesSelected(event : any) {

    const filess = event.target.files;
    console.log("files de input",filess);
    console.log("files de tyoe ",typeof filess);


    console.log('event', event);
    let files = [...event.target.files];
    event.target.value = null;
    const invalidFile = files.find(
      (e) => e.size / 1024 / 1024 > this.maxFileSize
    );
    
      if (invalidFile) {
    
        this.message = "La taille de votre fichier depasse 10MB, veuillez choisi un fichier moins de  10MB"
        return;
      }


      const uploadPromises = files.map(async (image) => {

        const url = await this.firebaseStorageService.uploadFile({
          folder: 'filsVideoPresentation',
          filename:
            'Video-Presentation-file-' +
            new Date().getTime() +
            this.userId +
            '.' +
            image.format,
          file: image.video,
         
        });
          console.log('tete1');
          
          image.downloadUrl = url;
  
          return url;
  
      });
  
      const uploadedUrls = await Promise.all(uploadPromises);
      // Filtrer les URLs null (échecs de téléchargement)
      const successfulUrls = uploadedUrls.filter(url => url !== null);    
      this.filVideo = successfulUrls[0]; 

  }

  fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

  ajoutVideo() {

    if (this.videoform.invalid) { } 

      const updateData = {
        
        secteur : this.videoform.value.secteur ,
        description: this.videoform.value.description ,
        fileVideo: this.filVideo,
        user_id: this.currentUser.uid
      

      };

      this.videoService.CreateVideo(updateData)
      .then((res) => {
        console.log('res :>> ', res);
    
        this.router.navigate(["dashboardUser", {index: 2}]);
      })
      .catch((err) => {
        console.log('err :>> ', err);
      });
  }


}
