import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/firebase/user.service';
import { RecuFile } from 'src/models/variables';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {

  selectform!: FormGroup;
  pre = "";
  edite = "";
  isUploading = false;
  switch = false;
  listMatrimonial = ["Situation Matrimoniale","Célibataire", "Marié(e)", "Veuf(ve) "];
  listLangue = ["Langue étrangère parler","Anglais","Français", "Roumain", "Espagnol"];
  liste_fils: RecuFile[] = [];
  @ViewChild('fileInput')
  fileInput!: ElementRef; 

  @ViewChild('fileInput1')
  fileInput1!: ElementRef; 

  @ViewChild('fileInput2')
  fileInput2!: ElementRef; 

  @ViewChild('fileInput3')
  fileInput3!: ElementRef; 
  
  filPhoto: RecuFile = {
    type: '',
    url: ''
  }

  filPhotoPassport: RecuFile = {
    type: '',
    url: ''
  }

  filPhotoCasier: RecuFile = {
    type: '',
    url: ''
  }
  
   
  imgs = "./../../assets/roumanie-visiter.jpg"
  userId = "fvgsversvedskgzqofza"
 

  telVisible =0;
  pereName = '';
  perePrenoms = '';
  mereName = '';
  merePrenoms = '';

  Lentreprise ='';
  posteOccupe ='';
  periode = '';
  expTable = [

    {

      entreprise: 'this.Lentreprise',
      posteOccupe: 'this.posteOccupe',
      periode: "this.periode"

    }
  ];




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
    this.selectform = this.formbuilder.group({
      LieuNaissance: ['',Validators.required],
      dateNaissance:  ['',Validators.required],
      paysNaissance:  ['',Validators.required],
      Pere: ['',Validators.required],
      Mere: ['',Validators.required],
      nPasseport: ['',Validators.required],
      lieuPasseport: ['',Validators.required],
      dateEmiPasseport: [,Validators.required],
      dateExpPasseport: [,Validators.required],
      derniereResidence: ['',Validators.required],
      derniereResidencePays: ['',Validators.required],
      derniereResidenceVillage: ['',Validators.required],
      qualiProfession: ['',Validators.required],
      pricipalProfession: ['',Validators.required],
      langueParler: ['',Validators.required],
      expProfesionnel: [,Validators.required],
      nbrEnfants: [,Validators.required, Validators.pattern(/^[0-9] {2}$/), Validators.max(50)],
      dHonneur: ['',Validators.required],   
      fils_diplome: [,Validators.required],    
      fil_photo: [,Validators.required],    
      fil_passportPhoto: [,Validators.required],    
      fil_casierJudiciere: [,Validators.required],    
      
     
     
    });
  } 
  precedent(index: number) {

    
    if (index == 0) {

      this.telVisible = 0;
      
    } else if (index==1) {
      this.telVisible = 1
      
    }

  }

  suivant(index: number) {

      if (index == 1) {

        this.telVisible = 1;
        
      } else if (index==2) {
        this.telVisible = 2
        
      }
   

  }
  getfils() {
    this.fileInput.nativeElement.click();
  }

  getfils1() {
    this.fileInput1.nativeElement.click();
  }

  getfils2() {
    this.fileInput2.nativeElement.click();
  }

  getfils3() {
    this.fileInput2.nativeElement.click();
  }

  onFilesSelected1(event : any) {
    const files = event.target.files;
    console.log("files de input",files);
    console.log("files de tyoe ",typeof files);


    this.filPhoto = {
      type: files[0].type,
            url: files[0].name
    }
   

  }

  onFilesSelected2(event : any) {

    const files = event.target.files;
    console.log("files de input",files);
    console.log("files de tyoe ",typeof files);


    this.filPhotoPassport = {
      type: files[0].type,
            url: files[0].name
    }

  }

  onFilesSelected3(event : any) {

    this.isUploading = true;

    const files = event.target.files;
    console.log("files de input",files);
    console.log("files de tyoe ",typeof files);


    this.filPhotoCasier = {
      type: files[0].type,
            url: files[0].name
    }

    setTimeout(() => {
      this.isUploading = false;
    }, 5000);

  

  }
  
  onFilesSelected(event : any) {
    const files = event.target.files;
    console.log("files de input",files);
    console.log("files de tyoe ",typeof files);
    if (files.length > 0) {

      for (let i = 0; i < files.length; i++) {
       
        this.liste_fils.push(
          {
            type: files[i].type,
            url: files[i]. name
          }
        );
        
      }

      console.log("fin", this.liste_fils);
      
                  
    }   

  }

  ajout() {

    const Otable = {

      entreprise: this.Lentreprise,
      posteOccupe: this.posteOccupe,
      periode: this.periode

    }

    this.expTable.push(Otable)

    this.Lentreprise ="";
    this.posteOccupe ="";
    this.periode = ""

    console.log("le tableau", this.expTable);
    


  }

  select() {
     
  }



}
