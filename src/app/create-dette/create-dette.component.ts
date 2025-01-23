import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinancesService } from '../services/Finances/finances.service';
import { dette, User } from 'src/models/variables';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { UsersService } from '../services/firebase/user.service';

@Component({
  selector: 'app-create-dette',
  templateUrl: './create-dette.component.html',
  styleUrls: ['./create-dette.component.scss']
})
export class CreateDetteComponent {

  loading = false;
  detteform!: FormGroup;
  log_erreur = false;
  erreur_message = '';
  iserrorlog = false;
  userId = "";
  listUser: any[] = [];
  currentUser! : User;

 

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private financeServices: FinancesService,
    public userService: UsersService,
    public localstorageService: LocalstorageService,
 
  ) {

  this.getAllUsers();

    this.init_form();
    this.currentUser = this.localstorageService.getCurrentUser();
  }

  ngOnInit() {
    this.init_form();
    this.getAllUsers();
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
      this.listUser = res.data.filter(
        (res) => res.nom != 'admin' && res.nom != 'partenaire'
      )


    }
   )
  }


 


  init_form(){
    this.detteform = this.formbuilder.group({
      //  telephone: ['',[Validators.required,Validators.pattern(/[0-9]+/)]],
      libele: ['', [Validators.required]],
      user: [null, [Validators.required]],
      montantDu: ['', [Validators.required, Validators.min(0)]],
      dateDette: ['', [Validators.required,Validators.pattern(/^[0-9] {4}$/), Validators.max(2026) ]],
  
    });
  } 

  ferme_erreur() {
    this.log_erreur = !this.log_erreur;
  }

  closeError()  {
    this.iserrorlog = false;
  }

  ajoutDette() {

    console.log('parfait', this.detteform.value);

    this.loading = true;

    
    if (this.detteform.invalid) { return } 
      console.log('tete0');

      const detteInfo: dette = {
        montantDu: this.detteform.value.montantDu,
        dateDette: this.detteform.value.dateDette,
        libele: this.detteform.value.libele,
        user_id: this.detteform.value.user?.uid || null,
        nom: this.detteform.value.user?.nom,
        prenoms: this.detteform.value.user?.prenom || null,
        adminNom: this.currentUser.prenom,
      }
      console.log('data user', this.detteform.value);
      
      console.log('data', detteInfo); 
      

      this.financeServices.CreateDette(detteInfo)
      .then(
        () => {
          this.loading = false;
          this.router.navigate(["dashboardAdmin", {index: 2}])

        } 
      )
      .catch((e) => {
        this.loading = false;
      });

  }

}
