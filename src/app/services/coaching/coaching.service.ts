import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { serverTimestamp } from 'firebase/firestore';
import { map } from 'rxjs';
import { coaching } from 'src/models/variables';

@Injectable({
  providedIn: 'root'
})
export class coachingService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  collectionName = 'caoching';


  CreateCoaching(newItem: coaching) {
    const collection = this.firestore.collection<coaching>(`/coaching/`);
    return collection.add({
      createdAt: serverTimestamp(),
      ...newItem,
    });

  }



  getCoaching() {

    const collection = this.firestore.collection<any>('coaching'
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


  getCoachingById(id: string) {
    return this.firestore
      .collection<coaching>(`/${this.collectionName}/`)
      .doc(id)
      .get()
      .pipe(
        map((data) => {
          return { ...data.data(), id } as coaching;
        })
      );
  }
  

  deleteVideo() { }






  
}
