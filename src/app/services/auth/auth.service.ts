import { Injectable, Injector } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { LocalstorageService } from "../localStorage/localStorage.service";
import { UsersService } from "../firebase/user.service";




@Injectable({
    providedIn: 'root',
  })
  export class AuthService  {


    userTempService: any;
    
    constructor(
        private fbauth: AngularFireAuth,
        private localStorageService: LocalstorageService,
        private firestore: AngularFirestore,
        private injector: Injector,
        private router: Router
      ) {
        this.reloadUser();
      }

        
        
  async reloadUser() {
    this.fbauth.authState.subscribe(async (res) => {

      if (res) {
        const user = res.toJSON() as any;
        this.userTempService = this.injector.get(UsersService);
        const userData = await this.userTempService
          .getUser(user.uid)
          .toPromise();

        const idToken = await res.getIdToken()
        this.localStorageService.setFirebaseAuthState({ ...res, idToken });
        this.localStorageService.setCurrentUser({
          id: user.uid,
          ...user,
          ...userData,
        });
      }
    });
  }

  
      
  }