import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { remboursement, User } from 'src/models/variables';
import { FinancesService } from '../services/Finances/finances.service';
import { UsersService } from '../services/firebase/user.service';

@Component({
  selector: 'app-edit-remboursement',
  templateUrl: './edit-remboursement.component.html',
  styleUrls: ['./edit-remboursement.component.scss']
})
export class EditRemboursementComponent {

  loading = false;
  remboursementform!: FormGroup;
  log_erreur = false;
  erreur_message = '';
  iserrorlog = false;
 
  renboursementId = "";
  listUser: any[] = [];
   theUser!: User;
  


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private financeServices: FinancesService,
    public userService: UsersService,
    private Aroute: ActivatedRoute,
   
 
  ) {

    this.getAllUsers();
    this.init_form();
  }

  ngOnInit() {

    this.init_form();

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

    this.Aroute.params.subscribe(params => {
      const indexParams = params['index'];

      if (indexParams !== undefined) {

        this.renboursementId =  params['index']; 
       
       this.financeServices.getRemboursementById(this.renboursementId).subscribe(
        (res) => {

       this.userService.getUser(res.user_id).subscribe(
        (res) =>{
          this.theUser =  res ;
        }
       )
          
    this.remboursementform = this.formbuilder.group({
      libele: res.libele,
      user: ['', [Validators.required]],
      montantRembourse: res.montantRembourse,
      dateRemboursement: res.dateRemboursement,
    });


        }
       )
     } 

})




}

ferme_erreur() {
  this.log_erreur = !this.log_erreur;
}

closeError()  {
  this.iserrorlog = false;
}


async editRemboursement() {

  console.log('parfait', this.remboursementform.value);

  this.loading = true;

  if (this.remboursementform.invalid) {  } 
  console.log('tete0');

  const remboursementInfo: remboursement = {
    montantRembourse: this.remboursementform.value.montantDu,
    dateRemboursement: this.remboursementform.value.date,
    libele: this.remboursementform.value.libele,
    user_id: this.remboursementform.value.uid,
    nom: this.remboursementform.value.user.nom,
    prenoms: this.remboursementform.value.user.prenom
  }


  this.financeServices.updateRemboursement(remboursementInfo, this.renboursementId).then(
    (res) => {

      console.log('res', res);
      this.router.navigate(["dashboardAdmin", {index: 1}])


    }
  )
  .catch((e) => {
    console.log('error', e)
   
  });

}

}
