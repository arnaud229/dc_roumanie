import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinancesService } from '../services/Finances/finances.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { dette, User } from 'src/models/variables';
import { UsersService } from '../services/firebase/user.service';

@Component({
  selector: 'app-edit-dette',
  templateUrl: './edit-dette.component.html',
  styleUrls: ['./edit-dette.component.scss']
})
export class EditDetteComponent {

  loading = false;
  detteform!: FormGroup;
  log_erreur = false;
  erreur_message = '';
  iserrorlog = false;
 
  DetteId = "";
  listUser: any[] = [];
   theUser!: User;
   currentUser! : User;
  


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private financeServices: FinancesService,
    public userService: UsersService,
    private Aroute: ActivatedRoute,
    public localstorageService: LocalstorageService,
   
 
  ) {

    this.getAllUsers();
    this.init_form();
  }

  ngOnInit() {

    this.init_form();
    this.getAllUsers();
    this.currentUser = this.localstorageService.getCurrentUser();
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

        this.DetteId =  params['index']; 
       
       this.financeServices.getDetteById(this.DetteId).subscribe(
        (res) => {

       this.userService.getUser(res.user_id).subscribe(
        (res) =>{
          this.theUser =  res ;
        }
       )
          
    this.detteform = this.formbuilder.group({
      libele: res.libele,
      user: ['', [Validators.required]],
      montantDu: res.montantDu,
      dateDette: res.dateDette,
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

 async editDette() {

  console.log('parfait', this.detteform.value);

  this.loading = true;

  
  if (this.detteform.invalid) {  } 
    console.log('tete0');

    const detteInfo: dette = {
      montantDu: this.detteform.value.montantDu,
      dateDette: this.detteform.value.date,
      libele: this.detteform.value.libele,
      user_id: this.detteform.value.user.uid,
      nom: this.detteform.value.user.nom,
      prenoms: this.detteform.value.user.prenom,
      adminNom: ''
    }


   await  this.financeServices.updatedette(detteInfo, this.DetteId).then(
      (res) => {

        console.log('res', res);
        this.router.navigate(["dashboardAdmin", {index: 0}])


      }
    )
    .catch((e) => {
      console.log('error', e)
     
    });
   


}
}
