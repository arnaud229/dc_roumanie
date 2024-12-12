import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { remboursement, User } from 'src/models/variables';
import { FinancesService } from '../services/Finances/finances.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { UsersService } from '../services/firebase/user.service';

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
  listUser: any[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private financeServices: FinancesService,
    public userService: UsersService,
 
  ) {

    this.init_form();
    this.getAllUsers()
  }

  ngOnInit() {
    this.init_form();
    this.getAllUsers()
  }



  getAllUsers() {
    
    const  data = {
        pagination: {
          startAt: 0,
          limit: 2,
        },
        filters: {
          orderByQueries: ['createdAt'],
          whereQueries: [
            {
              fieldPath: 'name' ,
              opStr: '==',
              value: 'admin',
            },
            {
              fieldPath: 'name' ,
              opStr: '==',
              value: 'partenaire',
            }
          ],
        },
      };
  
     this.userService.getUsers(data).subscribe(
      (res) => {
        this.listUser = res.data;
      }
     )
    }
 


  init_form(){
    this.remboursementform = this.formbuilder.group({
      //  telephone: ['',[Validators.required,Validators.pattern(/[0-9]+/)]],
      libele: ['', [Validators.required]],
      user: [null, [Validators.required]],
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

    // this.getUserByid(this.remboursementform.value.user.uid)

    const remboursementInfo: remboursement = {
      montantRembourse: this.remboursementform.value.montantRembourse,
      dateRemboursement: this.remboursementform.value.dateRemboursement,
      libele: this.remboursementform.value.libele,
      user_id: this.remboursementform.value.user.uid,
      nom: this.remboursementform.value.user.nom,
      prenoms: this.remboursementform.value.user.prenom
    }
  
    console.log('dataremb', remboursementInfo); 
    

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
