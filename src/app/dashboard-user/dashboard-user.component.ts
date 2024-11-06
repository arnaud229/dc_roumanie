import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { RecuFile, User } from 'src/models/variables';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideosService } from '../services/videos/videos.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {

  selecter = 1;
  selecterMobile = 1;
  userId = ""; 
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
      "./../../assets/roumanie-visiter.jpg"
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
      
  "./../../assets/roumanie-visiter.jpg",
  "./../../assets/roumanie-visiter.jpg",
  "./../../assets/roumanie-visiter.jpg",
     
    ],
    fil_photo: "./../../assets/roumanie-visiter.jpg"
    ,
    fil_passportPhoto: "./../../assets/roumanie-visiter.jpg",
    fil_casierJudiciere: "./../../assets/roumanie-visiter.jpg",
    isvalidePreselect: false,
    isvalidSelect: false
   
  };
  isPreselect = false;
  isSelect = true;
  isVideo = false;
  isFinance = false;
  statutPreselect = 'En cours'
  statutFinance = 'En cours'
  liste_videos!: any [];

  colorValidPreselect = false;
  colorValidSelect = true;
  colorValidFinance = false;
  isEditPreselect = false;
  isEditSelect = false;
  viewHonneur = 'non';
  viewDisponibilite = 'non';
  viewPasseportDisponible = 'non';
  isOpenMenu = false;
  titleHeadMobile = 'Preselect';

  //modifier preselect vatiable

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


  les_url = [""];
  progressValue  = 0;

  




  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private Aroute: ActivatedRoute,
  
    private videoService: VideosService,
  ) {}


  ngOnInit() {

    // this.currentUser = this.localstorageService.getCurrentUser();
    // this.userId = this.currentUser.uid;

    // if (this.Aroute.params) {

    //      this.Aroute.params.subscribe(params => {
    //   this.selecter = params['index']; 
    //   this.selecterMobile = params['index']; 

    //   console.log('selector:', this.selecter);
    //   // Use the userId for your component's logic
        
    //   })

    
    // this.getEtat()
    
    // } 

    this.getVideoByUser();
  

  


}



  selected(index: number) {
    if (index == 0) {

      this.selecter = 0 ;
      this.selecterMobile = 0 ;
      this.isOpenMenu = false;
      this.isEditPreselect = false;
      this.titleHeadMobile = "Préselection";


      console.log(1);
    

      if (this.currentUser.ldtep2) {

        this.viewDisponibilite = 'oui';
  
        console.log(2);
  
        this.isPreselect = true;
  
        if (this.currentUser.isvalidePreselect ) {
          this.colorValidPreselect = true;
  
          this.statutPreselect = 'Validé'
          
        } else {
          this.statutPreselect = 'En cours'
        }
        
      } else {
        console.log(3);
        this.isPreselect = false;
        this.viewDisponibilite = 'non';

  
      }


      
    } else if (index == 1) {

       this.selecter = 1;
       this.selecterMobile = 1;
       this.isOpenMenu = false;
       this.isEditSelect = false;
       this.titleHeadMobile = "Selection"

    } else if (index == 2) {

      this.selecter = 2 ;
      this.selecterMobile = 2 ;
      this.titleHeadMobile = "Etat Finacière"
      this.isOpenMenu = false;
      
    } else if(index == 3) {

      this.selecter = 3 ;
      this.selecterMobile = 3 ;
      this.titleHeadMobile = "Videos de présentation"
      this.isOpenMenu = false;
    }

  }

  logOut() {

    this.localstorageService.logout()

  }


  goToPreinscription() {
    this.router.navigate(["preselection"]);
  }

  goToSelection()
 {
  this.router.navigate(["selection"]);

 }

 goToVideos()
 {
  this.isOpenMenu = false;
  this.router.navigate(["videos"]);

 }

 getEtat() {

  if (this.selecter ==0  ) {

    console.log(1);
    this.titleHeadMobile = 'Préseléction'
    

    if (this.currentUser.ldtep2) {

      this.viewDisponibilite = 'oui';

      if (this.currentUser.passport) {

        this.viewPasseportDisponible = 'oui'
        
      } else 
      {
        this.viewPasseportDisponible = 'non'
      }



      console.log(2);

      this.isPreselect = true;

      if (this.currentUser.isvalidePreselect ) {
        this.colorValidPreselect = true;

        this.statutPreselect = 'Validé'
        
      } else {
        this.statutPreselect = 'En cours'
      }
      
    } else {
      console.log(3);
      this.isPreselect = false;
      this.viewDisponibilite = 'non';

    }
    
  } else  if (this.selecter ==1 ) {

    if (!this.currentUser.dHonneur ) {

      this.viewHonneur = 'oui'
      this.titleHeadMobile ='Seléction'

      this.isSelect = true;

      if (this.currentUser.isvalidSelect) {
        this.colorValidSelect = true;

        this.statutFinance = 'Validé'
        
      } else {
        this.statutFinance = 'En cours'
      }
      
    } else {
      console.log(3);
      this.isSelect = false;
      this.viewHonneur = 'non'

    }
    
  } else if(this.selecter ==2 ) {


    this.selecter = 2;
    this.selecterMobile = 2;
    this.isOpenMenu = false;
    this.titleHeadMobile ='Etat Finacière'
    
  }

 }



 editPreselect() {

  this.isEditPreselect = true;

 }

 editSelect() {

  this.isEditSelect = true;

 }


 openMenu() {

  this.isOpenMenu = !this.isOpenMenu

 }

 editMobile() 
 {

  if (this.selecter == 0) {

    this.router.navigate(['editpreselect'])   ;

    
  } else if (this.selecter == 1) {

    this.router.navigate(['editselect'])   ;
    
  }else if(this.selecter == 3) {

  }

 }

 getVideoByUser() {

 
   this.videoService.getVideoByUserId(this.userId).subscribe(
    (res) => {

      this.liste_videos = res.data;
      console.log("les videos", this.liste_videos);
      
    },

    (err: any) => {
      console.log('err :>> ', err);
    }
   )

 }

 editVideo(index: any) {

 }

 


}
