import { Injectable, Injector } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { LocalstorageService } from "../localStorage/localStorage.service";
import { UsersService } from "../firebase/user.service";
import { User } from "src/models/variables";





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
        private router: Router,
  
      ) {
        this.reloadUser();
      }

        
        
  async reloadUser() {
    this.fbauth.authState.subscribe(async (res) => {

      if (res) {
        const user = res.toJSON() as any;
        console.log("user", user);
        
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

  async getCurrentUserFirebaseIdToken() {
    console.log('getCurrentUserFirebaseIdToken :>> ');
    return this.localStorageService.getFirebaseAuthState()?.idToken
    // return new Promise((resolve, reject) => {
    //   this.fbauth.user.subscribe(async user => {
    //     console.log('user :>> ', user);
    //     resolve(await user?.getIdToken())
    //   })
    // })

    // return await user.then(res => {
    //   console.log('res :>> ', res);
    //   return res?.getIdToken()
    // }).catch((err) => {
    //   console.log('err :>> ', err);
    // });
  }


  async set_user_info(uid: string, value: any) {
    const defaultUserRoles: any = {
      productSeller: false,
      serviceSeller: false,
      competenceSeller: false,
      buyer: true
    }
    const user: User = {
      uid: "",
      nom: "",
      prenom: "",
      telephone: {
        code: "",
        numero: ""
      },
      mail: "",
      mdp: "",
      age: 0,
      sMatrimoniale: "",
      NEtude: "",
      metier: "",
      aDiplome: 0,
      dApprentissage: 0,
      aExperience: 0,
      ePrecedent: "",
      passport: false,
      nationalite: "",
      cWhatapp: "",
      parrain: "",
      region: "",
      ldtep2: "",
      fils_recus: [],
      admin: false,
      partenaire: false,
      LieuNaissance: "",
      dateNaissance: new Date(),
      paysNaissance: "",
      Pere: {
        nom: "",
        prenoms: ""
      },
      Mere: {
        nom: "",
        prenoms: ""
      },
      nPasseport: "",
      lieuPasseport: "",
      dateEmiPasseport: new Date(),
      dateExpPasseport: new Date(),
      derniereResidence: "",
      derniereResidencePays: "",
      derniereResidenceVillage: "",
      qualiProfession: "",
      principalProfession: "",
      langueParler: "",
      expProfesionnel: [],
      nbrEnfants: 0,
      dHonneur: false,
      fils_diplome: [],
      fil_photo: {
        type: "",
        url: ""
      },
      fil_passportPhoto: {
        type: "",
        url: ""
      },
      fil_casierJudiciere: {
        type: "",
        url: ""
      }
    };
    await this.firestore
      .collection('utilisateurs')
      .doc(uid)
      .set(user)
      .then(() => console.log("c'est fait l'insertion"))
      .catch((error: { code: any; message: any }) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('vous aviez une erreur ' + errorCode + ': ' + errorMessage);
      });
  }


  async createFirebaseUser(user: any) {
    await this.fbauth
      .createUserWithEmailAndPassword(user.mail, user.mdp)
      .then((res: any) => {
        console.log(res);
        this.set_user_info(res.user.uid, user)
          .then((userData) => {
            console.log('userData :>> ', userData);
            this.fbauth
              .signOut()
              .then(() => {
                console.log('succès ');
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(
                  'vous aviez une erreur 1 ' + errorCode + ' : ' + errorMessage
                );
              });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(
              'vous aviez une erreur 2 ' + errorCode + ' : ' + errorMessage
            );
          });
          console.log("avant le log");
          

        this.router.navigate(['../signin']);
      })
    .catch((error: any) => {
      console.log('toto12');

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(
        'vous aviez une erreur 3 ' + errorCode + ': ' + errorMessage
      );
    });
  }


  signInWithFirebase(data: any) {
    return this.fbauth.signInWithEmailAndPassword(data.mail, data.mdp);
  }

  resetPassword(mail: string) {
    return new Promise((resolve, reject) => {

      this.fbauth
        .sendPasswordResetEmail(mail)
        .then(() => {
          resolve(true)
          console.log('un message vous a été envoyer par email. vérifiez svp');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          reject(error)
          console.log(
            'vous aviez une erreur ' + errorCode + ' : ' + errorMessage
          );
        });
    })

  }


      
  }