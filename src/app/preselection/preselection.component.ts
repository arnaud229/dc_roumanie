import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecuFile } from 'src/models/variables';
import { UsersService } from '../services/firebase/user.service';

@Component({
  selector: 'app-preselection',
  templateUrl: './preselection.component.html',
  styleUrls: ['./preselection.component.scss']
})
export class PreselectionComponent {

  preselectform!: FormGroup;
  pre = "";
  edite = "";
  switch = false;
  listMatrimonial = ["Situation Matrimoniale","Célibataire", "Marié(e)", "Veuf(ve) "];
  liste_fils: RecuFile[] = [];
  @ViewChild('fileInput')
  fileInput!: ElementRef; 
  imgs = "./../../assets/roumanie-visiter.jpg"
  userId = "fvgsversvedskgzqofza"


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userServ : UsersService
  ) {

    this.init_form();
  }

  ngOnInit() {
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
      region: ['',Validators.required], 
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

  preselect(){
    console.log("Preselect",this.preselectform.value);
    if (this.preselectform.valid) {  }

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
      cWhatapp: this.pre+this.edite,
       parrain: this.preselectform.value.parrain,
      region: this.preselectform.value.region, 
      ldtep2: this.preselectform.value.ldtep2, 
      fils_recus: this.liste_fils, 

    }

     try {
          
      this.userServ.preselect(infoPreselect, this.userId)
      this.router.navigate(["dashboardUser", {userID: this.userId}])
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
    const files = event.target.files;
    console.log("files de input",files);
    console.log("files de tyoe ",typeof files);
    if (files.length > 0) {

      for (let i = 0; i < files.length; i++) {

        // console.log('index : ', i);
        

        // console.log("res", files[i]);
        
       
        this.liste_fils.push(
          {
            type: files[i].name,
            url: files[i].type
          }
        );
        
      }

      console.log("fin", this.liste_fils);
      
                  
    }

    
     

  }


}
