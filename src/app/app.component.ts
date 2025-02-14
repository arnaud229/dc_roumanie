import { Component } from '@angular/core';
import {initializeApp, } from '@angular/fire/app';
import { TranslateService } from '@ngx-translate/core';
import { environement } from 'src/environements/environement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'as_voyageur';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr'); // Langue de fallback
    translate.use('fr'); // Langue initiale
  }

 
}


