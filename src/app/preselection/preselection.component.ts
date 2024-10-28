import { Component, ElementRef, ViewChild } from '@angular/core';
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

  les_url = [""];
  progressValue  = 0;


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
  }

  init_form(){
    this.preselectform = this.formbuilder.group({
      age: [,Validators.required, Validators.min(0), Validators.max(120)],
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

  suivant() {

    this.switch = !this.switch;

  }
  getfils() {
    this.fileInput.nativeElement.click();
  }

  async preselect(){
    console.log("Preselect",this.preselectform.value)

    
    if (this.preselectform.invalid) {  } 


     this.liste_fils.map(async (image) => {

      const  response = await fetch(image.url);
      const blod = await response.blob()
      const url = await this.firebaseStorageService.uploadFile({
        folder: 'filsRecus',
        filename:
          'Recus-preinscription-' +
          new Date().getTime() +
          this.userId +
          '.' +
          image.type,
        file: blod,
       
      });

       this.les_url.push(url);

      // return url;
    });

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
      region: this.preselectform.value.region, 
      ldtep2: this.preselectform.value.ldtep2, 
      fils_recus: this.les_url, 

    }

     try {

      const docRef: AngularFirestoreDocument<any> = this.afs.doc(`utilisateurs/${this.userId}`);
    const docSnapshot = await docRef.get().toPromise();

      // if(docSnapshot.exists) {
     
              
        await this.userServ.preselect(infoPreselect, this.userId)
      this.router.navigate(["dashboardUser", {index: 0}])

      // }
   
     }    
    
    catch  {

      (error: { code: any; message: any }) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('vous aviez une erreur ' + errorCode + ': ' + errorMessage);
      };

    }

  }

  onFilesSelected(event : any) {

    this.isUploading = true;
    const files = event.target.files;
    console.log("files de input",files);
    console.log("files de tyoe ",typeof files);
    if (files.length > 0) {


      for (let i = 0; i < files.length; i++) {
        console.log("res", files[i]);
 
        
            this.liste_fils.push(
          {
            type: files[i].type,
            url: files[i].name
          }
        );

  
        
      }

      console.log("fin", this.liste_fils);
      
                  
    }

  }


//   uploadFileProgress(file: File): Observable<number> {
//   this.isUploadingSubject.next(true);

//   return interval(1000).pipe(
//     takeWhile(() => this.isUploading$.pipe(
//       first(), // Take the first emitted value
//       map(isUploading => isUploading) // Map the value to a boolean
//     )),
//     map(i => Math.floor((i + 1) / 10) * 10),
//     finalize(() => {
//       this.isUploadingSubject.next(false);
//     })
//   );
// }


}
