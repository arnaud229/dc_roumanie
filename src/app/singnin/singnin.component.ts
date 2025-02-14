import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { LanguageService } from '../services/language/language.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-singnin',
  templateUrl: './singnin.component.html',
  styleUrls: ['./singnin.component.scss']
})
export class SingninComponent {

  loading = false;
  userform!: FormGroup;
  log_erreur = false;
  erreur_message = '';
  accepter_rappelle = false;
  binding = "";
  iserrorlog = false;

  listeLangueChange = [
    {
      langue: "en",
      picture: "./../../assets/flag-USA.jpg"
    },
    {
      langue: "fr",
      picture: "./../../assets/flag-france.jpg"
    },
    {
      langue: "ro",
      picture: "./../../assets/flag-romania.jpg"
    },

  ];

  private destroy$ = new Subject<void>();

  selectedLanguage : any =  {
    langue: "fr",
    picture: "./../../assets/flag-france.jpg"
  };

  ViewLangue = false ;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private languageChange: LanguageService, 
    public authService: AuthService,
    public localstorageService: LocalstorageService,
   
  ) {

    this.init_form();
  }

  ngOnInit() {
    this.init_form();

    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang) {
      const lang = this.listeLangueChange.find(l => l.langue === savedLang);
      this.selectedLanguage = lang || this.listeLangueChange[0];
  }

}



  getViewLanbgue() 
  {

    this.ViewLangue = !this.ViewLangue;
  }
 


  init_form(){
    this.userform = this.formbuilder.group({
      //  telephone: ['',[Validators.required,Validators.pattern(/[0-9]+/)]],
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

  async change_password() {

    this.loading = true;
    this.iserrorlog = false;

    console.log("toto");
    console.log("userform", this.userform.value);
    
    if (this.userform.controls['mail'].value !== '') {
      
      this.authService.resetPassword(this.userform.controls['mail'].value).then(
        (res)=> {
          this.loading = true;
          this.iserrorlog = true;

          this.erreur_message = 'Un mail a été envoyer dans votre adresse mail. Vérifiez votre mail';

        }
      ) 
      .catch(
        (er) => {
          this.loading = true;
          this.iserrorlog = true;

          this.erreur_message = 'Vérifiez votre connexion';

        }
      )

    } else {
      this.loading = true;
      this.iserrorlog = true;


      this.erreur_message =
        'Veuillez entrer votre email ';

       

        console.log("a corriger");


      this.log_erreur = true;
    }
  }

  switchLanguage(item : any) {

    this.selectedLanguage = item,
    console.log('item', item);
    
    this.languageChange.switchLanguage(item.langue);
    this.ViewLangue = false;
  }

  ferme_erreur() {
    this.log_erreur = !this.log_erreur;
  }


  connected() {
    console.log('parfait', this.userform.value);

    this.loading = true;

   this.authService
     .signInWithFirebase( this.userform.value)
     .then(async (res) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
         if (res.user) {
        
      this.loading = false;
      console.log('succès sucès');

     let  user = this.localstorageService.getCurrentUser()

      if (user.nom === 'admin') {

        this.router.navigate(['dashboardAdmin']);
        
      } else if (user.nom === 'partenaire') {

        this.router.navigate(['dashboardPartenaire']);
        
      } else {
        this.router.navigate(['dashboardUser']);
      }
     
          
         }

    }) 
    .catch( 
      (error) =>  {

        this.iserrorlog = true;
        var errorCode = error.code;
        var errorMessage = error.message
        this.erreur_message = errorMessage;

        if (errorCode === "auth/network-request-failed") {

          this.erreur_message = ' Verifiez votre connexion internet'
          
        } else if( errorCode === "auth/invalid-email" || errorCode === "auth/invalid-credential" ) {

          console.log('le error', error);
          this.erreur_message = " Votre mot de passe ou email est mal renseigné"
          

        }
          
      }
    )

  }

  goToSign()
  {
    
    this.router.navigate(["signup"]);
  }


  closeError()  {
    this.iserrorlog = false;
    this.loading = false;
  }



}


