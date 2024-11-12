import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { remboursement, User } from 'src/models/variables';
import { FinancesService } from '../services/Finances/finances.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';

@Component({
  selector: 'app-create-remboursement',
  templateUrl: './create-remboursement.component.html',
  styleUrls: ['./create-remboursement.component.scss']
})
export class CreateRemboursementComponent {

  
  loading = false;
  remboursementform!: FormGroup;
  log_erreur = false;
  erreur_message = '';
  accepter_rappelle = false;
  binding = "";
  iserrorlog = false;
  currentUser! : User;
  userId = "";

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private financeServices: FinancesService,
    public localstorageService: LocalstorageService,
 
  ) {

    this.init_form();
  }

  ngOnInit() {
    this.init_form();
    this.currentUser = this.localstorageService.getCurrentUser();
    this.userId = this.currentUser.uid
  }


 


  init_form(){
    this.remboursementform = this.formbuilder.group({
      //  telephone: ['',[Validators.required,Validators.pattern(/[0-9]+/)]],
      libele: ['', [Validators.required]],
      montantRembourse: ['', [Validators.required, Validators.min(0)]],
      dateRemboursement: ['', [Validators.required,Validators.pattern(/^[0-9] {4}$/), Validators.max(2026) ]],
  
    });
  } 

  ferme_erreur() {
    this.log_erreur = !this.log_erreur;
  }

  closeError()  {
    this.iserrorlog = false;
  }

  ajoutRemboursement()
  {
    
    console.log('parfait', this.remboursementform.value);

    this.loading = true;

    if (this.remboursementform.invalid) {  } 
    console.log('tete0');

    const remboursementInfo: remboursement = {
      montantRembourse: this.remboursementform.value.montantDu ,
      dateRemboursement: this.remboursementform.value.date,
      libele: this.remboursementform.value.libele,
      user_id: this.userId
    }


    this.financeServices.CreateRemboursement(remboursementInfo)
    .then(
      () => {
        this.loading = false;
        this.router.navigate(["dashboardAdmin", {index: 0}])
      }
    )
    .catch(
      (e) => {
        this.loading = false;
      }
    )





  } 

     

}
