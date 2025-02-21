import { Component, ElementRef, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecuFile, User } from 'src/models/variables';
import { UsersService } from '../services/firebase/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StorageService } from '../services/storage/storage.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { UtilsService } from '../services/utils/utilis.service';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-edit-preselect',
  templateUrl: './edit-preselect.component.html',
  styleUrls: ['./edit-preselect.component.scss']
})
export class EditPreselectComponent {

  
  //modifier preselect vatiable

  editPreselectform!: FormGroup;
  isUploading = false;
  pre = "";
  edite = "";
  switch = false;
  listMatrimonial = ["Célibataire", "Marié(e)", "Veuf(ve) "];
  liste_fils: RecuFile[] = [];
  @ViewChild('fileInput')
  fileInput!: ElementRef; 
  imgs = "./../../assets/roumanie-visiter.jpg"
  userId = "MtobwWoig2O9pxxSIKhwHuG5h3X2";
  removedImages: any[] = [];
  multiple: boolean = false;
  change: EventEmitter<any[]> = new EventEmitter();
  onRemovePicture: EventEmitter<any[]> = new EventEmitter();
  maxFileSize = 10;
 
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
    cWhatapp: {
      code: '+229',
      numero: '69741258'
    },
    parrain: 'lolo tolo',
    religion: 'musulman',
    ldtep2: true,
    fils_recus: [
      './../../assets/croixDelete.png',
      './../../assets/croixDelete.png',
    ],
    admin: false,
    partenaire: false,
    LieuNaissance: 'alladas',
    dateNaissance: new Date(),
    paysNaissance: '',
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
      }
    ],
    nbrEnfants: 0,
    dHonneur: false,
    fils_diplome: [],
    fil_photo: "./../../assets/roumanie-visiter.jpg",
    fil_passportPhoto: "./../../assets/roumanie-visiter.jpg",
    fil_casierJudiciere: "./../../assets/roumanie-visiter.jpg",
    isvalidePreselect: false,
    isvalidSelect: false,
    isProcessSucceful: false,
    adminId: undefined,
    adminPrenoms: ''
  };
  message = '';
  ChoixImg : boolean = false;
  loading = false;
  iserrorlog : boolean =  false;

  les_url: any[] = [];
  progressValue  = 0;
  itemToEditImages: any[] = []; // new Array(20)
  listPrefixe: any[] = [];
  listReligion: any[] = [];

  
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userServ : UsersService,
    private afs: AngularFirestore,
    private firebaseStorageService: StorageService,
    public localstorageService: LocalstorageService,
    public utilsService: UtilsService,
     private languageChange: LanguageService, 
  ) {
    this.listPrefixe =  this.utilsService.getListPrefixe();
    this.listReligion = this.utilsService.getListReligion();
    this.init_form();
  }

  ngOnInit() {
    this.languageChange.getLanguage();
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

  }
 



  delete(index : number) {
    console.log('111');
  
    this.removedImages.push(this.itemToEditImages[index])
    this.itemToEditImages.splice(index, 1);
    this.emitChangeEvent();
    // this.onRemovePicture.emit(this.removedImages)

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







   // preselection edit

   init_form(){

     console.log('the currentUser', this.currentUser);
     
     const arayImg = [this.currentUser.fils_recus];

     this.itemToEditImages = (arayImg || []).map((e: any) => {
       return { previewUrl: e, type: 'image', url: e }
     })

    this.editPreselectform = this.formbuilder.group({
      age: this.currentUser.age,
      sMatrimoniale: this.currentUser.sMatrimoniale,
      NEtude: this.currentUser.NEtude,
      metier: this.currentUser.metier,
      aDiplome: this.currentUser.aDiplome,
      dApprentissage: this.currentUser.dApprentissage,
      aExperience: this.currentUser.aExperience,
      ePrecedent: this.currentUser.ePrecedent,
      passport: this.currentUser.passport,
      nationalite: this.currentUser.nationalite,
      cWhatapp: this.currentUser.cWhatapp,
      parrain: this.currentUser.parrain,
      religion: this.currentUser.religion, 
      ldtep2: this.currentUser.ldtep2, 
      // fils_recus: [ this.itemToEditImages?.[0]], 
      fils_recus: "", 
      noFilRecu: false,
      
     
    });

    this.pre = this.currentUser.cWhatapp.code;
    this.edite = this.currentUser.cWhatapp.numero

    console.log("pre", this.pre);
    console.log("numéro", this.edite);
    console.log("les_url", this.itemToEditImages );   
  } 

  suivantPreselect() {
 

    if (this.editPreselectform.value.noFilRecu === true ) {
      this.switch = !this.switch;
      const arayImg = [this.currentUser.fils_recus];

      this.itemToEditImages = (arayImg || []).map((e: any) => {
        return { previewUrl: e, type: 'image', url: e }
      })
    } else
    {
       this.editPreselect();
    }

  }


  getfilsPreselect() {
    console.log('has click', this.fileInput);
    setTimeout(() => {
      this.fileInput.nativeElement.click();
    }, 500);
  }



async   onFilesSelectedPreselect(evt : any) {
    console.log('evt', evt);
    let files = [...evt.target.files];
    evt.target.value = null;
    const invalidFile = files.find(
      (e) => e.size / 1024 / 1024 > this.maxFileSize
    );
    if (invalidFile) {
      this.loading = true;
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
    this.emitChangeEventLog();
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

   async editPreselect() {

    console.log(" edith Preselect",this.editPreselectform.value);

    
    if (this.editPreselectform.invalid) return
    this.loading = true;
    this.iserrorlog = false;

    if (this.editPreselectform.value.noFilRecu === false) {

      var infoPreselect = 
      {
        
        age: this.editPreselectform.value.age,
        sMatrimoniale: this.editPreselectform.value.sMatrimoniale,
        NEtude: this.editPreselectform.value.NEtude,
        metier: this.editPreselectform.value.metier,
        aDiplome: this.editPreselectform.value.aDiplome,
        dApprentissage: this.editPreselectform.value.dApprentissage,
        aExperience: this.editPreselectform.value.aExperience,
        ePrecedent: this.editPreselectform.value.ePrecedent,
        passport: this.editPreselectform.value.passport,
        nationalite: this.editPreselectform.value.nationalite,
        cWhatapp:
        {
          code: this.pre,
          numero: this.edite
        },
         
         parrain: this.editPreselectform.value.parrain,
         religion: this.editPreselectform.value.religion, 
        ldtep2: this.editPreselectform.value.ldtep2, 
        fils_recus: [],
        noFilRecu: false,
         
  
      }
      
    } else {
      
    let images: any = this.les_url.map(async (asset: any) => {
      const url = await this.firebaseStorageService.uploadFile({
        folder: 'filsRecus',
        filename:
          'Recus-preinscription-' +
          new Date().getTime() +
          this.userId +
          '.' +
          asset.format,
        file: asset.file,
      });

      asset.downloadUrl = url;

      return url;
    });

    const uploadedUrls = await Promise.all(images);
    // Filtrer les URLs null (échecs de téléchargement)
    const successfulUrls = uploadedUrls.filter(url => url !== null);


      //delete removed files from firebase  
        await Promise.all(this.removedImages.map(async (image: any) => {
          const { url } = image
          return await this.firebaseStorageService.deleteFileFromUrl({
            url,
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
      


   

    var infoPreselect =
    {
      
      age: this.editPreselectform.value.age,
      sMatrimoniale: this.editPreselectform.value.sMatrimoniale,
      NEtude: this.editPreselectform.value.NEtude,
      metier: this.editPreselectform.value.metier,
      aDiplome: this.editPreselectform.value.aDiplome,
      dApprentissage: this.editPreselectform.value.dApprentissage,
      aExperience: this.editPreselectform.value.aExperience,
      ePrecedent: this.editPreselectform.value.ePrecedent,
      passport: this.editPreselectform.value.passport,
      nationalite: this.editPreselectform.value.nationalite,
      cWhatapp:
      {
        code: this.pre,
        numero: this.edite
      },
       
       parrain: this.editPreselectform.value.parrain,
       religion: this.editPreselectform.value.religion, 
      ldtep2: this.editPreselectform.value.ldtep2, 
      fils_recus: updatedImages, 
      noFilRecu: true,

    }
      
    }




    console.log("infoPreselect: ",infoPreselect); 
    


    await this.userServ.preselect(infoPreselect, this.userId).then(
      (res) => {

        this.loading = false;
        console.log('res', res);
        this.router.navigate(["dashboardUser", {index: 0}])


      }
    )
    .catch((e) => {
      this.loading = true;
      this.iserrorlog = true;
      var errorCode = e.code;
      var errorMessage = e.message;
      this.message = errorMessage;
      console.log('vous aviez une erreur ' + errorCode + ': ' + errorMessage);
     
    });
   

  }

  closeError() {
    this.loading = false;
    this.isUploading = false;
   }

  // https://web.telegram.org/a/#-1001909533311


}
