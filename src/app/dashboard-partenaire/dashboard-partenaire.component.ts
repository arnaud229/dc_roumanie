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

  liste_videos: any[] = [];
  liste_videosValid: any[] = [];
  liste_videosReject: any[] = [];

  displayedColumns: string[] = ['nom', 'prenom', 'Netude','principalProfession', 'qualiProfession', 'sMatrimoniale', 'langueParler','actions'];  


  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private videoService: VideosService,
    private userServ : UsersService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit() {

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
}
close_valid()
{
  this.isReject = false;
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

getVideos() {

  this.videoService.getVideos().subscribe(
    (res) => {
      console.log('res', res);

      this.liste_videos = res.data.filter(
        (res)=> res.isvalidVideo === true   && res.isvalideProcess === false
      )
      
    }
  )

}

getViodeosValid() 
{
  this.videoService.getVideos().subscribe(
    (res) => {
      console.log('res', res);

      this.liste_videosValid = res.data.filter(
        (res)=> res.isvalidVideo === true   && res.isvalideProcess === true
      )
      
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
      
    }
  )

}



}
