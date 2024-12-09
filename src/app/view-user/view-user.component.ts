import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/variables';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { VideosService } from '../services/videos/videos.service';
import { UsersService } from '../services/firebase/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent {

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
      isvalidSelect: false,
    isProcessSucceful: false
   
  };

  theUser:any ;
  liste_videos: any[] = [];
  list_users: any[] = [];
  userId = '';
  viewHonneur = 'non';
  viewDisponibilite = 'non';
  viewPasseportDisponible = 'non';

  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private Aroute: ActivatedRoute,
    private videoService: VideosService,
    private userServ : UsersService,
  ) {}


  ngOnInit() {
    this.getUsers();
    let user = this.localstorageService.getCurrentUser();

    this.theUser = user;
   
    this.Aroute.params.subscribe(params => {
      const indexParams = params['index'];

      if (indexParams !== undefined) {
     this.userId = params['index']; 
        console.log('selector:', this.userId);
        this.list_users.forEach(
          (user) => {
            if(user.uid  === this.userId) {
              this.currentUser = user;
            }
          }
        )
     } 

       setTimeout(() => {
        
        
       }, 100);   

})
    this.getVideoByUser();

    if (this.currentUser.ldtep2) {

      this.viewDisponibilite = 'oui';
      
    } else {
  
      this.viewDisponibilite = 'non';

    }

    if (this.currentUser.passport) {

      this.viewPasseportDisponible = 'oui'
      
    } else 
    {
      this.viewPasseportDisponible = 'non'
    }

    if (this.currentUser.dHonneur ) {
      
      this.viewHonneur = 'oui'
      
    } else {
      this.viewHonneur = 'non'

    }

  }

  getVideoByUser() {
     
   this.videoService.getVideoByUserId(this.userId).subscribe
   (
    (res) => {

      console.log('res', res);
      

      this.liste_videos = res.data;
      console.log("les videos", this.liste_videos);
      
    },

    (err: any) => {
      console.log('err :>> ', err);
    }
   )
  }

  getUsers() 
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

    this.userServ.getUsers(data).subscribe(
      (res) => {

        this.list_users = res.data;
         
      },
      (error) => {
        console.log('error :>> ', error);
      
      }
    )


  }

  goBack() {

    if (this.theUser.nom ==='admin') {
      this.router.navigate(["dashboardAdmin"]);
      
    } else if (this.theUser.nom === 'partenaire') {
      this.router.navigate(["dashboardPartenaire"]);
    }



  }

  validPreselect(ind: string) {
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

  validSelect(ind: string) {
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

  validProcessus(index: string)
  {
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

}