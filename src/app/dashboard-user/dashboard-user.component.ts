import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { User } from 'src/models/variables';

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
  isPreselect = false;
  isSelect = true;
  statutPreselect = 'En cours'
  statutFinance = 'En cours'

  colorValidPreselect = false;
  colorValidSelect = true;
  colorValidFinance = false;
  isEditPreselect = false;
  isEditSelect = false;
  viewHonneur = 'non';
  viewDisponibilite = 'non';
  viewPasseportDisponible = 'non';
  isOpenMenu = false;

  




  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private Aroute: ActivatedRoute
  ) {}


  ngOnInit() {

    // this.currentUser = this.localstorageService.getCurrentUser();

    //  this.Aroute.params.subscribe(params => {
    //   this.selecter = params['index'];   
    //   this.selecterMobile = params['index'];   

    //   console.log('selector:', this.selecter);
    //   // Use the userId for your component's logic
   
    //   })


     this.getEtat()
}



  selected(index: number) {
    if (index == 0) {

      this.selecter = 0 ;
      this.selecterMobile = 0 ;
      this.isOpenMenu = false;


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

    } else if (index == 2) {

      this.selecter = 2 ;
      this.selecterMobile = 2 ;

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
    
  }

 }



 editPreselect() {

 }

 editSelect() {

 }


 openMenu() {

  this.isOpenMenu = !this.isOpenMenu

 }
}
