import { Injectable, Injector } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AuthService } from "../auth/auth.service";
import { applyPagination, orderByQuery, whereQuery } from "./firebase-utils";
import { BehaviorSubject, map } from "rxjs";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  getBlob
} from 'firebase/storage';
import { User } from "src/models/variables";



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

      getUser(uid: string) {
        if (!uid) {
          throw new Error('L\'ID utilisateur (uid) est manquant ou invalide.');
        }
        return this.firestore
          .collection('utilisateurs')
          .doc(uid)
          .get()
          .pipe(
            map((data) => {
              return data.data() as User;
            })
          );
      }

      async validPreselect(val: boolean, index: string) {
        await this.firestore.doc(`utilisateurs/${index}`).update({
          isvalidePreselect: val,
        }
      ).then(() => {
        console.log('Document mis à jour avec succès');
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour du document:', error);
        // Afficher un message à l'utilisateur si nécessaire
      });
      }

      async validSelect(val: boolean, index: string) {

        await this.firestore.doc(`utilisateurs/${index}`).update({
          isvalidSelect: val,
        }
      ).then(() => {
        console.log('Document mis à jour avec succès');
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour du document:', error);
        // Afficher un message à l'utilisateur si nécessaire
      });

      }
      async validProcess(val: boolean, index: string) {

        await this.firestore.doc(`utilisateurs/${index}`).update({
          isProcessSucceful: val,
        }
      ).then(() => {
        console.log('Document mis à jour avec succès');
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour du document:', error);
        // Afficher un message à l'utilisateur si nécessaire
      });

      }

    async  preselect(data: any, index: string) {
     await   this.firestore.doc(`utilisateurs/${index}`).update({
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
       religion: data.religion, 
      ldtep2: data.ldtep2, 
      fils_recus: data.fils_recus, 

        }

        ).then(() => {
          console.log('Document mis à jour avec succès');
        })
        .catch(error => {
          console.error('Erreur lors de la mise à jour du document:', error);
          // Afficher un message à l'utilisateur si nécessaire
        });

      }


      uploadVidoe(data: any, index: string) {

      }


   async   select(data: any, index: string) {
      await  this.firestore.doc(`utilisateurs/${index}`).update({
          //les nouvelles valeurs wifi195100 40zu78

          LieuNaissance: data.LieuNaissance,
          dateNaissance: data.dateNaissance,
          paysNaissance:  data.paysNaissance,
          Pere: data.Pere,
          Mere: data.Mere,
          nPasseport: data.nPasseport,
          lieuPasseport: data.lieuPasseport,
          dateEmiPasseport: data.dateEmiPasseport,
          dateExpPasseport: data.dateExpPasseport,
          derniereResidence: data.derniereResidence,
          derniereResidencePays: data.derniereResidencePays,
          derniereResidenceVillage: data.derniereResidenceVillage,
          qualiProfession: data.qualiProfession,
          principalProfession: data.principalProfession,
          langueParler: data.langueParler,
          expProfesionnel: data.expProfesionnel,
          nbrEnfants: data.nbrEnfants,
          dHonneur: data.dHonneur,  
          fils_diplome: data.fils_diplome,
          fil_photo: data.fil_photo,
          fil_passportPhoto: data.fil_passportPhoto,
          fil_casierJudiciere: data.fil_casierJudiciere,


        }

        ).then(() => {
          console.log('Document mis à jour avec succès');
        })
        .catch(error => {
          console.error('Erreur lors de la mise à jour du document:', error);
          // Afficher un message à l'utilisateur si nécessaire
        });

      }


   
    
  }