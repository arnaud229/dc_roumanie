import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { dette, remboursement } from "src/models/variables";
import { serverTimestamp } from 'firebase/firestore';
import { map } from "rxjs";





@Injectable({
    providedIn: 'root'
  })


  export class FinancesService {


    collectionName = 'dettes';
    collectionName1 = 'renboursements';

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

      
    CreateRemboursement(newItem: remboursement) {
        const collection = this.firestore.collection<remboursement>(`/renboursements/`);
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

  getRemboursements() {

    const collection = this.firestore.collection<any>('remboursements'
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

  getRemboursementById(id: string) {
    return this.firestore
      .collection<remboursement>(`/${this.collectionName1}/`)
      .doc(id)
      .get()
      .pipe(
        map((data) => {
          return { ...data.data(), id } as remboursement;
        })
      );
  }



  deleteDette() { }
  deleteRemboursement() { }

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

  getRemboursementByUserId(userId: any) {
    console.log('userId :>> ', userId);
    const collection = this.firestore.collection<remboursement>('remboursements', (ref) =>
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


