import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preselection',
  templateUrl: './preselection.component.html',
  styleUrls: ['./preselection.component.scss']
})
export class PreselectionComponent {

  preselectform!: FormGroup;
  pre = "";
  edite = "";
  switch = false;


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
  ) {

    this.init_form();
  }

  ngOnInit() {
    this.init_form();
  }

  init_form(){
    this.preselectform = this.formbuilder.group({
      age: ['',Validators.required],
      sMatrimoniale: ['',Validators.required],
      NEtude: ['',Validators.required],
      metier: ['',Validators.required],
      aDiplome: ['',Validators.required],
      dApprentissage: ['',Validators.required],
      aExperience: ['',Validators.required],
      ePrecedent: ['',Validators.required],
      passport: ['',Validators.required],
      nationalite: ['',Validators.required],
      cWhatapp: ['',Validators.required],
    parrain: ['',Validators.required],
      region: ['',Validators.required], 
      ldtep2: [false,Validators.required], 
      fils: ['',Validators.required], 
      
      
     
     
    });
  } 

  suivant() {

    this.switch = !this.switch;

  }

  preselect(){

  }

}
