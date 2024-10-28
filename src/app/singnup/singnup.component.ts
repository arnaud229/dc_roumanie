import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { User } from 'src/models/variables';

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.scss']
})
export class SingnupComponent {

  loading = false;
  userform!: FormGroup;
  log_erreur = false;
  erreur_message = '';
  accepter_rappelle = false;
  confirm_mdp="";
  voir = false;
  voir1 = true;
    le_type = "password";
  le_type1 = "text" ;
  condition_accept = false;
 

  // verification_otp = true;


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    // private utilsService: UtilsService,
    // private alertController: AbortController,
  ) {

  }

  ngOnInit() {
    this.init_form();
  }

    
  init_form(){
    this.userform = this.formbuilder.group({
      nom: ['',Validators.required],
      prenom: ['',Validators.required],
      code: ['',Validators.required],
       numero: ['',[Validators.required,Validators.pattern(/[0-9]+/)]],
      mail: ['', [Validators.required, Validators.pattern(/.{4,}@/)]],
      mdp: [
        '',
        [
          Validators.required,
          Validators.pattern(/[A-Z]+/),
          Validators.pattern(/[0-9]+/),
          Validators.pattern(/[@|$|µ]+/),
          Validators.minLength(8),
        ],
      ],
    });
  } 

 async sign_up() {

  console.log(this.userform.value);

  const user : User =  {
    nom: this.userform.value.nom,
    prenom: this.userform.value.prenom,
    telephone: {
      code: this.userform.value.code,
      numero: this.userform.value.numero
    },
    mail: this.userform.value.mail,
    mdp: this.userform.value.mdp,
    age: 0,
    sMatrimoniale: '',
    NEtude: '',
    metier: '',
    aDiplome: 0,
    dApprentissage: 0,
    aExperience: 0,
    ePrecedent: '',
    passport: false,
    nationalite: '',
    cWhatapp:{
      code: "",
      numero: ""
    },
    parrain: '',
    religion: '',
    ldtep2: false,
    fils_recus: [],
    admin: false,
    partenaire: false,
    LieuNaissance: '',
    dateNaissance: new Date(),
    paysNaissance: '',
    Pere: {
      nom: '',
      prenoms: ''
    },
    Mere: {
      nom: '',
      prenoms: ''
    },
    nPasseport: '',
    lieuPasseport: '',
    dateEmiPasseport: new Date(),
    dateExpPasseport: new Date(),
    derniereResidence: '',
    derniereResidencePays: '',
    derniereResidenceVillage: '',
    qualiProfession: '',
    principalProfession: '',
    langueParler: '',
    expProfesionnel: [],
    nbrEnfants: 0,
    dHonneur: false,
    fils_diplome: [],
    fil_photo: {
      type: '',
      url: ''
    },
    fil_passportPhoto: {
      type: '',
      url: ''
    },
    fil_casierJudiciere: {
      type: '',
      url: ''
    },
    isvalidePreselect: false,
    isvalidSelect: false
  }
  // console.log("le mot de passe :", this.userform.value.mdp);
  // console.log("confirme mot de passe :", this.confirm_mdp);

  this.loading = true;

  this.authService.createFirebaseUser(user).then(

    (res) => { 
      console.log(res);

      this.loading = false;

    }
  ).catch(
    (error) => {
      var errorCode = error.code;
      var errorMessage = error.message
      this.erreur_message = errorMessage;

      if (errorCode = "auth/network-request-failed") {

        this.erreur_message = ' Verifiez votre connexion internet'
        
      } else if(errorCode = "auth/email-already-in-use") {
        this.erreur_message = ' Un compte existe déjà avec ce email.'
        
      }
    }
  )

  }

  affiche_mpd1() {
    this.voir1 = ! this.voir1;
    if(this.voir1) {
      this.le_type1 = "text";
      console.log(this.le_type1);
  } else
  {
    this.le_type1 = "password";
    console.log(this.le_type1);

  }
  }


  affiche_mpd() {
    this.voir = ! this.voir;
    if(!this.voir) {
      this.le_type =  "password";
        console.log(this.le_type);

    } else
    {
      this.le_type = "text";
      console.log(this.le_type);
    }
  }

  is_valid(){
    return this.userform.valid && this.userform.controls['mdp'].value == this.confirm_mdp;
  }

  accept_condition() {

    this.condition_accept = !this.condition_accept;
    console.log(this.condition_accept);
  }

  goToPolitique() {
    // const queryParams = {
    //   // storeId: store.id,
    // };
    // this.navigationService.setRouterParams(queryParams);
    this.router.navigateByUrl('/confidentialites/politique');
  }

  goToTerme() {
    this.router.navigateByUrl('/confidentialites/terme');
  }

}
