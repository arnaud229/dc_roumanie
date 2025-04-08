import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { FinancesService } from '../services/Finances/finances.service';
import { VideosService } from '../services/videos/videos.service';
import { User } from 'src/models/variables';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { UsersService } from '../services/firebase/user.service';
import { map } from 'rxjs';
import { coachingService } from '../services/coaching/coaching.service';
import { anglaireService } from '../services/anglaire/anglaire.service';
import { LanguageService } from '../services/language/language.service';
import { UtilsService } from '../services/utils/utilis.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent {


  
  selecter: number = 0;
  selecterMobile: number = 0;
  filterP = 0;
  userId = ""; 
  currentUser : User = {
    uid: 'qgshydsergfgjuyjhhghh',
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
    fil_photo: "./../../assets/roumanie-visiter.jpg",

    fil_passportPhoto: "./../../assets/roumanie-visiter.jpg",
    fil_casierJudiciere: "./../../assets/roumanie-visiter.jpg",
    isvalidePreselect: false,
    isvalidSelect: false,
    isProcessSucceful: false,
    adminId: undefined,
    adminPrenoms: ''
  };
  
  list_users = [

    {
      uid: 'qgshydsergfgjuyjhhghhlk',
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
        "./../../assets/roumanie-visiter.jpg",
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
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuyjhhghhrds',
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
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuyjhhghfgdfh',
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
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuyjhhgtrrhh',
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
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuyjhdfkhghh',
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
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsereyyergfgjuyjhhghh',
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
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuydfsjhhghh',
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
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuygfdfsjhhghh',
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
      isvalidePreselect: true,
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuydfsjhhghhhh',
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
      isvalidePreselect: true,
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuydfsjjkjhhghh',
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
      isvalidePreselect: true,
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydserggggfgjuydfsjhhghh',
      nom: 'toto',
      prenom: 'jolo',
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
      isvalidePreselect: true,
        isvalidSelect: false,
    isProcessSucceful: false
     
    },
    {
      uid: 'qgshydsergfgjuydjhjkjkfsjhhghh',
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
      isvalidePreselect: true,
        isvalidSelect: false,
    isProcessSucceful: false
     
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
  liste_videosValid!: any [];
  liste_videosReject!: any [];
  liste_videosAgrees!: any[];

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

  TotalsDettes: number =1;
  TotalsRemboursements: number =1;
  theId: any;
  minVal = 0;
  maxVal = 1;
  minValR = 0;
  maxValR = 1;
  liste_metiers: any[] = [];





liste_Dette = [
  {
    id: 'edtzergsdfgkmryumlfgklm',
    montantDu: 2500000,
    dateDette: new Date(),
    libele: 'voyage abuja',
    nom: 'holo',
    prenoms: 'folo',
    createdAt: new Date(),
    user_id: 'ertgfrgferkjgjktktedrzesey',
    adminNom: 'foto',
},
{
  id: 'edtzergsdfgkhrftgmryumlfgklm',
  montantDu: 2500000,
  dateDette: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foto',
},
{
  id: 'edtzergsddfgrfdffgkmryumlfgklm',
  montantDu: 2500000,
  dateDette: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foto',
},
{
  id: 'edtzergsdfgkfghjfgyumlfgklm',
  montantDu: 2500000,
  dateDette: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foto',
},
{
  id: 'edtzergsdfgkuiouyumlfgklm',
  montantDu: 2500000,
  dateDette: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foto',
},
{
  id: 'edtzergsdfgkhftgmlfgklm',
  montantDu: 4000000,
  dateDette: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foto',
},
{
  id: 'edtzergsdikikkkkmryumlfgklm',
  montantDu: 2500000,
  dateDette: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foto',
},
{
  id: 'edtzergolpmlyuiyumryumlfgklm',
  montantDu: 2500000,
  dateDette: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foto',
},
{
  id: 'edtzergsdpoklklkmryumlfgklm',
  montantDu: 2500000,
  dateDette: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foto',
},
];
liste_Remboursement= [
  {
    id: 'edtzergsdfgkmryumlfgklm',
    montantRembourse: 2500000,
    dateRemboursement: new Date(),
    libele: 'voyage abuja',
    nom: 'holo',
    prenoms: 'folo',
    createdAt: new Date(),
    user_id: 'ertgfrgferkjgjktktedrzesey',
    adminNom: 'foto',
},
{
  id: 'edtzergsdfgkhrftgmryumlfgklm',
  montantRembourse: 2500000,
  dateRemboursement: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'fouo',
},
{
  id: 'edtzergsddfgrfdffgkmryumlfgklm',
  montantRembourse: 2500000,
  dateRemboursement: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foko',
},
{
  id: 'edtzergsdfgkfghjfgyumlfgklm',
  montantRembourse: 2500000,
  dateRemboursement: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foko',
},
{
  id: 'edtzergsdfgkuiouyumlfgklm',
  montantRembourse: 2500000,
  dateRemboursement: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foko',
},
{
  id: 'edtzergsdfgkhftgmlfgklm',
  montantRembourse: 4000000,
  dateRemboursement: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'foko',
},
{
  id: 'edtzergsdikikkkkmryumlfgklm',
  montantRembourse: 2500000,
  dateRemboursement: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'joko',
},
{
  id: 'edtzergolpmlyuiyumryumlfgklm',
  montantRembourse: 2500000,
  dateRemboursement: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'koko',
},
{
  id: 'edtzergsdpoklklkmryumlfgklm',
  montantRembourse: 2500000,
  dateRemboursement: new Date(),
  libele: 'voyage abuja',
  nom: 'holo',
  prenoms: 'folo',
  createdAt: new Date(),
  user_id: 'ertgfrgferkjgjktktedrzesey',
  adminNom: 'vopo',
},
];

  public pieChart!: GoogleChartInterface; 

liste_preselect : any[] = [];
liste_select: any[] = [];
liste_coaching: any[] = [];
liste_coursAnglaire: any[] = [];
listePartemaire: any[] = [];
liste_videosByUser: any[] = [];

filter =0;
displayedColumns: string[] = ['nom', 'prenom', 'Netude', 'metier', 'passport', 'parrain','actions'];  
displayedColumnsDette: string[] = ['nom', 'prenom', 'libele', 'montantDu', 'dateDette','admin','actions'];  
displayedColumnsRemboursement: string[] = ['nom', 'prenom', 'libele', 'montantRembourse', 'dateRemboursement','admin', 'actions'];  
displayedColumns1: string[] = ['nom', 'prenom', 'sMatrimoniale', 'qualiProfession', 'principalProfession', 'langueParler','actions'];  
  textSearch = 'text';
  isViewVideo = false;
  searchFiltre :boolean = false;
  searchFiltreMontDu :boolean = false;
  searchFiltreMontRem :boolean = false;
  searchFiltreDate :boolean = false;
  searchFiltreDateV :boolean = false;
  searchFiltreDateR :boolean = false;
  searchFiltreCategorie :boolean = false;
  selectedPartner : any = null;
  dateDebut!: Date;
  dateFin!: Date;
  dateDebutR!: Date;
  dateFinR!: Date;
  dateDebutVideo!: Date;
  dateFinVideo!: Date;
  isReject = false;
  theObservation = '';
  idOfItem = '';



  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private Aroute: ActivatedRoute,
    private financeServices: FinancesService,
    private videoService: VideosService,
    private userServ : UsersService,
    private cdr: ChangeDetectorRef,
    private coachService: coachingService,
    private anglaireService: anglaireService,
    private languageChange: LanguageService, 
       public utilsService: UtilsService,
  ) {
    this.liste_metiers = this.utilsService.getMetiers();

  }


  async ngOnInit() {
    this.languageChange.getLanguage()
    this.currentUser = this.localstorageService.getCurrentUser();  
    
  await  this.getusers();   
    console.log('list_users:', this.list_users);

    this.cdr.detectChanges(); // Force la détection des changements

    await this.getPartenaire();
    console.log('liste partenaire :', this.listePartemaire);
    
   
    console.log('selecter11', this.selecter);

    this.getVideos();
    this.getCoachings();
    this.getCoursAnglaire();
    this.getRemboursement();
    this.getDettes();
    this.getvideoAgree();
    this.getVideoValid();
    this.getVideoReject();

     // Simulez une mise à jour des données après un chargement
     setTimeout(() => {
      this.TotalsDettes = 200;
      this.TotalsRemboursements = 300;

      // Appelez la méthode pour rafraîchir le graphique
      this.updateChart();
    }, 2000);
    
 
  
   
}

updateChart() 
{

  this.pieChart =  {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Etat financière', 'Etat financière'],
      ['Dette',     this.TotalsDettes ],
      ['Rembourssement',    this.TotalsRemboursements],  
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

}
beginCValidSelectByPartenaire(val: any)
{
  this.theId = val
  this.getvideosByUser(val)
}

beginValid(val: any, noval: boolean) {
  console.log('le booleen',noval);
  if (noval === false) {

    console.log('ca a commencé');
  
    this.router.navigate(["viewUser", {index: val}]);
    
    
  } else {

    this.theId = val
    
  }

}

getFiltre() {
  this.isFiltre = !this.isFiltre;
}

getFiltreByValue(index: number) {
  this.filter = index;
  console.log('(val filtre', this.filter);
  this.searchFiltre = true;

  if (index === 5) {
    this.searchFiltreMontDu = true;
    this.searchFiltreDate = false;
    this.searchFiltre = false;
    this.searchFiltreDateV = false;
    this.searchFiltreCategorie = false;
    
  } else if(index === 6) {
    this.searchFiltreMontDu = false;
    this.searchFiltreDate = true;
    this.searchFiltre = false;
  } else if(index === 7) {
    this.searchFiltreMontDu = false;
    this.searchFiltreDate = false;
    this.searchFiltre = true;
    this.searchFiltreDateV = false;
    this.searchFiltreCategorie = false;
  }  else if(index === 8) {
    this.searchFiltreMontRem = true;
    this.searchFiltreDateR = false;
    this.searchFiltre = false;
    this.searchFiltreDateV = false;
    this.searchFiltreCategorie = false;
  }  else if(index === 9) {
    this.searchFiltreMontRem = false;
    this.searchFiltreDateR = true;
    this.searchFiltre = false;
    this.searchFiltreDateV = false;
    this.searchFiltreCategorie = false;
  } else if(index === 10) {
    this.searchFiltreMontRem = false;
    this.searchFiltreDateR = false;
    this.searchFiltre = true;
    this.searchFiltreDateV = false;
    this.searchFiltreCategorie = false;
  }
  else if(index === 11) {
    this.searchFiltreMontRem = false;
    this.searchFiltreDateR = false;
    this.searchFiltre = false;
    this.searchFiltreDateV = false;
    this.searchFiltreCategorie = true;
  }
  else if(index === 12) {
    this.searchFiltreMontRem = false;
    this.searchFiltreDateR = false;
    this.searchFiltre = false;
    this.searchFiltreCategorie = false;
    this.searchFiltreDateV = true;
  }


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

 close_valid() {
  this.theId ='rter';
 }

 viewGroupVideo() {
  this.isViewVideo = !this.isViewVideo;
 }

 selected(index: number) {
  if (index == 0) {

    this.selecter = 0 ;
    this.selecterMobile = 0 ;
    this.isOpenMenu = false;
    this.isEditPreselect = false;
    this.titleHeadMobile = "Préselection";
    
  } else if (index == 1) {

     this.selecter = 1;
     this.selecterMobile = 1;
     this.isOpenMenu = false;
     this.isEditSelect = false;
     this.titleHeadMobile = "Selection"

  } else if (index == 2) {

    this.selecter = 2 ;
    this.selecterMobile = 2 ;
    this.titleHeadMobile = "Dettes"
    this.isOpenMenu = false;   
    
  } else if(index == 3) {

    this.selecter = 3 ;
    this.selecterMobile = 3 ;
    this.titleHeadMobile = "Remboursements"
    this.isOpenMenu = false;
  }
  else if(index == 4) {

    this.selecter = 4 ;
    this.selecterMobile = 4 ;
    this.titleHeadMobile = "Videos de présentation"
    this.isOpenMenu = false;
  }

  else if(index == 5) {

    this.selecter = 5 ;
    this.selecterMobile = 5 ;
    this.titleHeadMobile = "Etat financières"
    this.isOpenMenu = false;
  }

  else if(index == 6) {

    this.selecter = 6 ;
    this.selecterMobile = 6 ;
    this.titleHeadMobile = "Cours de coaching"
    this.isOpenMenu = false;
  }

  else if(index == 7) {

    this.selecter = 7 ;
    this.selecterMobile = 7 ;
    this.titleHeadMobile = "Vidéos rejetées"
    this.isOpenMenu = false;
  }

  else if(index == 8) {

    this.selecter = 8 ;
    this.selecterMobile = 8 ;
    this.titleHeadMobile = "Vidéos validées"
    this.isOpenMenu = false;
  }

  else if(index == 9) {

    this.selecter = 9 ;
    this.selecterMobile = 9 ;
    this.titleHeadMobile = "Vidéos agrées"
    this.isOpenMenu = false;
  }

  else if(index == 10) {

    this.selecter = 10 ;
    this.selecterMobile = 10 ;
    this.titleHeadMobile = "Cours Anglaire"
    this.isOpenMenu = false;
    console.log('voir ce qui se passe:', this.selecter );
    
  }

  

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', filterValue);
  this.getusers;
  console.log('origine liste', this.liste_preselect);
  
  this.liste_preselect = this.liste_preselect.filter(fichier => 
    fichier.nom.toLowerCase().includes(filterValue) ||
    fichier.prenom.toLowerCase().includes(filterValue)
  );

  console.log('liste filtre', this.liste_preselect);
  
}


applyFilterByCat(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', this.liste_metiers);
  this.getusers;
  console.log('origine liste', this.liste_videos);
  
  this.liste_videos = this.liste_videos.filter(fichier => 
    fichier.secteur.toLowerCase().includes(filterValue)
  );

  console.log('liste filtre', this.liste_videos);
  
}
applyFilterByNumber(event: Event) {

  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
  this.getusers;
  if (this.filter === 1) {

    this.liste_preselect = this.liste_preselect.filter(fichier => 
      fichier.parrain.toLowerCase().includes(filterValue)
     
    );    
  } else if (this.filter === 2) {
    
    this.liste_preselect = this.liste_preselect.filter(fichier => 
      fichier.metier.toLowerCase().includes(filterValue)
     
    );   
    
  } else if (this.filter === 3) {
    
    this.liste_preselect = this.liste_preselect.filter(fichier => 
      fichier.NEtude.toLowerCase().includes(filterValue)
     
    );   
    
  } else if (this.filter === 4) {
    
    this.liste_select = this.liste_select.filter(fichier => 
    fichier.qualiProfession.toLowerCase().includes(filterValue) ||
    fichier.principalProfession.toLowerCase().includes(filterValue)
  );  
    
  } else if (this.filter === 7) {
    
    this.liste_Dette = this.liste_Dette.filter(fichier => 
    fichier.adminNom.toLowerCase().includes(filterValue)
  );  
    
  } else if (this.filter === 10) {
    
    this.liste_Remboursement = this.liste_Remboursement.filter(fichier => 
    fichier.adminNom.toLowerCase().includes(filterValue)
  );  
    
  }

}

applyFilterSelect(event: Event)
{
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', filterValue);
  this.getusers;
  console.log('origine liste', this.liste_select);
  
  
  this.liste_select = this.liste_select.filter(fichier => 
    fichier.nom.toLowerCase().includes(filterValue) ||
    fichier.prenom.toLowerCase().includes(filterValue)
  );

  console.log('liste filtre', this.liste_select);
  
}

applyFilteDette(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', filterValue);
  console.log('origine liste', this.liste_Dette); 
  
  this.liste_Dette = this.liste_Dette.filter(fichier => 
    fichier.nom.toLowerCase().includes(filterValue) ||
    fichier.prenoms.toLowerCase().includes(filterValue) ||
    fichier.libele.toLowerCase().includes(filterValue) 
  );

  console.log('liste filtre', this.liste_Dette);
}

applyFilteRembourse(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', filterValue);
  console.log('origine liste', this.liste_Dette); 
  
  this.liste_Remboursement = this.liste_Remboursement.filter(fichier => 
    fichier.nom.toLowerCase().includes(filterValue) ||
    fichier.prenoms.toLowerCase().includes(filterValue) ||
    fichier.libele.toLowerCase().includes(filterValue) 
  );

  console.log('liste filtre', this.liste_Remboursement);
}

getVideoByPart(index: number, name: string) {

  this.filterP = index;

  this.liste_videosAgrees = this.liste_videosAgrees.filter(fichier => 
    fichier.partenairePrenom.toLowerCase().includes(name)
  );

  if(name === 'tous') {
    this.filterP = index;

    this.videoService.getVideos().subscribe(
      (res) => {
        console.log('res', res);
  
        this.liste_videosAgrees  = res.data.filter(
          (res)=> res.isvalidVideo === true   && res.isvalideProcess === false 
         )
  
        console.log('liste de video valid par admin et visible par partenaire', this.liste_videosValid);
        
      }
    )
  }
}


getVideoByPartVideoValid(index: number, name: string) {

  this.filterP = index;

  this.liste_videosValid = this.liste_videosValid.filter(fichier => 
    fichier.partenairePrenom.toLowerCase().includes(name)
  );

  if(name === 'tous') {
    this.filterP = index;

    this.videoService.getVideos().subscribe(
      (res) => {
        console.log('res', res);
  
        this.liste_videosValid  = res.data.filter(
          (res)=> res.isvalidVideo === true   && res.isvalideProcess === false
        )
  
        console.log('liste de video valid par admin et visible par partenaire', this.liste_videosValid);
        
      }
    )
  }




}

getVideoByPartVideoReject(index: number, name: string) {

  this.filterP = index;

  this.liste_videosReject = this.liste_videosReject.filter(fichier => 
    fichier.partenairePrenom.toLowerCase().includes(name)
  );

  if(name === 'tous') {
    this.filterP = index;

    this.videoService.getVideos().subscribe(
      (res) => {
        console.log('res', res);
  
        this.liste_videosReject  = res.data.filter(
          (res)=> res.isvalidVideo === true   && res.isvalideProcess === false
        )
  
        console.log('liste de video valid par admin et visible par partenaire', this.liste_videosReject);
        
      }
    )
  }

}


logOut() {

  this.localstorageService.logout();
  this.router.navigate(["signin"]);

}

getPartenaire()
{

  const data = {
    pagination: {
      startAt: 0,
      limit: 20,
    },
    filters: {
      orderByQueries: ['createdAt'],
      whereQueries: [
        {
          fieldPath: 'nom',
          opStr: '==',
          value: 'admin',
        },
        {
          fieldPath: 'nom',
          opStr: '==',
          value: 'partenaire',
        },
       ],
    },
  };

  console.log('voir dans le partn');
  


  this.userServ.getUsers(data).subscribe
  (
    (res) => {        

      this.listePartemaire = res.data.filter(
        (res) =>  res.nom === 'partenaire'
      ) ;

      console.log('partenaire', this.listePartemaire);

       
    },
    (error) => {
      console.log('error :>> ', error);
    
    }
  )


}



getusers() {

    const data = {
      pagination: {
        startAt: 0,
        limit: 20,
      },
      filters: {
        orderByQueries: ['createdAt'],
        whereQueries: [
          {
            fieldPath: 'nom',
            opStr: '==',
            value: 'admin',
          },
          {
            fieldPath: 'nom',
            opStr: '==',
            value: 'partenaire',
          },
         ],
      },
    };

    this.userServ.getUsers(data).subscribe
    (
      (res) => {       

        this.list_users = res.data.filter(
          (res) => res.nom!== 'admin' && res.nom!== 'partenaire'
        ) ;

        console.log('users', this.list_users);

        this.liste_preselect = this.list_users.filter(

          (res) =>
            //  {
            res.isvalidePreselect=== false
             &&
            res.ldtep2 === true
          // }
      
        );
      
        this.liste_select =  this.list_users.filter(
      
          (res) => 
            // {
            res.isvalidePreselect=== true &&
            res.dHonneur === true &&
            res.isvalidSelect === false
            
          // }
      
        );
   
    console.log('preselect', this.liste_preselect);
    console.log('Select', this.liste_select);
         
      },
      (error) => {
        console.log('error :>> ', error);
      
      }
    )


}

getVideos() {

  this.videoService.getVideos().subscribe(
    (res) => {
   

      this.liste_videos = res.data.filter(
        (res)=> res.isvalidVideo === false   && res.isvalideProcess === false && res.observation ===""
      )
      console.log('liste de video no valid ajouter par user', this.liste_videos);
    }

    
  )

}

getvideoAgree() {

  this.videoService.getVideos().subscribe(
    (res) => {
      console.log('res', res);

      this.liste_videosAgrees  = res.data.filter(
        (res)=> res.isvalidVideo === true   && res.isvalideProcess === false
      )

      console.log('liste de video valid par admin et visible par partenaire', this.liste_videosValid);
      
    }
  )

}

getvideosByUser(uid: any)
{
  this.videoService.getVideoByUserId(uid).subscribe
  (
   (res) => {

     console.log('res', res);  

     this.liste_videosByUser = res.data;
     console.log("les videos", this.liste_videosByUser);

  
     
   },

   (err: any) => {
     console.log('err :>> ', err);
   }
  )

}

getVideoValid()
{
  this.videoService.getVideos().subscribe(
    (res) => {
      console.log('res', res);

      this.liste_videosValid = res.data.filter(
        (res)=> res.isvalidVideo === true   && res.isvalideProcess === true
      )

      console.log('liste de video valid par partenaire', this.liste_videosValid);
      
    }
  )

}
getVideoReject()
{
  this.videoService.getVideos().subscribe(
    (res) => {
      console.log('res', res);

      this.liste_videosReject = res.data.filter(
        (res)=> res.isvalidVideo === true   && res.observation !== ''
      )
      console.log('liste de video rehject', this.liste_videosReject);
    }
  )

}

getCoachings() {
  console.log('voir si');
  
  this.coachService.getCoaching().subscribe(
    (res) => {
      console.log('res', res);

      this.liste_coaching = res.data
      
    }
  )

}

getCoursAnglaire() {
  console.log('voir cours anglaire');

  this.anglaireService.getCoursAnglaire().subscribe(
    (res) => {
      console.log('res anglaire', res);

      this.liste_coursAnglaire = res.data;

      console.log('the table', this.liste_coursAnglaire);
      
      
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


getRemboursement() {
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

goToEditDette(id: any){

  this.router.navigate(["editdette", {index: id}]);

}
goToviewUser(id: any)
{
  console.log('ca a commencé');
  
  this.router.navigate(["viewUser", {index: id}]);
}
goTocreateDette() {
  this.router.navigate(["createdette"])
}

goTocreateCoaching() {
  this.router.navigate(["coursCoaching"])
}

goTocreateRemboursement() {
  this.router.navigate(["createRemboursement"])
}

goToEditRemboursement(id: any) {
  this.router.navigate(["editremboursement", {index: id}])

}

goTocreateCoursAnglaire() 
{
  this.router.navigate(["coursAnglaire"])
}

validPreselect(ind: string){
  let vak = true;
  this.userServ.validPreselect( vak, ind).then(
    () => {
      console.log(' validation reussi pour preselect');

      this.theId = '';
    }
  )
  .catch(
    (er) => {

      console.log('erreur', er);
      

    }
  )
}

validSelct(index: any, ind: any) {
  console.log('value', ind); 
  
  let vak = true;
  this.userServ.validSelect(vak, index, ind.uid, ind.prenom)
  .then(
    (res) => {
      console.log('validation reussi pour select');
      
    }
  )

  .catch(
    (er) => {

      console.log('erreur', er);
      

    }
  )
}

validVideoBySelect(index: string, idUser: string, data: any) {
  

}

validVideo(index: string, idUser: string, data: any ) {

  let vak = true;
  this.videoService.validVideo(vak, index, idUser, data.uid , data.prenom )
  .then(
    (res) => {
      console.log('validation reussi pour video');
      
    }
  )

  .catch(
    (er) => {

      console.log('erreur', er);
      

    }
  )
  
}


 getUserNameById(index: string) {

   return this.userServ.getUser(index).pipe(
    map(
      (data) => {

        return data.nom

      }
    )

   
  )
}

 getUserLastNameById(index: string) {

 return this.userServ.getUser(index).pipe(
    map(
      (data) => {

        return data.prenom

      }
    )

   
  )

}

delectVideo(item: any) {

  const le_url = item.fileVideo
  const index = item.id
   
  const options: {
    folder?: string; // Littéral de chaîne
    url: string; // Utilisez string comme type explicite
  } = {
    folder: 'filsVideoPresentation',
    url: le_url, // Assignation de la valeur
  };
  

  this.videoService.deleteVideo(options, index).then(
    () => {
      console.log('reussi');
      
    }
  )

 }

delectVideoCoaching(item: any) {

  const le_url = item.fileVideo
  const index = item.id
   
  const options: {
    folder?: string; // Littéral de chaîne
    url: string; // Utilisez string comme type explicite
  } = {
    folder: 'filsVideoCoaching',
    url: le_url, // Assignation de la valeur
  };
  

  this.coachService.deleteVideo(options, index).then(
    () => {
      console.log('reussi');
      
    }
  )

 }


 delectVideoCoursAnglaire(item: any) {

  const le_url = item.fileVideo
  const index = item.id
   
  const options: {
    folder?: string; // Littéral de chaîne
    url: string; // Utilisez string comme type explicite
  } = {
    folder: 'filsVideoAnglaire',
    url: le_url, // Assignation de la valeur
  };
  

  this.anglaireService.deleteVideo(options, index).then(
    () => {
      console.log('reussi');
      
    }
  )

 }

 applyFilterMontant() 
 {
   
   // Filtrage des montants
   this.liste_Dette = this.liste_Dette.filter((el) => {
     const montantDu = el.montantDu;
     
     // Cas 1: seulement montant minimal défini
     if (this.minVal && !this.maxVal) {
       return montantDu >= this.minVal;
     }
     // Cas 2: seulement montant maximal défini
     else if (!this.minVal && this.maxVal) {
       return montantDu <= this.maxVal;
     }
     // Cas 3: les deux montants sont définis
     else if (this.minVal && this.maxVal) {
       return montantDu >= this.minVal && montantDu <= this.maxVal;
     }
     // Cas 4: aucun montant définie - retourne tout
     else {
       return true;
     }
   });
 
   console.log('Filtre appliqué:', this.liste_Dette.length + ' dettes trouvées');
   
  }
  
 
 applyFilterMontantR() 
 {
     
    // Filtrage des montants
    this.liste_Remboursement = this.liste_Remboursement.filter((el) => {
      const montantR = el.montantRembourse;
      
      // Cas 1: seulement montant minimal défini
      if (this.minVal && !this.maxVal) {
        return montantR >= this.minVal;
      }
      // Cas 2: seulement montant maximal défini
      else if (!this.minVal && this.maxVal) {
        return montantR <= this.maxVal;
      }
      // Cas 3: les deux montants sont définis
      else if (this.minVal && this.maxVal) {
        return montantR >= this.minVal && montantR <= this.maxVal;
      }
      // Cas 4: aucun montant définie - retourne tout
      else {
        return true;
      }
    });
  
    console.log('Filtre appliqué:', this.liste_Remboursement.length + ' dettes trouvées');
    
 
  
 }


 applyFilterDateR() {

   this.getRemboursement();

   console.log("dates avant conversion:", this.dateDebutR, this.dateFin);

   // Conversion des dates si elles existent
   const dateDebut = this.dateDebutR ? new Date(this.dateDebutR) : null;
   const dateFin = this.dateFinR ? new Date(this.dateFinR) : null;
 
   console.log("dates après conversion:", dateDebut, dateFin);
 
   // Filtrage des vidéos
   this.liste_Remboursement = this.liste_Remboursement.filter((el) => {
     const detteDate = el.dateRemboursement;
     
     // Cas 1: seulement date de début définie
     if (dateDebut && !dateFin) {
       return detteDate >= dateDebut;
     }
     // Cas 2: seulement date de fin définie
     else if (!dateDebut && dateFin) {
       return detteDate <= dateFin;
     }
     // Cas 3: les deux dates sont définies
     else if (dateDebut && dateFin) {
       return detteDate >= dateDebut && detteDate <= dateFin;
     }
     // Cas 4: aucune date définie - retourne tout
     else {
       return true;
     }
   });
 
   console.log('Filtre appliqué:', this.liste_Remboursement.length + ' Remboursements trouvées');
  
 }

 applyFilterDate() {  
  this.getDettes();

   console.log("dates avant conversion:", this.dateDebut, this.dateFin);

   // Conversion des dates si elles existent
   const dateDebut = this.dateDebut ? new Date(this.dateDebut) : null;
   const dateFin = this.dateFin ? new Date(this.dateFin) : null;
 
   console.log("dates après conversion:", dateDebut, dateFin);
 
   // Filtrage des vidéos
   this.liste_Dette = this.liste_Dette.filter((el) => {
     const detteDate = el.dateDette;
     
     // Cas 1: seulement date de début définie
     if (dateDebut && !dateFin) {
       return detteDate >= dateDebut;
     }
     // Cas 2: seulement date de fin définie
     else if (!dateDebut && dateFin) {
       return detteDate <= dateFin;
     }
     // Cas 3: les deux dates sont définies
     else if (dateDebut && dateFin) {
       return detteDate >= dateDebut && detteDate <= dateFin;
     }
     // Cas 4: aucune date définie - retourne tout
     else {
       return true;
     }
   });
 
   console.log('Filtre appliqué:', this.liste_Dette.length + ' Dettes trouvées');
  
 }

 applyFilterDateV() {
  this.getVideos();
  console.log("dates avant conversion:", this.dateDebutVideo, this.dateFinVideo);

  // Conversion des dates si elles existent
  const dateDebut = this.dateDebutVideo ? new Date(this.dateDebutVideo) : null;
  const dateFin = this.dateFinVideo ? new Date(this.dateFinVideo) : null;

  console.log("dates après conversion:", dateDebut, dateFin);

  // Filtrage des vidéos
  this.liste_videos = this.liste_videos.filter((el) => {
    const videoDate = el.createdAt.toDate();
    
    // Cas 1: seulement date de début définie
    if (dateDebut && !dateFin) {
      return videoDate >= dateDebut;
    }
    // Cas 2: seulement date de fin définie
    else if (!dateDebut && dateFin) {
      return videoDate <= dateFin;
    }
    // Cas 3: les deux dates sont définies
    else if (dateDebut && dateFin) {
      return videoDate >= dateDebut && videoDate <= dateFin;
    }
    // Cas 4: aucune date définie - retourne tout
    else {
      return true;
    }
  });

  console.log('Filtre appliqué:', this.liste_videos.length + ' vidéos trouvées');
}

beginReject(index: string) {
  this.idOfItem = index;
  this.theId = "";
}

setReject(val: string, index: string) {

  this.videoService.rejectObservation(val, index).then(
    () => {
      console.log('reussi');
      this.selecter =0;
      this.selecterMobile = 0;
      this.isReject = false;   
      this.idOfItem ='';
      this.getVideos();
    }
  )
  .catch(
    (er) => {
      console.log("reject", er);
      
    }
  )

}

close_validReject()
{
  this.idOfItem =""
}






}
