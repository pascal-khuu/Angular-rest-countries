import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {
  public listNameCountries!: any[];
  // est équivalent à :
  // public listNameCountries: any[]|undefined;
  constructor() { }

  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/region/europe?fields=name")
    .then((datas) => datas.json())
    .then((response) => {
      console.log(response);
      
      this.listNameCountries =response;
    });
    
  }

}
