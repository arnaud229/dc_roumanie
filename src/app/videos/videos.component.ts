import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RecuFile, User, videoPresentation } from 'src/models/variables';
import { StorageService } from '../services/storage/storage.service';
import { VideosService } from '../services/videos/videos.service';

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
   
  ) {

    this.init_form();
  }



  ngOnInit() {
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
    this.fileInput.nativeElement.click();
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
      
    
      const url = await this.firebaseStorageService.uploadFile({
        folder: 'filsVideoPresentation',
        filename:
          'filsVideoPresentation-file-' +
          new Date().getTime() +
          this.userId +
          '_' +
          filess.format,
        file: filess.video,
      });

    
      this.filVideo = url;

    
    setTimeout(() => {
      this.isUploading = false;
    }, 5000);
   

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
        uid: this.currentUser.uid
      

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
