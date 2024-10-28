import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { environement } from 'src/environements/environement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { finalize, map, take, takeWhile } from 'rxjs/operators';

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
    getBlob
  } from 'firebase/storage';
import { AuthService } from "../auth/auth.service";





@Injectable({
    providedIn: 'root',
  })
  export class StorageService  {

    storageFolders = {
        recuPreinscription: 'products',
        stores: 'stores',
        users: 'users',
      };

      private isUploadingSubject = new BehaviorSubject<boolean>(false);
  isUploading$ = this.isUploadingSubject.asObservable();

    //   appServerUrl = environement.adminServerConfig.baseUrl;


    constructor(
        public fbauth: AngularFireAuth,
        public firestore: AngularFirestore,
        private authService: AuthService,
        private httpClient: HttpClient,) { }






    uploadFile(options: {
        folder?: string;
        filename: string;
        file: Blob | Uint8Array | ArrayBuffer;
      }): Promise<string> {
        return new Promise((resolve, reject) => {
          const { folder, filename, file } = options;
          const storage = getStorage();
          const storageRef = ref(storage, `${folder}/${filename}`);
          const uploadTask = uploadBytesResumable(storageRef, file);
    
          // Register three observers:
          // 1. 'state_changed' observer, called any time the state changes
          // 2. Error observer, called on failure
          // 3. Completion observer, called on successful completion
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              reject(error);
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then(
                (downloadURL: string) => {
                  resolve(downloadURL);
                  console.log('File available at', downloadURL);
                }
              );
            }
          );
        });
      }

      deleteFileFromUrl(options: {
        folder?: string;
        url: string;
      }): Promise<boolean> {
        return new Promise((resolve, reject) => {
          const { folder, url } = options;
          const storage = getStorage();
          const imagePath = getFilePathFromUrl(url);
    
          console.log('options', options);
    
          // Create a reference to the file to delete
          const imageRef = ref(storage, imagePath);
          // const imageRef = firebase.storage().refFromURL(url);
          console.log('imageRef', imageRef);
          // Delete the file
          deleteObject(imageRef)
            .then(() => {
              console.log('deleted', url);
              resolve(true);
              // File deleted successfully
            })
            .catch((error) => {
              // Uh-oh, an error occurred!
              console.log('error', error);
              reject(error);
            });
        });
      }



    //   getFileFromUrl(options: {
    //     folder?: string;
    //     url: string;
    //   }): Promise<any> {
    //     return new Promise(async (resolve, reject) => {
    //       const { folder, url } = options;
    
    //       const firebaseApiKey = await this.authService.getCurrentUserFirebaseIdToken()
    
    //       const headers = new HttpHeaders({
    //         // 'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${firebaseApiKey}`
    //       })
    
    //       this.httpClient.post(this.appServerUrl + '/firebase-storage/get-file-from-url',
    //         { url },
    //         {
    //           headers:
    //             headers,
    //           responseType: 'blob'
    //         }
    //       ).toPromise().then((result) => {
    //         resolve(result)
    //       }).catch((err) => {
    //         reject(err)
    //       });
    
    //     });
    //   }

    // uploadFileProgress(file: File): Observable<number> {
    //   this.isUploadingSubject.next(true); // Indique que l'upload a commencé
  
    //   return interval(1000).pipe(
    //     takeWhile(()=> {
    //       // Au lieu d'utiliser isUploading$.value, on s'abonne à isUploading$
    //       return this.isUploading$.pipe(
    //         take(1), // Prendre seulement la première valeur émise
    //         map(isUploading => isUploading) // Mapper la valeur pour retourner le booléen
    //       );
    //     }),
    //     map(i => Math.floor((i + 1) / 10) * 10),
    //     finalize(() => {
    //       this.isUploadingSubject.next(false); // Indique que l'upload est terminé
    //     })
    //   );
    // }
      
    

    
  }



  function getFilePathFromUrl(url: string) {
    const { storageBucket } = environement.firebaseConfig;
    const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/`;
  
    let imagePath: string = url.replace(baseUrl, '');
  
    const indexOfEndPath = imagePath.indexOf('?');
  
    imagePath = imagePath.substring(0, indexOfEndPath);
  
    imagePath = imagePath.replace(/%2F/g, '/');
  
    imagePath = imagePath.replace(/%20/g, ' ');
  
    return imagePath;
  }