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
  loading = false;
  iserrorlog= false;
  erreur_message = "";
 




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
    this.loading = true;
    this.iserrorlog = false;


    console.log('event', event);
    let files = [...event.target.files];
    event.target.value = null;
    const invalidFile = files.find(
      (e) => e.size / 1024 / 1024 > this.maxFileSize
    );
    
      if (invalidFile) {
        this.loading = true;
        this.iserrorlog = true;
    
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
            image.name?.split('.')?.[1],
          file: image,
         
        });
          console.log('tete1');
          
          image.downloadUrl = url;
  
          return url;
  
      });
  
      const uploadedUrls = await Promise.all(uploadPromises);
      // Filtrer les URLs null (échecs de téléchargement)
      const successfulUrls = uploadedUrls.filter(url => url !== null);    
      this.filVideo = successfulUrls[0]; 

      this.loading = false;
    

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
    this.loading = true;
    this.iserrorlog = false;

    console.log('le form:', this.videoform.value);
    

      const updateData: videoPresentation = {
        secteur: this.videoform.value.secteur,
        description: this.videoform.value.description,
        fileVideo: this.filVideo,
        user_id: this.currentUser.uid,
        nom: this.currentUser.nom,
        prenoms: this.currentUser.prenom,
        isvalidVideo: false,
        observation: '',
        isvalideProcess: false
      };  

      console.log('update :', updateData);
      

      this.videoService.CreateVideo(updateData)
      .then((res) => {
        this.loading = false;
      
        console.log('res :>> ', res);
    
        this.router.navigate(["dashboardUser", {index: 3}]);
      })
      .catch((err) => {
        this.loading = true;
        this.iserrorlog = true;
        this.message = err.message;
        console.log('err :>> ', err);
      });
  }

  closeError()  {
    this.iserrorlog = false;
    this.loading = false;
  }


}
