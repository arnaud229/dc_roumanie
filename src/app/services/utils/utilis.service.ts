import { Injectable } from "@angular/core";
import { arrondissements, communes, countries, departements, destinationCountrie, metiers, prefixe, quartiers, religion } from "./constants";

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
  
     religion = religion
    quartiers = quartiers;


    constructor() {

    }

    getListCountries() {
      return countries;
    }

    getListReligion() {
      return religion;

    }

    getListPrefixe() 
    {
      return prefixe ;
    }

    getMetiers()
    {
      return metiers;
    }
    getDestination()
    {
      return destinationCountrie;
    }
   










    
  }