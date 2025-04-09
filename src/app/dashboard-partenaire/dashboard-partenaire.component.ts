import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { FinancesService } from '../services/Finances/finances.service';
import { VideosService } from '../services/videos/videos.service';
import { User } from 'src/models/variables';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { UsersService } from '../services/firebase/user.service';
import { LanguageService } from '../services/language/language.service';
import { UtilsService } from '../services/utils/utilis.service';

@Component({
  selector: 'app-dashboard-partenaire',
  templateUrl: './dashboard-partenaire.component.html',
  styleUrls: ['./dashboard-partenaire.component.scss']
})
export class DashboardPartenaireComponent {
 
  selecter: number = 0;
  selecterMobile: number = 0;
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


  isOpenMenu = false;
  titleHeadMobile: string = '';

  //modifier preselect vatiable
  isUploading = false;
  pre = "";
  edite = "";
  switch = false;

  theId: any 
  isFiltre = false;
  isReject = false;
  theObservation = '';
  idOfItem = '';
  filter =0;
  searchFiltre :boolean = false;
  searchFiltreDate :boolean = false;
  searchFiltreCategorie :boolean = false;

  liste_videos: any[] = [];
  liste_videosValid: any[] = [];
  liste_videosReject: any[] = [];
  liste_Restants: any[] = [];
  liste_videosByUser: any[] = [];
  liste_metiers: any[] = [];

  displayedColumns: string[] = ['nom', 'prenom', 'Netude','principalProfession', 'qualiProfession', 'sMatrimoniale', 'langueParler','actions'];  
  dateDebut!: Date;
  dateFin!: Date;
  dateDebutV!: Date;
  dateFinV!: Date;
  dateDebutR!: Date;
  dateFinR!: Date;



  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private videoService: VideosService,
    private userServ : UsersService,
    private cdr: ChangeDetectorRef,
    private languageChange: LanguageService, 
       public utilsService: UtilsService,
  ) {
    this.liste_metiers = this.utilsService.getMetiers();
  }


  ngOnInit() {
    this.languageChange.getLanguage()

   let user = this.localstorageService.getCurrentUser();   
    this.currentUser  = user;
    this.getVideos();
    this.getusers();
    this.getViodeosValid();
    this.getVideoReject()


   
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
    
    this.titleHeadMobile = "Préselection";

    console.log('tittle0', this.titleHeadMobile);
 
  } else if (index == 1) {

     this.selecter = 1;
     this.selecterMobile = 1;
     this.isOpenMenu = false;
   
     this.titleHeadMobile = "Vidéos non validées"

     console.log('tittle1', this.titleHeadMobile);
    
  } 
  else if (index == 2) {

    this.selecter = 2;
    this.selecterMobile = 2;
    this.isOpenMenu = false;
  
    this.titleHeadMobile = "Vidéos validées"

    console.log('tittle1', this.titleHeadMobile);
   
 }

 else if (index == 3) {

  this.selecter = 3;
  this.selecterMobile = 3;
  this.isOpenMenu = false;

  this.titleHeadMobile = "Vidéos rejetées"

  console.log('tittle1', this.titleHeadMobile);
 
}

}

beginReject(index: string) {
  this.isReject = true;
  this.idOfItem = index;
  this.theId = "";
}
close_valid()
{
  this.isReject = false;
}

close_validBySelect() {
  this.theId ='rter';
 }


logOut() {

  this.localstorageService.logout()
  this.router.navigate(["signin"]);

}

validProcess(index: string) {
  let vak = true;
  this.userServ.validProcess( vak, index).then(
    () => {
      console.log(' validation reussi pour preselect');
    }
  )
  .catch(
    (er) => {

      console.log('erreur', er);
      

    }
  )
} 

valiProcessusBydVideo(index: string, iduser: string)
{
  let vak = true;
  this.videoService.validProcessByPartenaireInVideo(vak,index, iduser).then(
    () => {
      console.log("reussi");

      this.updateRestantVideos()
      
    }
  ) 
  .catch(
    (er) => 
    {
      console.log("erreur", er.message);
      
    }
  )

}
setReject(val: string, index: string) {

  this.videoService.rejectObservation(val, index).then(
    () => {
      console.log('reussi');
      this.selecter =0;
      this.selecterMobile = 0;
      this.isReject = false; 
      this.theId = "";    
    }
  )
  .catch(
    (er) => {
      console.log("reject", er);
      
    }
  )

}

getFiltre() {
  this.isFiltre = !this.isFiltre;
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', filterValue);
  console.log('origine liste', this.list_users);
  
  
  this.list_users = this.list_users.filter(fichier => 
    fichier.nom.toLowerCase().includes(filterValue) ||
    fichier.prenom.toLowerCase().includes(filterValue)
  );

  console.log('liste filtre', this.list_users);
  
}

goToviewUser(id: any)
{
  this.router.navigate(["viewUser", {index: id}]);
}

ValidByVideo(index: string) {

  this.list_users.forEach(
    (res) => {

      if (res.uid === index) {

        this.validProcess(index)
        
      }


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

  this.userServ.getUsers(data).subscribe(
    (res) => {

      this.list_users = res.data;
      console.log("avant filtre", this.list_users);


    this.list_users = this.list_users.filter(fichier => 
        fichier?.isvalidSelect === true && fichier?.isProcessSucceful === false
      )
     
      console.log('users apres filtre', this.list_users);    
       
    },
    (error) => {
      console.log('error :>> ', error);
    
    }
  )

}


updateRestantVideos() {

  this.liste_videos =  this.liste_videos.filter(video =>
    !this.liste_videosValid.some(validVideo => validVideo.user_id === video.user_id)
    
  );
  console.log('le reste', this.liste_videos);
  
}

beginValid(val: any)
{
  this.theId = val
  this.getvideosByUser(val)
}

getvideosByUser(uid: any)
{
  this.videoService.getVideoByUserId(uid).subscribe
  (
   (res) => {

     console.log('res', res);  

     this.liste_videosByUser = res.data;
     this.liste_videosByUser = this.liste_videosByUser.filter(
       (el) => el.partenaireId === this.currentUser.uid
     )
     console.log("les videos", this.liste_videosByUser);

  
     
   },

   (err: any) => {
     console.log('err :>> ', err);
   }
  )

}

getVideos() {

  this.videoService.getVideosByPartId(this.currentUser.uid).subscribe(
  // this.videoService.getVideos().subscribe(
    (res) => {
      console.log('res les videos avant filtre', res);

      this.liste_videos = res.data.filter(
        (res)=> res.isvalidVideo === true   && res.isvalideProcess === false
      )

      console.log('liste_video autre', this.liste_videos);
      
       this.updateRestantVideos()

    }
  )

}

getViodeosValid() 
{
  this.videoService.getVideosByPartId(this.currentUser.uid).subscribe(
    (res) => {
      console.log('res', res);

      this.liste_videosValid = res.data.filter(
        (res)=> res.isvalidVideo === true   && res.isvalideProcess === true
      )

      console.log('liste validé', this.liste_videosValid);
  
      
    }
  )



   this.updateRestantVideos();

}

getVideoReject()
{
  this.videoService.getVideosByPartId(this.currentUser.uid).subscribe(
    (res) => {
      console.log('res', res);

      this.liste_videosReject = res.data.filter(
        (res)=> res.isvalidVideo === true   && res.observation !== ''
      )
      
    }
  )

  this.updateRestantVideos();

}

getFiltreByValue(index: number) {
  this.filter = index;
  console.log('(val filtre', this.filter);
  this.searchFiltre = true;


   if(index === 11) {
   
    this.searchFiltre = false;
    this.searchFiltreDate = false;
    this.searchFiltreCategorie = true;
  }
  else if(index === 12) {
    this.searchFiltre = false;
    this.searchFiltreCategorie = false;
    this.searchFiltreDate = true;
  }

}


applyFilterByNumber(event: Event) {

  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
  this.getusers;
  if (this.filter === 1) {

    this.list_users = this.list_users.filter(fichier => 
      fichier.parrain.toLowerCase().includes(filterValue)
     
    );    
  } else if (this.filter === 2) {
    
    this.list_users = this.list_users.filter(fichier => 
      fichier.metier.toLowerCase().includes(filterValue)
     
    );   
    
  } else if (this.filter === 3) {
    
    this.list_users = this.list_users.filter(fichier => 
      fichier.NEtude.toLowerCase().includes(filterValue)
     
    );   
    
  } 

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
applyFilterByCatV(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', this.liste_metiers);
  this.getusers;
  console.log('origine liste', this.liste_videosValid);
  
  this.liste_videosValid = this.liste_videosValid.filter(fichier => 
    fichier.secteur.toLowerCase().includes(filterValue)
  );

  console.log('liste filtre', this.liste_videosValid);
  
}
applyFilterByCatR(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', this.liste_metiers);
  this.getusers;
  console.log('origine liste', this.liste_videosReject);
  
  this.liste_videosReject = this.liste_videosReject.filter(fichier => 
    fichier.secteur.toLowerCase().includes(filterValue)
  );

  console.log('liste filtre', this.liste_videosReject);
  
}

applyFilterDate() {
  this.getVideos();
  console.log("dates avant conversion:", this.dateDebut, this.dateFin);

  // Conversion des dates si elles existent
  const dateDebut = this.dateDebut ? new Date(this.dateDebut) : null;
  const dateFin = this.dateFin ? new Date(this.dateFin) : null;

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
applyFilterDateV() {
  this.getViodeosValid();
  console.log("dates avant conversion:", this.dateDebutV, this.dateFinV);

  // Conversion des dates si elles existent
  const dateDebut = this.dateDebutV ? new Date(this.dateDebutV) : null;
  const dateFin = this.dateFinV ? new Date(this.dateFinV) : null;

  console.log("dates après conversion:", dateDebut, dateFin);

  // Filtrage des vidéos
  this.liste_videosValid = this.liste_videosValid.filter((el) => {
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
applyFilterDateR() {
  this.getVideoReject();
  console.log("dates avant conversion:", this.dateDebutR, this.dateFinR);

  // Conversion des dates si elles existent
  const dateDebut = this.dateDebutR ? new Date(this.dateDebutR) : null;
  const dateFin = this.dateFinR ? new Date(this.dateFinR) : null;

  console.log("dates après conversion:", dateDebut, dateFin);

  // Filtrage des vidéos
  this.liste_videosReject = this.liste_videosReject.filter((el) => {
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

  console.log('Filtre appliqué:', this.liste_videosReject.length + ' vidéos trouvées');
}
applyFilterV(event: Event)
{
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  this.liste_videos = this.liste_videos.filter(video => 
    video.nom.toLowerCase().includes(filterValue)  ||
    video.prenoms.toLowerCase().includes(filterValue)  
   
  );  
}
applyFilterVV(event: Event)
{
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  this.liste_videosValid = this.liste_videosValid.filter(video => 
    video.nom.toLowerCase().includes(filterValue)  ||
    video.prenoms.toLowerCase().includes(filterValue)  
   
  );  
}

applyFilterVR(event: Event)
{
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  this.liste_videosReject = this.liste_videosReject.filter(video => 
    video.nom.toLowerCase().includes(filterValue)  ||
    video.prenoms.toLowerCase().includes(filterValue)  
   
  );  
}






}
