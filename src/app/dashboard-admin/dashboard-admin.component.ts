import { ChangeDetectorRef, Component } from '@angular/core';
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
  theId: any 




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
},
];

public pieChart: GoogleChartInterface = {
  chartType: GoogleChartType.PieChart,
  dataTable: [
    ['Etat financière', 'Etat financière'],
    ['Dette',     this.TotalsDettes ],
    ['Rembourssement',    this.TotalsRemboursements],
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

liste_preselect : any[] = [];
liste_select: any[] = [];

filter =0;
displayedColumns: string[] = ['nom', 'prenom', 'Netude', 'metier', 'passport', 'parrain','actions'];  
displayedColumnsDette: string[] = ['nom', 'prenom', 'libele', 'montantDu', 'dateDette','actions'];  
displayedColumnsRemboursement: string[] = ['nom', 'prenom', 'libele', 'montantRembourse', 'dateRemboursement', 'actions'];  
displayedColumns1: string[] = ['nom', 'prenom', 'sMatrimoniale', 'qualiProfession', 'principalProfession', 'langueParler','actions'];  
  typeInput = 'text'

  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private Aroute: ActivatedRoute,
    private financeServices: FinancesService,
    private videoService: VideosService,
    private userServ : UsersService,
    private cdr: ChangeDetectorRef
  ) {}

//  async ngDoCheck() {
//   await  this.getusers();

  
   
//   console.log('list_users:', this.list_users);

//   this.cdr.detectChanges(); // Force la détection des changements



//   console.log('preselect', this.liste_preselect);
//   console.log('Select', this.liste_select);


 
//   console.log('selecter11', this.selecter);

//   this.getVideos();
//   this.gitRemboursement();
//   this.getDettes();
//   }


  async ngOnInit() {
    this.currentUser = this.localstorageService.getCurrentUser();
    // this.userId = this.currentUser.uid
    
  await  this.getusers();   
    console.log('list_users:', this.list_users);

    this.cdr.detectChanges(); // Force la détection des changements
   
    console.log('selecter11', this.selecter);

    this.getVideos();
    this.gitRemboursement();
    this.getDettes();
    
 
  
   
}

beginValid(val: any) {
  this.theId = val
}

getFiltre() {
  this.isFiltre = !this.isFiltre;
}

getFiltreByValue(inde: number) {
  this.filter = inde;
  console.log('(val filtre', this.filter);

  if (this.filter == 2) {
    this.typeInput = 'date'

    console.log("input type", this.typeInput);
    
    
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


  

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', filterValue);
  console.log('origine liste', this.liste_preselect);
  
  
  this.liste_preselect = this.liste_preselect.filter(fichier => 
    fichier.nom.toLowerCase().includes(filterValue) ||
    fichier.prenom.toLowerCase().includes(filterValue)
  );

  console.log('liste filtre', this.liste_preselect);

  // if (this.filter == 2) {

  //      this.liste_preselect = this.liste_preselect.filter(fichier => 
  //     fichier.date.includes(filterValue)

  //   );
    
  // }
  
}

applyFilterSelect(event: Event)
{
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', filterValue);
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

  console.log('liste filtre', this.liste_select);
}

applyFilteRembourse(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

  console.log('filtervalue', filterValue);
  console.log('origine liste', this.liste_Dette); 
  
  this.liste_Dette = this.liste_Dette.filter(fichier => 
    fichier.nom.toLowerCase().includes(filterValue) ||
    fichier.prenoms.toLowerCase().includes(filterValue) ||
    fichier.libele.toLowerCase().includes(filterValue) 
  );

  console.log('liste filtre', this.liste_select);
}

logOut() {

  this.localstorageService.logout();
  this.router.navigate(["signin"]);

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
          (res) => res.name!== 'admin' && res.name!== 'partenaire'
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

goTocreateRemboursement() {
  this.router.navigate(["createRemboursement"])
}

goToEditRemboursement(id: any) {

  
  this.router.navigate(["editremboursement", {index: id}])


}

delectVideo(tu: any) {

}

validPreselect(ind: string){
  let vak = true;
  this.userServ.validPreselect( vak, ind).then(
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

validSelct(ind: string) {
  let vak = true;
  this.userServ.validSelect(vak, ind)
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

validVideo(index: string) {

  let vak = true;
  this.videoService.validVideo(vak, index)
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




}
