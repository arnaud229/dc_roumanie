import { Component, ElementRef, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecuFile, User } from 'src/models/variables';
import { UsersService } from '../services/firebase/user.service';
import { StorageService } from '../services/storage/storage.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';

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

  filPhotoDiplomes: any[] = [];
  itemToEditImages: any[] = []; // new Array(20)
  removedImages: any[] = [];
  les_url: any[] = [];
  ChoixImg : boolean = false;
  oldFilPhoto: any = "";
  oldFilPasseport: any = "";
  oldFilCassierJudiciere: any = "";


  
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userServ : UsersService,
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

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValues']) {
      // Perform actions when the inputValue changes
      const initialValues = changes['initialValues'].currentValue;
      this.itemToEditImages = initialValues
      console.log('initialValues :>> ', initialValues)

   }

   this.init_form();

  }

  init_form(){

    console.log('the currentUser', this.currentUser);
     
    const arayImg = [this.currentUser.fils_recus];

    this.itemToEditImages = (arayImg || []).map((e: any) => {
      return { previewUrl: e, type: 'image', url: e }
    })

    console.log('les anciennes img', this.itemToEditImages);
    

    this.selectform = this.formbuilder.group({
      LieuNaissance: this.currentUser.LieuNaissance,
      dateNaissance:  this.currentUser.dateNaissance,
      paysNaissance: this.currentUser.paysNaissance,
      pereName: this.currentUser.Pere.nom,
      perePrenoms: this.currentUser.Pere.prenoms,
      mereName: this.currentUser.Mere.nom ,
      merePrenoms: this.currentUser.Mere.prenoms ,
      nPasseport: this.currentUser.nPasseport,
      lieuPasseport: this.currentUser.lieuPasseport,
      dateEmiPasseport: this.currentUser.dateEmiPasseport,
      dateExpPasseport: this.currentUser.dateExpPasseport,
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

   this.oldFilPhoto = { previewUrl: this.currentUser.fil_photo, type: 'image', url: this.currentUser.fil_photo } ;
   this.oldFilPasseport = { previewUrl: this.currentUser.fil_passportPhoto, type: 'image', url: this.currentUser.fil_passportPhoto };
   this.oldFilCassierJudiciere = { previewUrl: this.currentUser.fil_casierJudiciere, type: 'image', url: this.currentUser.fil_casierJudiciere };

    this.expTable = this.currentUser.expProfesionnel;
    
    if (this.expTable.length > 0) {

      this.isValExperience = true;
      this.valAjout = true;
      
    }

}

delete(index : number) {
  console.log('111');

  this.removedImages.push(this.itemToEditImages[index])
  this.itemToEditImages.splice(index, 1);
  this.emitChangeEvent();
  // this.onRemovePicture.emit(this.removedImages)

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
    console.log('val experience', this.expTable.length);

      
    if (this.expTable.length > 0) {

      this.isValExperience = true;
      this.valAjout = true;
    }

    console.log('isValExperience', this.isValExperience);
    
    

}
getfils() {
  console.log('has click', this.fileInput);
  setTimeout(() => {
    this.fileInput.nativeElement.click();
  }, 500);
}

getfils1() {
  console.log('has click', this.fileInput);
  setTimeout(() => {
    this.fileInput1.nativeElement.click();
  }, 500);
}

getfils2() {
 
  console.log('has click', this.fileInput);
    setTimeout(() => {
      this.fileInput2.nativeElement.click();
    }, 500); 
}

getfils3() {
  console.log('has click', this.fileInput);
  setTimeout(() => {
    this.fileInput3.nativeElement.click();
  }, 500);
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
      console.log('this.oldFilPhoto', this.oldFilPhoto); 
      
      const table = [...this.oldFilPhoto ]
      console.log('table', table); 
      
      const tableOld = (table || []).map((e: any) => {
        return { previewUrl: e, type: 'image', url: e }
      })

       await Promise.all(tableOld.map(async (image: any) => {
       
        const  { url } = image
        return await this.firebaseStorageService.deleteFileFromUrl({
           url 
        });
      })).catch(e => {
        // this.isLoading = false
        console.log('lerreur', e);
        
        // this.,
      })


     let imagePhoto: any = files.map(async (asset: any) => {
      const url = await this.firebaseStorageService.uploadFile({
        folder: 'filsPhoto',
        filename:
          'filsPhoto-file-' +
          new Date().getTime() +
          this.userId +
          '.' +
          asset.name?.split('.')?.[1],
        file: asset,
      });
    
      asset.downloadUrl = url;   
      return url;
    });
  
  
    const uploadedUrls = await Promise.all(imagePhoto);
  
     
    // Filtrer les URLs null (échecs de téléchargement)
    const successfulUrls = uploadedUrls.filter(url => url !== null);

    this.filPhoto = successfulUrls[0];

    console.log('le url', this.filPhoto);

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

const {urlOld} = this.oldFilPasseport;

if (this.oldFilPasseport !='' || this.oldFilPasseport != undefined ) {
      await this.firebaseStorageService.deleteFileFromUrl(urlOld);

}


let imagePhotoPasseport: any = files.map(async (asset: any) => {
const url = await this.firebaseStorageService.uploadFile({
  folder: 'filsPhotoPasseport',
  filename:
    'filsPhotoPasseport-file-' +
    new Date().getTime() +
    this.userId +
    '.' +
    asset.name?.split('.')?.[1],
  file: asset,
});

asset.downloadUrl = url;   
return url;
});


const uploadedUrls = await Promise.all(imagePhotoPasseport);


// Filtrer les URLs null (échecs de téléchargement)
const successfulUrls = uploadedUrls.filter(url => url !== null);

this.filPhotoPassport = successfulUrls[0];

console.log('le url', this.filPhotoPassport);


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


  
const {urlOld} = this.oldFilCassierJudiciere;



if (this.oldFilCassierJudiciere !='' || this.oldFilCassierJudiciere != undefined ) {
  await this.firebaseStorageService.deleteFileFromUrl(urlOld);

}


let imagePhotoCassierJudiciaire: any = files.map(async (asset: any) => {
const url = await this.firebaseStorageService.uploadFile({
folder: 'filsPhotoCasier',
filename:
'filsPhotoCassier-file-' +
new Date().getTime() +
this.userId +
'.' +
asset.name?.split('.')?.[1],
file: asset,
});

asset.downloadUrl = url;   
return url;
});


const uploadedUrls = await Promise.all(imagePhotoCassierJudiciaire);


// Filtrer les URLs null (échecs de téléchargement)
const successfulUrls = uploadedUrls.filter(url => url !== null);

this.filPhotoCasier = successfulUrls[0];

console.log('le url', this.filPhotoCasier);


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
  this.emitChangeEventLog();
  // this.les_url = new Array(10).fill({}).map(e=>files[0])
  console.log('this.les_url', this.currentUser.fils_diplome);
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
    this.change.emit(this.itemToEditImages);
  }

  if (!this.multiple) {
    this.change.emit(this.itemToEditImages[0]);
  }
}

  async emitChangeEventLog() {

    
    if (this.multiple) {
      this.change.emit(this.les_url);
    }

    if (!this.multiple) {
      this.change.emit(this.les_url[0]);
    }

  }

activeAjoutExperience() {

  this.isValExperience = false;
  this.valAjout = true;
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


async editSelect() {
  
  console.log(" select",this.selectform.value); 
  console.log(" experience ",this.expTable); 
  
  if (this.selectform.invalid) return
  
  let imagesDiplomes: any = this.liste_fils.map(async (asset: any) => {
    const url = await this.firebaseStorageService.uploadFile({
      folder: 'filsDiplomes',
      filename:
        'filsDiplomes-file-' +
        new Date().getTime() +
        this.userId +
        '.' +
        asset.name?.split('.')?.[1],
      file: asset.file,
    });
  
    asset.downloadUrl = url;   
    return url;
  });


  const uploadedUrls = await Promise.all(imagesDiplomes);

   
  // Filtrer les URLs null (échecs de téléchargement)
  const successfulUrls = uploadedUrls.filter(url => url !== null);

      //delete removed files from firebase
      await Promise.all(this.removedImages.map(async (image: any) => {
       
        const  { url } = image
        return await this.firebaseStorageService.deleteFileFromUrl({
           url 
        });
      })).catch(e => {
        // this.isLoading = false
        console.log('lerreur', e);
        
        // this.,
      })
  
      const remainingImagesAfterDeletion = this.itemToEditImages.filter(initial => {
        return !this.removedImages.some(removed => removed.url === initial.url)
      }).map(e => e.url)
      // console.log('this.sel :>> ', this.selectedImages, this.removedImages, this.itemToEditImages);
      // console.log('this.remainingImagesAfterDeletion :>> ', addedFiles, remainingImagesAfterDeletion);
      const avantupdateImages = [...remainingImagesAfterDeletion, ...successfulUrls];
  
      const updatedImages = avantupdateImages.flat();



  console.log('uploadedUrls',updatedImages);
 

   
      const infoSelect = 
    {
      
      LieuNaissance: this.selectform.value.LieuNaissance,
      dateNaissance: this.selectform.value.dateNaissance,
      paysNaissance: this.selectform.value.paysNaissance,
      Pere: {
               nom: this.selectform.value.pereName,
               prenoms: this.selectform.value.perePrenoms

            },
      Mere: {
        nom: this.selectform.value.mereName,
        prenoms: this.selectform.value.merePrenoms

           },
      nPasseport: this.selectform.value.nPasseport,
      lieuPasseport: this.selectform.value.lieuPasseport,
      dateEmiPasseport: this.selectform.value.dateEmiPasseport,
      dateExpPasseport: this.selectform.value.dateExpPasseport,
      derniereResidence: this.selectform.value.derniereResidence,
      derniereResidencePays: this.selectform.value.derniereResidencePays,
      derniereResidenceVillage: this.selectform.value.derniereResidenceVillage,
      qualiProfession: this.selectform.value.qualiProfession,
      principalProfession: this.selectform.value.pricipalProfession,
      langueParler: this.selectform.value.langueParler,
      expProfesionnel: this.expTable,
      nbrEnfants: this.selectform.value.nbrEnfants,
      dHonneur: this.selectform.value.dHonneur,   
      fils_diplome:updatedImages,    
      fil_photo: this.filPhoto ,    
      fil_passportPhoto: this.filPhotoPassport,    
      fil_casierJudiciere: this.filPhotoCasier,    
      

    }
    console.log('toto36');
    console.log('infos pour selecteur', infoSelect); 
        
    this.userServ.select(infoSelect, this.userId)
    .then(
      () => 
      {
        this.router.navigate(["dashboardUser", {index: 1}]);

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



}
