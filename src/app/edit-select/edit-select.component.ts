import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecuFile, User } from 'src/models/variables';
import { UsersService } from '../services/firebase/user.service';
import { StorageService } from '../services/storage/storage.service';

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
  
  filPhoto = "";

  filPhotoPassport ='';

  filPhotoCasier ="";
  
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
        dateDebut: new Date(),
        datefin: new Date()
      },

      {
        entreprise: 'string',
        posteOccupe: 'cuisine',
        dateDebut: new Date(),
        datefin: new Date()
      },
      {
        entreprise: 'string',
        posteOccupe: 'cuisine',
        dateDebut: new Date(),
        datefin: new Date()
      },
  
    ],
    nbrEnfants: 0,
    dHonneur: true,
    fils_diplome: [ ],
    fil_photo: 
       "./../../assets/roumanie-visiter.jpg"
    ,
    fil_passportPhoto:"./../../assets/roumanie-visiter.jpg",
    fil_casierJudiciere: "./../../assets/roumanie-visiter.jpg"
    ,
    isvalidePreselect: false,
    isvalidSelect: false
  };
  message ='';
  maxFileSize = 10;
 
  multiple: boolean = false;
  multiple1: boolean = false;
  multiple2: boolean = false;
  multiple3: boolean = false;
  change: EventEmitter<any[]> = new EventEmitter();

  filPhotoDiplomes! : any[];
  ChoixImg : boolean = false;


  
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userServ : UsersService,
    private firebaseStorageService: StorageService,
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

  async onFilesSelected1(event : any) {

  

  const filess = event.target.files;

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
    folder: 'filsPhoto',
    filename:
      'filsPhoto-file-' +
      new Date().getTime() +
      this.userId +
      '.' +
      filess.format,
    file: filess.file,
  });

  this.filPhoto = url;
 
  
  setTimeout(() => {
    this.isUploading1 = false;
  }, 5000);
 

}

async onFilesSelected2(event : any) {

  this.isUploading2 = true;

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
  folder: 'filsPhotoPasseport',
  filename:
    'filsPhotoPasseport-file-' +
    new Date().getTime() +
    this.userId +
    '.' +
    filess.format,
  file: filess.file,
});


  this.filPhotoPassport = url;

  
  setTimeout(() => {
    this.isUploading2 = false;
  }, 5000);

}

async onFilesSelected3(event : any) {

  this.isUploading3 = true;

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
    folder: 'filsPhotoCXasier',
    filename:
      'filsPhotoCassier-file-' +
      new Date().getTime() +
      this.userId +
      '.' +
      filess.format,
    file: filess.file,
  });


  this.filPhotoCasier = url;


  setTimeout(() => {
    this.isUploading3 = false;
  }, 5000);



}

async onFilesSelected(event : any) {

  for (let index = 0; index < event.length; index++) {
    const element = {
       url: event.target.files[index].name
    }

    this.filPhotoDiplomes.push(element)
    
  }

  console.log('event', event);
  let files = [...this.filPhotoDiplomes];
  event.target.value = null;
  const invalidFile = files.find(
    (e) => e.size / 1024 / 1024 > this.maxFileSize
  );
  if (invalidFile) {
  
    this.message = "La taille de votre fichier depasse 10MB, veuillez choisi un fichier moins de  10MB"
    return;
  }
  // .filter(e=>e.type.trim().length>0);
  for (let index = 0; index < files.length; index++) {
    const element = files[index];
    element.url = element;
    element.previewUrl = await this.fileToBase64(element);
  }
  this.liste_fils = this.multiple
    ? [...this.liste_fils, ...files]
    : [...files];
  this.emitChangeEvent();
  // this.les_url = new Array(10).fill({}).map(e=>files[0])
  console.log('this.les_url', this.currentUser.fils_diplome);
  this.ChoixImg = true;
  

  
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

async emitChangeEvent() {
  // const isMobile = this.platform.is('mobile');

  if (this.multiple) {
    this.change.emit(this.currentUser.fils_diplome);
  }

  if (!this.multiple) {
    // this.change.emit(this.currentUser.fils_diplome[0]  );
  }
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

async select() {

  console.log(" edith select",this.selectform.value);
    
if (this.selectform.invalid) return

if (this.selectform.invalid) return

let imagesDiplomes: any = this.liste_fils.map(async (asset: any) => {
  const url = await this.firebaseStorageService.uploadFile({
    folder: 'filsDiplomes',
    filename:
      'filsDiplomes-file-' +
      new Date().getTime() +
      this.userId +
      '.' +
      asset.format,
    file: asset.file,
  });

  asset.downloadUrl = url;

  return url;
});

imagesDiplomes = await Promise.all(imagesDiplomes);

const infoPreselect = 
{
  
  LieuNaissance: this.selectform.value.LieuNaissance,
  dateNaissance: this.selectform.value.dateNaissance,
  paysNaissance: this.selectform.value.paysNaissance,
  Pere: {
           nom: this.pereName,
           prenoms: this.perePrenoms

        },
  Mere: {
    nom: this.mereName,
    prenoms: this.merePrenoms

       },
  nPasseport: this.selectform.value.nPasseport,
  lieuPasseport: this.selectform.value.lieuPasseport,
  dateEmiPasseport: this.selectform.value.dateEmiPasseport,
  dateExpPasseport: this.selectform.value.dateExpPasseport,
  derniereResidence: this.selectform.value.derniereResidence,
  derniereResidencePays: this.selectform.value.derniereResidencePays,
  derniereResidenceVillage: this.selectform.value.derniereResidenceVillage,
  qualiProfession: this.selectform.value.qualiProfession,
  principalProfession: this.selectform.value.principalProfession,
  langueParler: this.selectform.value.langueParler,
  expProfesionnel: this.selectform.value.expProfesionnel,
  nbrEnfants: this.selectform.value.nbrEnfants,
  dHonneur: this.selectform.value.dHonneur,   
  fils_diplome: imagesDiplomes ,    
  fil_photo: this.filPhoto ,    
  fil_passportPhoto: this.filPhotoPassport,    
  fil_casierJudiciere: this.filPhotoCasier,    
  

}

try {
            
  this.userServ.select(infoPreselect, this.userId)
  this.router.navigate(["dashboardUser", {index: 1}])
 }    

catch  {

  (error: { code: any; message: any }) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('vous aviez une erreur ' + errorCode + ': ' + errorMessage);
  };

}





}



}
