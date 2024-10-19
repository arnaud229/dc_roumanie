import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';
import { User } from 'src/models/variables';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {

  selecter = 0;
  userId = ""; 
  currentUser! : User



  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
    private Aroute: ActivatedRoute
  ) {}


  ngOnInit() {

    this.currentUser = this.localstorageService.getCurrentUser();

    this.Aroute.params.subscribe(params => {
      this.selecter = params['index'];   

      console.log('selector:', this.selecter);
      // Use the userId for your component's logic
   
  })
}



  selected(index: number) {
    if (index == 0) {

      this.selecter = 0 ;
      
    } else if (index == 1) {

       this.selecter = 1;

    } else if (index == 2) {

      this.selecter = 2 ;
      
    }

  }

  logOut() {

    this.localstorageService.logout()

  }

}
