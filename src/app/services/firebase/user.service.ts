import { Injectable, Injector } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AuthService } from "../auth/auth.service";
import { applyPagination, orderByQuery, whereQuery } from "./firebase-utils";
import { map } from "rxjs";



@Injectable({
    providedIn: 'root',
  })
  export class UsersService {

    isAuthenticated = false;
    constructor(
      public fbauth: AngularFireAuth,
      public firestore: AngularFirestore,
      private authService: AuthService,
      private injector: Injector
    ) {
      this.fbauth.authState.subscribe((res) => {
        this.isAuthenticated = true;
      });
  
      // listen to utilisateurs collections changes
      this.firestore
        .collection('utilisateurs')
        .snapshotChanges()
        .subscribe((snaps) => {
          this.authService.reloadUser();
        });
    }

    getAuthState() {
        return this.fbauth.authState;
      }
      async getCurrentUserId() {
        const user = await this.fbauth.currentUser;
        return (user && user.uid) || null;
      }


      getUsers(data: any) {
        const { pagination, filters } = data;
        console.log('filters', filters);
        const { startAt, limit } = pagination || {};
        const { whereQueries, orderByQueries, like } = filters || {};
        const collection = this.firestore.collection<any>('utilisateurs', (ref) => {
        
          return applyPagination(
            orderByQuery(whereQuery(ref, whereQueries), orderByQueries),
            pagination
          );
        });
    
        const result$ = collection.snapshotChanges().pipe(
          map((snapshots: any[]) => {
            const data = snapshots.map((snap) => {
              const data = snap.payload.doc.data();
              const id = snap.payload.doc.id;
              return { id, ...data };
            });
            var lastVisible = snapshots[snapshots.length - 1]?.payload?.doc;
            return { data, lastVisible };
          })
        );
        console.log('result$ :>> ', result$);
        return result$;
      }


      preselect(data: any, index: string) {
        this.firestore.doc(`utilisateurs/${index}`).update({
          //les nouvelles valeurs wifi195100 40zu78

          age: data.age,
      sMatrimoniale: data.sMatrimoniale,
      NEtude: data.NEtude,
      metier: data.metier,
      aDiplome: data.aDiplome,
      dApprentissage: data.dApprentissage,
      aExperience: data.aExperience,
      ePrecedent: data.ePrecedent,
      passport: data.passport,
      nationalite: data.nationalite,
      cWhatapp: data.cWhatapp,
       parrain: data.parrain,
      region: data.region, 
      ldtep2: data.ldtep2, 
      fils_recus: data.fils_recus, 

        }

        )

      }
    
  }