import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { videoPresentation } from 'src/models/variables';
import { serverTimestamp } from 'firebase/firestore';
import { map } from 'rxjs';
import { UsersService } from '../firebase/user.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private firestore: AngularFirestore,
    private userServ : UsersService,
    private storageService:  StorageService,
  ) { }

  collectionName = 'videos';


  CreateVideo(newItem: videoPresentation) {
    const collection = this.firestore.collection<videoPresentation>(`/videos/`);
    return collection.add({
      createdAt: serverTimestamp(),
      ...newItem,
    });

  }

  getVideosByPartId(index: any)
  {
    const collection = this.firestore.collection<any>('dettes', (ref) =>
          ref.where('partenaireId', '==', index)
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


  getVideos() {

    const collection = this.firestore.collection<any>('videos'
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

 async validVideo(val: boolean ,index: string, idUser: string, indP: any, prenP: string) {
  
    await this.firestore.doc(`videos/${index}`).update({
      isvalidVideo: val,
      partenairePrenom: prenP,
      partenaireId: indP,
    }
  ).then(() => {
    console.log('Document mis à jour avec succès');

     this.userServ.validSelect(val, idUser, indP, prenP);


  })
  .catch(error => {
    console.error('Erreur lors de la mise à jour du document:', error);
    // Afficher un message à l'utilisateur si nécessaire
  });
  }

  async validProcessByPartenaireInVideo(val: boolean ,index: string, idUser: string) {
    
  
    await this.firestore.doc(`videos/${index}`).update({
      isvalideProcess: val,
    }
  ).then(() => {
    console.log('Document mis à jour avec succès');
    this.userServ.validProcess(val, idUser)
  })
  .catch(error => {
    console.error('Erreur lors de la mise à jour du document:', error);
    // Afficher un message à l'utilisateur si nécessaire
  });
  }

  async rejectObservation(val: string ,index: string) {
  
    await this.firestore.doc(`videos/${index}`).update({
      observation: val,
    }
  ).then(() => {
    console.log('Document mis à jour avec succès');
  })
  .catch(error => {
    console.error('Erreur lors de la mise à jour du document:', error);
    // Afficher un message à l'utilisateur si nécessaire
  });
  }

  getVideoById(id: string) {
    return this.firestore
      .collection<videoPresentation>(`/${this.collectionName}/`)
      .doc(id)
      .get()
      .pipe(
        map((data) => {
          return { ...data.data(), id } as videoPresentation;
        })
      );
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
        this.firestore.doc(`videos/${index}`).delete();

         console.log(` document supprimé de Firestore avec succès.`);
        

      }
    )

  }

  getVideoByUserId(userId: any) {
    console.log('userId :>> ', userId);
    const collection = this.firestore.collection<videoPresentation>('videos', (ref) =>
      ref.where('user_id', '==', userId)
    );

    const items$ = collection.snapshotChanges().pipe(
      map((snapshots) => {
        const data = snapshots.map((snap) => {
          const data = snap.payload.doc.data();
          const id = snap.payload.doc.id;
          return { id, ...data };
        });

        var lastVisible = snapshots[snapshots.length - 1]?.payload?.doc;
        return { data, lastVisible };
      })
    );
    console.log('store$ :>> ', items$);
    return items$;
  }






  
}
