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
        private httpClient: HttpClient,
      ) { }






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

          if (!imagePath) {
            console.error('Chemin du fichier invalide ou non trouvé');
            return;
          }
    
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


  // Dans votre fonction de téléchargement
async downloadFile(filePath: string, fileName: string) {
  try {
    const storage = getStorage();
    const fileRef = ref(storage, filePath);

    // Récupérer l'URL de téléchargement signée
    const url = await getDownloadURL(fileRef);

    // Créer un lien invisible et déclencher le téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName; // Nom du fichier pour l'utilisateur
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (error) {
    console.error("Erreur de téléchargement :", error);
  }
}

   extractFileNameFromUrl(url: string): string {
    // Extraire le nom du fichier de l'URL
    const matches = url.match(/[^/?#]+(?=([^.]\w{3,4}\b)|$)/);
    return matches ? matches[0] : 'document';
  }
      
    
    
  }



  function getFilePathFromUrl(url: string) {
    const imagePath = url.match(/\/o\/(.*?)\?/);
  
    return imagePath ? decodeURIComponent(imagePath[1]) : null;
  

  }