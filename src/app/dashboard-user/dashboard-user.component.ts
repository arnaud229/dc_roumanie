import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/localStorage/localStorage.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {

  selecter = 0;


  constructor(
    private router: Router,
    public authService: AuthService,
    public localstorageService: LocalstorageService,
  ) {}


  ngOnInit() {
   
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
