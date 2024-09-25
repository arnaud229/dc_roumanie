import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    // public authService: AuthService,
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
       telephone: ['',[Validators.required,Validators.pattern(/[0-9]+/)]],
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

  this.loading = true;

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
