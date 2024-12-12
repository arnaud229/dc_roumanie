import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { coachingService } from '../services/coaching/coaching.service';
import { StorageService } from '../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-coaching',
  templateUrl: './cours-coaching.component.html',
  styleUrls: ['./cours-coaching.component.scss']
})
export class CoursCoachingComponent {

  les_url = ["./../../assets/croixDelete.png", "./../../assets/croixDelete.png", "./../../assets/bio-guera.jpg"];

  videoform!: FormGroup;
  @ViewChild('fileInput')
  fileInput!: ElementRef; 

  isUploading = false;
  progressValue  = 0;
  filVideo = "";
  message = "";
  userId = "MtobwWoig2O9pxxSIKhwHuG5h3X2"
  maxFileSize = 10;

 
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private firebaseStorageService: StorageService,
    private coachService: coachingService,
    public localstorageService: LocalstorageService,
   
  ) {

    this.init_form();
  }

  ngOnInit() {
    
    this.init_form();
  }

  

  init_form(){
    this.videoform = this.formbuilder.group({
      
      tittre:  ['',Validators.required],
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
          folder: 'filsVideoCoaching',
          filename:
            'Video-Coaching-file-' +
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

  }

  fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

  ajoutCoaching() {

    if (this.videoform.invalid) { } 

    console.log('le form:', this.videoform.value);
    

      const updateData = {
        
        tittre : this.videoform.value.tittre ,
        description: this.videoform.value.description ,
        fileVideo: this.filVideo,     

      };  

      console.log('update :', updateData);
      

      this.coachService.CreateCoaching(updateData)
      .then((res) => {
        console.log('res :>> ', res);
    
        this.router.navigate(["dashboardUser", {index: 3}]);
      })
      .catch((err) => {
        console.log('err :>> ', err);
      });
  }









}