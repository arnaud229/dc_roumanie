import { Injectable } from "@angular/core";
import { arrondissements, communes, countries, departements, quartiers } from "./constants";

@Injectable({
    providedIn: 'root',
  })
  export class UtilsService { 



    countries = countries;

    communes = communes.sort(function (a, b) {
      return a.localeCompare(b);
    });
  
  
  
    departements = departements.sort(function (a, b) {
      return a.localeCompare(b);
    });
  
    arrondissements = arrondissements.sort(function (a, b) {
      return a.localeCompare(b);
    });
  
    quartiers = quartiers;
   










    
  }