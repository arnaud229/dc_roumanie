import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { FinancesService } from '../services/Finances/finances.service';
import { VideosService } from '../services/videos/videos.service';
import { User } from 'src/models/variables';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { UsersService } from '../services/firebase/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent {


  
  selecter: number = 0;
  selecterMobile: number = 0;
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
  
  list_users = [

    {
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
     
    },
    {
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
     
    },
    {
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
     
    },
    {
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
     
    },
    {
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
      ldtep2: false,
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
      dHonneur: true,
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
     
    },
    {
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
      passport: true,
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
     
    },
    {
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
      passport: true,
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
      dHonneur: true,
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
     
    },

  ]

  isFiltre = false;
  isPreselect = false;
  isSelect = true;
  isVideo = false;
  isFinance = true;
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
  titleHeadMobile: string = '';

  //modifier preselect vatiable
  isUploading = false;
  pre = "";
  edite = "";
  switch = false;

  les_url = [""];
  progressValue  = 0;

  TotalsDettes: number =0;
  TotalsRemboursements: number =0;



liste_Dette: any [] = [];
liste_Remboursement: any [] = [];

public pieChart: GoogleChartInterface = {
  chartType: GoogleChartType.PieChart,
  dataTable: [
    ['Etat financière', 'Etat financière'],
    ['Dette',     7 ],
    ['Rembourssement',    11],
    // ['Dette',     this.getTotalsDettes() ],
    // ['Rembourssement',      this.getTotalsRemboursements()],
   
  ],
  //firstRowIsData: true,
  options: {
    title: 'Etat financière',
    width: '500px',
    height: '400px',
    legend: { position: 'bottom' }, // Position de la légende
    colors: ['#FF0000', '#0dff00', '#3F51B5'],
    pieHole: 0.4 ,// Crée un trou au milieu du camembert
  
  },
 
  
};

filter =0;
  

  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private Aroute: ActivatedRoute,
    private financeServices: FinancesService,
    private videoService: VideosService,
    private userServ : UsersService,
  ) {}


  ngOnInit() {

   let user = this.localstorageService.getCurrentUser()
    console.log('user honneur:', user.dHonneur);
    
    this.currentUser  = user;
  

    console.log('selecter11', this.selecter);

    this.authService.getUser(this.userId).then(
      (res) => {
        console.log('user Data', res);
        
      }
    ) 
    

    console.log('vrai userData',this.currentUser);
 
         this.Aroute.params.subscribe(params => {
          const indexParams = params['index'];

          if (indexParams !== undefined) {
         this.selecter = params['index']; 
        this.selecterMobile = params['index']; 

            console.log('selector:', this.selecter);
            
    
         } else {
           console.log('oooo');
           
           this.selecter = 0;
           this.selecterMobile = 0;
           console.log('selecter', this.selecter);
           
         }

  })
   
}

getFiltre() {
  this.isFiltre = !this.isFiltre;
}

getFiltreByValue(inde: number) {

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

 selected(index: number) {
  if (index == 0) {

    this.selecter = 0 ;
    this.selecterMobile = 0 ;
    this.isOpenMenu = false;
    this.isEditPreselect = false;
    this.titleHeadMobile = "Préselection";

    console.log('tittle0', this.titleHeadMobile);

  if (this.currentUser.ldtep2) {

    this.viewDisponibilite = 'oui';

    if (this.currentUser.passport) {

      this.viewPasseportDisponible = 'oui'
      
    } else 
    {
      this.viewPasseportDisponible = 'non'
    }

    this.isPreselect = true;

    if (this.currentUser.isvalidePreselect ) {
      this.colorValidPreselect = true;

      this.statutPreselect = 'Validé'
      
    } else {
      this.statutPreselect = 'En cours'
    }
    
  } else {

    this.isPreselect = false;
    this.viewDisponibilite = 'non';

  }

    if (this.currentUser.ldtep2) {

      this.viewDisponibilite = 'oui';

      this.isPreselect = true;

      if (this.currentUser.isvalidePreselect ) {
        this.colorValidPreselect = true;

        this.statutPreselect = 'Validé'
        
      } else {
        this.statutPreselect = 'En cours'
      }
      
    } else {
    
      this.isPreselect = false;
      this.viewDisponibilite = 'non';


    }


    
  } else if (index == 1) {

     this.selecter = 1;
     this.selecterMobile = 1;
     this.isOpenMenu = false;
     this.isEditSelect = false;
     this.titleHeadMobile = "Selection"

     console.log('tittle1', this.titleHeadMobile);
     

     if (this.currentUser.dHonneur ) {
    
      

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

  } else if (index == 2) {

    this.selecter = 2 ;
    this.selecterMobile = 2 ;
    this.titleHeadMobile = "Etat Finacière"
    this.isOpenMenu = false;

    if (this.liste_Dette.length > 0) {
      this.isFinance = true;          
} else
{
this.isFinance = false;
}

    
    
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


getusers() {

  if (this.selecter == 0) {
    const data = {
      pagination: {
        startAt: 0,
        limit: 20,
      },
      filters: {
        orderByQueries: ['createdAt'],
        whereQueries: [
          {
            fieldPath: 'ldtep2',
            opStr: '==',
            value: true,
          },
        ],
      },
    };

    this.userServ.getUsers(data).subscribe(
      (res) => {

        this.list_users = res.data;
         
      },
      (error) => {
        console.log('error :>> ', error);
      
      }
    )

    
  } else if (this.selecter == 1) {

    const data = {
      pagination: {
        startAt: 0,
        limit: 20,
      },
      filters: {
        orderByQueries: ['createdAt'],
        whereQueries: [
          {
            fieldPath: 'dHonneur',
            opStr: '==',
            value: true,
          },
        ],
      },
    };

    this.userServ.getUsers(data).subscribe(
      (res) => {

        this.list_users = res.data;
         
      },
      (error) => {
        console.log('error :>> ', error);
      
      }
    )

  }
  
  

 
  


}

getVideos() {

  this.videoService.getVideos().subscribe(
    (res) => {
      console.log('res', res);

      this.liste_videos = res.data
      
    }
  )

}

getDettes() {

  this.financeServices.getDettes().subscribe(
     (res) => {
      console.log('res', res);

      this.liste_Dette = res.data;

      this.liste_Dette.forEach(
        (res) => {
          this.TotalsDettes += res.montantDu
        }
      )

      console.log('montant du', this.TotalsDettes);
        
     }
  )

}


gitRemboursement() {
  this.financeServices.getRemboursements().subscribe(
    (res) => {
      console.log('res', res);
      
    this.liste_Remboursement = res.data;

    this.liste_Remboursement.forEach(
      (el) => {
        this.TotalsRemboursements += el.montantRembourse
      }
    )

    console.log('les remboursement', this.TotalsRemboursements);
      
    }
  )
}



}
