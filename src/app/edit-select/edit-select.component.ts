import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecuFile, User } from 'src/models/variables';
import { UsersService } from '../services/firebase/user.service';

@Component({
  selector: 'app-edit-select',
  templateUrl: './edit-select.component.html',
  styleUrls: ['./edit-select.component.scss']
})
export class EditSelectComponent {

  selectform!: FormGroup;
  pre = "";
  edite = "";
  isUploading = false;
  isUploading1 = false;
  isUploading2= false;
  isUploading3 = false;
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

  @ViewChild('dateInput') 
  dateInput!: ElementRef ;
  
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
  
   valAjout = false;
  imgs = "./../../assets/roumanie-visiter.jpg"
  userId = "MtobwWoig2O9pxxSIKhwHuG5h3X2"
 

  telVisible =0;
  isValExperience = false;
  pereName = '';
  perePrenoms = '';
  mereName = '';
  merePrenoms = '';

  Lentreprise ='';
  posteOccupe ='';
  dateDebut!: Date ;
  datefin!: Date;
  expTable!: any [ ];

  currentUser : User = {
    nom: 'toto',
    prenom: 'jojo',
    telephone: {
      code: '+229',
      numero: '69741258'
    },
    mail: 'jojo@gmail.com',
    mdp: 'Moi@1234',
    age: 30,
    sMatrimoniale: 'Célibataire',
    NEtude: 'BAC C',
    metier: 'cuisinier',
    aDiplome: 2010,
    dApprentissage: 2,
    aExperience: 3,
    ePrecedent: 'fold Food',
    passport: false,
    nationalite: 'Béninoise',
    cWhatapp: 
    {
      code: '+229',
      numero: '69741258'
    },
    parrain: 'lolo tolo',
    religion: 'musulman',
    ldtep2: true,
    fils_recus: [
      "./../../assets/roumanie-visiter.jpg",
     
    ],
    admin: false,
    partenaire: false,
    LieuNaissance: 'alladas',
    dateNaissance: new Date(),
    paysNaissance: 'Bénin',
    Pere: {
      nom: 'toto',
      prenoms: 'fodo'
    },
    Mere: {
      nom: 'vovo',
      prenoms: 'vovo'
    },
    nPasseport: '894f1ethbfdr87574',
    lieuPasseport: 'cotonou',
    dateEmiPasseport: new Date(),
    dateExpPasseport: new Date(),
    derniereResidence: 'cotonou',
    derniereResidencePays: 'benin',
    derniereResidenceVillage: 'fifadji',
    qualiProfession: 'cuisine',
    principalProfession: 'informaticien',
    langueParler: 'francais',
    expProfesionnel: [
      {
        entreprise: 'string',
        posteOccupe: 'cuisine',
        datedebut: new Date(),
        datefin: new Date()
      },

      {
        entreprise: 'string',
        posteOccupe: 'cuisine',
        datedebut: new Date(),
        datefin: new Date()
      },
      {
        entreprise: 'string',
        posteOccupe: 'cuisine',
        datedebut: new Date(),
        datefin: new Date()
      },
      {
        entreprise: 'string',
        posteOccupe: 'cuisine',
        datedebut: new Date(),
        datefin: new Date()
      },
      {
        entreprise: 'string',
        posteOccupe: 'cuisine',
        datedebut: new Date(),
        datefin: new Date()
      }
    ],
    nbrEnfants: 0,
    dHonneur: false,
    fils_diplome: [
      {
        type: 'image/jpg',
        url: ' "./../../assets/roumanie-visiter.jpg"'
      },
      {
        type: 'image/jpg',
        url: ' "./../../assets/roumanie-visiter.jpg"'
      },
    ],
    fil_photo: {
      type: 'image/jpg',
      url: ' "./../../assets/roumanie-visiter.jpg"'
    },
    fil_passportPhoto: {
      type: 'image/jpg',
      url: ' "./../../assets/roumanie-visiter.jpg"'
    },
    fil_casierJudiciere: {
      type: 'image/jpg',
      url: ' "./../../assets/roumanie-visiter.jpg"'
    },
    isvalidePreselect: false,
    isvalidSelect: false
  };



  
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
      LieuNaissance: this.currentUser.LieuNaissance,
      dateNaissance:  new Date(),
      paysNaissance: this.currentUser.paysNaissance,
      Pere: '',
      Mere: '',
      nPasseport: this.currentUser.nPasseport,
      lieuPasseport: this.currentUser.lieuPasseport,
      dateEmiPasseport: new Date(),
      dateExpPasseport: new Date(),
      derniereResidence: this.currentUser.derniereResidence,
      derniereResidencePays: this.currentUser.derniereResidencePays,
      derniereResidenceVillage: this.currentUser.derniereResidenceVillage,
      qualiProfession: this.currentUser.qualiProfession,
      pricipalProfession: this.currentUser.principalProfession,
      langueParler: this.currentUser.langueParler,
      expProfesionnel: this.currentUser.expProfesionnel,
      nbrEnfants: this.currentUser.nbrEnfants,
      dHonneur: this.currentUser.dHonneur,   
      fils_diplome: "",    
      fil_photo: '',    
      fil_passportPhoto: "",    
      fil_casierJudiciere: "",    
        
    });

    this.pereName = this.currentUser.Pere.nom;
    this.perePrenoms = this.currentUser.Pere.prenoms;
    this.mereName = this.currentUser.Mere.nom;
    this.merePrenoms = this.currentUser.Mere.prenoms;

    this.expTable = this.currentUser.expProfesionnel;
    
    if (this.expTable.length > 0) {

      this.isValExperience = true;
      
    }

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

    console.log('val telvisible', this.telVisible);
    
 

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
  this.fileInput3.nativeElement.click();
}

onFilesSelected1(event : any) {

  this.isUploading1 = true;
  const files = event.target.files;
  console.log("files de input",files);
  console.log("files de tyoe ",typeof files);


  this.filPhoto = {
    type: files[0].type,
          url: files[0].name
  }

  
  setTimeout(() => {
    this.isUploading1 = false;
  }, 5000);
 

}

onFilesSelected2(event : any) {

  this.isUploading2 = true;

  const files = event.target.files;
  console.log("files de input",files);
  console.log("files de tyoe ",typeof files);


  this.filPhotoPassport = {
    type: files[0].type,
          url: files[0].name
  }

  
  setTimeout(() => {
    this.isUploading2 = false;
  }, 5000);

}

onFilesSelected3(event : any) {

  this.isUploading3 = true;

  const files = event.target.files;
  console.log("files de input",files);
  console.log("files de tyoe ",typeof files);


  this.filPhotoCasier = {
    type: files[0].type,
          url: files[0].name
  }

  setTimeout(() => {
    this.isUploading3 = false;
  }, 5000);



}

onFilesSelected(event : any) {

  this.isUploading = true;
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

  
  setTimeout(() => {
    this.isUploading = false;
  }, 5000);

}

editExperience(i:number) {



}

activeAjoutExperience() {

  this.isValExperience = false;

}




ajout() {

  const Otable = {

    entreprise: this.Lentreprise,
    posteOccupe: this.posteOccupe,
    dateDebut: this.dateDebut,
    datefin: this.datefin

  }

  this.expTable.push(Otable)

  this.Lentreprise ="";
  this.posteOccupe ="";
  this.dateDebut = new Date();
  this.datefin = new Date()
  this.valAjout = true;

  console.log("le tableau", this.expTable);
  


}

clearDate() {
  this.dateInput.nativeElement.value = '';
}

select() {}



}
