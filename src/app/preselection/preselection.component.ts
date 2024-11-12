import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecuFile, User } from 'src/models/variables';
import { UsersService } from '../services/firebase/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { StorageService } from '../services/storage/storage.service';



@Component({
  selector: 'app-preselection',
  templateUrl: './preselection.component.html',
  styleUrls: ['./preselection.component.scss']
})
export class PreselectionComponent {

  preselectform!: FormGroup;
  isUploading = false;
  pre = "";
  edite = "";
  switch = false;
  listMatrimonial = ["Situation Matrimoniale","Célibataire", "Marié(e)", "Veuf(ve) "];
  liste_fils: RecuFile[] = [];
  @ViewChild('fileInput')
  fileInput!: ElementRef; 
  imgs = "./../../assets/roumanie-visiter.jpg"
  userId = "MtobwWoig2O9pxxSIKhwHuG5h3X2"
 
  currentUser! : User;

  les_url!: any[];
  progressValue  = 0;
  message = '';
  ChoixImg : boolean = false;
  maxFileSize = 10;
  multiple: boolean = false;
  change: EventEmitter<any[]> = new EventEmitter();
  iserrorlog : boolean =  false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userServ : UsersService,
    private afs: AngularFirestore,
    private firebaseStorageService: StorageService,
    public localstorageService: LocalstorageService,
  ) {

    this.init_form();
  }

  ngOnInit() {
    this.currentUser = this.localstorageService.getCurrentUser();
    this.userId = this.currentUser.uid
    this.init_form();
    console.log(this.fileInput);
  }

  init_form(){
    this.preselectform = this.formbuilder.group({
      age: [,Validators.required, Validators.min(1), Validators.max(120)],
      sMatrimoniale: ['',Validators.required],
      NEtude: ['',Validators.required],
      metier: ['',Validators.required],
      aDiplome: [,Validators.required, Validators.pattern(/^[0-9] {4}$/), Validators.max(2026) ],
      dApprentissage: [,Validators.required, Validators.pattern(/^[0-9] {2}$/), Validators.max(2026)],
      aExperience: [,Validators.required, Validators.pattern(/^[0-9] {2}$/), Validators.max(50)],
      ePrecedent: ['',Validators.required],
      passport: [ ,Validators.required],
      nationalite: ['',Validators.required],
      cWhatapp: ['',Validators.required],
    parrain: ['',Validators.required],
      religion: ['',Validators.required], 
      ldtep2: [false,Validators.required], 
      fils_recus: ['',Validators.required], 
         
    });
  } 

  closeError() {
   this.iserrorlog = false;
   this.isUploading = false;
  }

  suivant() {
    this.switch = !this.switch;
  }

  precedent() {
    this.switch = !this.switch;
  }
  getfils() {
      console.log('has click', this.fileInput);
    setTimeout(() => {
      this.fileInput.nativeElement.click();
    }, 500);
  }

  async preselect(){
    console.log("Preselect",this.preselectform.value)
    
    if (this.preselectform.invalid) {  } 
      console.log('tete0');
      const uploadPromises = this.les_url.map(async (image) => {

      const url = await this.firebaseStorageService.uploadFile({
        folder: 'filsRecus',
        filename:
          'Recus-preinscription-' +
          new Date().getTime() +
          this.userId +
          '.' +
          image.format,
        file: image.file,
       
      });
        console.log('tete1');
        
        image.downloadUrl = url;

        return url;

    });

    const uploadedUrls = await Promise.all(uploadPromises);
    // Filtrer les URLs null (échecs de téléchargement)
    const successfulUrls = uploadedUrls.filter(url => url !== null);

  
       this.les_url = [...successfulUrls]
         console.log('tete11');

    console.log('tete2');
    
    const infoPreselect = 
    {
      
      age: this.preselectform.value.age,
      sMatrimoniale: this.preselectform.value.sMatrimoniale,
      NEtude: this.preselectform.value.NEtude,
      metier: this.preselectform.value.metier,
      aDiplome: this.preselectform.value.aDiplome,
      dApprentissage: this.preselectform.value.dApprentissage,
      aExperience: this.preselectform.value.aExperience,
      ePrecedent: this.preselectform.value.ePrecedent,
      passport: this.preselectform.value.passport,
      nationalite: this.preselectform.value.nationalite,
      cWhatapp:
      {
        code: this.pre,
        numero: this.edite
      },
       
       parrain: this.preselectform.value.parrain,
       religion: this.preselectform.value.religion, 
      ldtep2: this.preselectform.value.ldtep2, 
      fils_recus: this.les_url, 

    }
     console.log('user id: ', this.userId);
     console.log('preselection: ', infoPreselect);
    
       this.userServ.preselect(infoPreselect, this.userId)
       .then(
           (e) => {
            this.router.navigate(["dashboardUser", {index: 0}])
           }
        
       )
       
      .catch(
        (error: { code: any; message: any }) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('vous aviez une erreur ' + errorCode + ': ' + errorMessage);
        }
 )
     
    }
  

async  onFilesSelected(event : any) {

    this.isUploading = true;
   
    console.log('event', event);
    let files = [...event.target.files];
    event.target.value = null;
    const invalidFile = files.find(
      (e) => e.size / 1024 / 1024 > this.maxFileSize
    );
    if (invalidFile) {
      this.iserrorlog = true;
  
      this.message = "La taille de votre fichier depasse 10MB, veuillez choisi un fichier moins de  10MB"

      return;
    }
    // .filter(e=>e.type.trim().length>0);
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      element.file = element;
      element.previewUrl = await this.fileToBase64(element);
    }
    this.les_url = this.multiple
      ? [...this.les_url, ...files]
      : [...files];
    this.emitChangeEvent();
    // this.les_url = new Array(10).fill({}).map(e=>files[0])
    console.log('this.les_url', this.les_url);
    this.ChoixImg = true;

  }

  fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

  async emitChangeEvent() {
    // const isMobile = this.platform.is('mobile');

    if (this.multiple) {
      this.change.emit(this.les_url);
    }

    if (!this.multiple) {
      this.change.emit(this.les_url[0]);
    }
  }


}
