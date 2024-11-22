import { Component, ElementRef, ChangeDetectorRef, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/firebase/user.service';
import { RecuFile, User } from 'src/models/variables';
import { StorageService } from '../services/storage/storage.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { UtilsService } from '../services/utils/utilis.service';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {

  selectform!: FormGroup;
  parentform!: FormGroup;
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
  
  filPhoto ='';
  maxFileSize = 10;
  message ="";
  filPhotoDiplomes!: any[];

  filPhotoPassport = "";

  filPhotoCasier ="";
  
   valAjout = false;
  imgs = "./../../assets/roumanie-visiter.jpg"
  userId: string = ""
 

  telVisible =0;


  Lentreprise ='';
  posteOccupe ='';
  dateDebut!: Date ;
  datefin!: Date;
  expTable: any[] = [] ;

  les_url!: any[];
  iserrorlog : boolean = false;
  multiple: boolean = false;
  change: EventEmitter<any[]> = new EventEmitter();
  progressValue  = 0;
  progressValue1  = 0;
  progressValue2  = 0;
  progressValue3  = 0;

  currentUser!: User 
  listReligion: any[] = [];
  listCountries: any[] = [];






  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userServ : UsersService,
    private firebaseStorageService: StorageService,
    private cdr: ChangeDetectorRef,
    public localstorageService: LocalstorageService,
    public utilsService: UtilsService,
  ) {
    this.listReligion = this.utilsService.getListReligion();
    this.listCountries = this.utilsService.getListCountries();
    this.init_form();
  }

  ngOnInit() {
    this.init_form();
    this.currentUser = this.localstorageService.getCurrentUser();
    this.userId = this.currentUser.uid
  }



  init_form(){
    this.selectform = this.formbuilder.group({
      LieuNaissance: ['',Validators.required],
      dateNaissance:  ['',Validators.required],
      paysNaissance:  ['',Validators.required],
      // Pere: ['',Validators.required],
      // Mere: ['',Validators.required],
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
      pereName: ['',Validators.required],
      perePrenoms:  ['',Validators.required],
      mereName:  ['',Validators.required],
      merePrenoms:  ['',Validators.required],    
      
     
     
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
         console.log(" pere et mere ",this.selectform.value);
      
        this.cdr.detectChanges();
        
      } else if (index==2) {
        this.telVisible = 2
        
      }
   

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

 async  onFilesSelected1(event : any) {

    this.isUploading1 = true;
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
    
      this.message = "La taille de votre fichier lié au photo complet depasse 10MB, veuillez choisi un fichier moins de  10MB"
      return;
    }
  
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

 async  onFilesSelected2(event : any) {

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
    
    let imagePhotoPasseport: any = files.map(async (asset: any) => {

      console.log('asset:', asset); 
      
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
    
        this.message = "La taille de votre fichier au cassier juduciaire depasse 10MB, veuillez choisi un fichier moins de  10MB"
        return;
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

  closeError() {
    this.iserrorlog = false;
    this.isUploading = false;
    this.isUploading1 = false;
    this.isUploading2 = false;
    this.isUploading3 = false;
   }
  
  async onFilesSelected(event : any) {
   
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
    this.les_url =  [...files];
    // this.emitChangeEvent();
    console.log('this.les_url', this.les_url);
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

  fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

  ajout() {

    const Otable = {

      entreprise: this.Lentreprise,
      posteOccupe: this.posteOccupe,
      dateDebut: this.dateDebut,
      datefin: this.datefin

    }

    console.log('Otable', Otable);
    

    this.expTable.push(Otable)

    this.Lentreprise ="";
    this.posteOccupe ="";
    this.dateDebut = new Date();
    this.datefin = new Date()
    this.valAjout = true;

    console.log("le tableau experience", this.expTable);
    


  }

  clearDate() {
    this.dateInput.nativeElement.value = '';
  }

 async select() {
  
    console.log(" select",this.selectform.value); 
    console.log(" experience ",this.expTable); 
    
    if (this.selectform.invalid) return
    
    let imagesDiplomes: any = this.les_url.map(async (asset: any) => {
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

    console.log('uploadedUrls',uploadedUrls);
    
    // Filtrer les URLs null (échecs de téléchargement)
    const successfulUrls = uploadedUrls.filter(url => url !== null);

    console.log('succesfulUrls', successfulUrls);
    

  
       this.les_url = [...successfulUrls]
         console.log('tete11');

    console.log('tete2');
     
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
        fils_diplome:imagesDiplomes,    
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
