import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { videoPresentation } from 'src/models/variables';
import { serverTimestamp } from 'firebase/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  collectionName = 'videos';


  CreateVideo(newItem: videoPresentation) {
    const collection = this.firestore.collection<videoPresentation>(`/videos/`);
    return collection.add({
      createdAt: serverTimestamp(),
      ...newItem,
    });

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

 async validVideo(val: boolean ,index: string) {
  
    await this.firestore.doc(`videos/${index}`).update({
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

  deleteVideo() { }

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
