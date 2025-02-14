import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
  }

  switchLanguage(language: string) {
    this.translate.use(language).subscribe({
      next: () =>
        {
          console.log('Langue changée avec succès'),
           // Sauvegarde automatique à chaque changement de langue
          localStorage.setItem('userLanguage', language);
        },
      error: (err) => console.error('Erreur de changement', err)
    });
  }


  getLanguage() {
    // Récupère la langue sauvegardée ou utilise 'fr' par défaut
    const savedLang = localStorage.getItem('userLanguage') || 'fr';
    this.translate.use(savedLang); 

    console.log('votre langue est :', savedLang );
    
 
 }
 
}

