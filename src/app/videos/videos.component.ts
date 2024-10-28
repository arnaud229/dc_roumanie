import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RecuFile } from 'src/models/variables';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {



  videoform!: FormGroup;
  @ViewChild('fileInput')
  fileInput!: ElementRef; 
  switch = false;
  isUploading = false;
  progressValue  = 0;
  filPhoto: RecuFile = {
    type: '',
    url: ''
  }

  

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    // private utilsService: UtilsService,
   
  ) {

    this.init_form();
  }



  ngOnInit() {
    this.init_form();
  }

  

  init_form(){
    this.videoform = this.formbuilder.group({
      
      secteur:  ['',Validators.required],
      description:  ['',Validators.required],
      filVideo:  [,Validators.required],
      
   
    });
  } 

  suivant() {

    this.switch = !this.switch;

  }
  getfils() {
    this.fileInput.nativeElement.click();
  }

  onFilesSelected(event : any) {

    this.isUploading = true;
    const files = event.target.files;
    console.log("files de input",files);
    console.log("files de tyoe ",typeof files);

    this.filPhoto = {
      type: files[0].type,
            url: files[0].name
    }

    
    setTimeout(() => {
      this.isUploading = false;
    }, 5000);
   

  }

  AjoutVideo() {

  }


}
