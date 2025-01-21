import { Injectable } from "@angular/core";
import { StorageService } from "../storage/storage.service";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { coursAnglaire } from "src/models/variables";
import { serverTimestamp } from "firebase/firestore";
import { map } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class anglaireService {

      constructor(
        private firestore: AngularFirestore,
           private storageService:  StorageService,
      ) { }

      collectionName = 'coursAnglaire';


      createCoursAnglaire(newItem: coursAnglaire) {
         const collection = this.firestore.collection<coursAnglaire>(`/coursAnglaire/`);
            return collection.add({
              createdAt: serverTimestamp(),
              ...newItem,
            });
      }


      getCoursAnhglaire() {

        const collection = this.firestore.collection<any>('coursAnglaire'
            // , (ref) => {
            // return applyPagination(orderByQuery(whereQuery(ref, whereQueries), orderByQueries), pagination); }
        );

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

      async  deleteVideo(
        options: {
          folder?: string;
          url: string;
        }, index: string
      ) { 
    
      await  this.storageService.deleteFileFromUrl(options).then(
          (res) => {
            console.log( 'super');
            // Étape 2 : Supprimer le champ dans le document Firestore
            this.firestore.doc(`coursAnglaire/${index}`).delete();
    
             console.log(` document supprimé de Firestore avec succès.`);
            
    
          }
        )
    
      }

}

