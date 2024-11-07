import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { dette, rembourssement } from "src/models/variables";
import { serverTimestamp } from 'firebase/firestore';
import { map } from "rxjs";





@Injectable({
    providedIn: 'root'
  })


  export class FinancesService {


    collectionName = 'dettes';
    collectionName1 = 'renbourssements';

    constructor(
        private firestore: AngularFirestore

    ) {}


    CreateDette(newItem: dette) {
        const collection = this.firestore.collection<dette>(`/dettes/`);
        return collection.add({
          createdAt: serverTimestamp(),
          ...newItem,
        });
    
      }

      
    CreateRembourssement(newItem: rembourssement) {
        const collection = this.firestore.collection<rembourssement>(`/renbourssements/`);
        return collection.add({
          createdAt: serverTimestamp(),
          ...newItem,
        });
    
      }

      
  getDettes() {

    const collection = this.firestore.collection<any>('dettes'
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

  getRembourssements() {

    const collection = this.firestore.collection<any>('rembourssements'
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


  getDetteById(id: string) {
    return this.firestore
      .collection<dette>(`/${this.collectionName}/`)
      .doc(id)
      .get()
      .pipe(
        map((data) => {
          return { ...data.data(), id } as dette;
        })
      );
  }

  getRembourssementById(id: string) {
    return this.firestore
      .collection<rembourssement>(`/${this.collectionName1}/`)
      .doc(id)
      .get()
      .pipe(
        map((data) => {
          return { ...data.data(), id } as rembourssement;
        })
      );
  }



  deleteDette() { }
  deleteRembourssement() { }

  getDetteByUserId(userId: any) {
    console.log('userId :>> ', userId);
    const collection = this.firestore.collection<dette>('dettes', (ref) =>
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
    // console.log('store$ :>> ', stores$);
    return items$;
  }

  getRembourssementByUserId(userId: any) {
    console.log('userId :>> ', userId);
    const collection = this.firestore.collection<rembourssement>('rembourssements', (ref) =>
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
    // console.log('store$ :>> ', stores$);
    return items$;
  }




   



  }


