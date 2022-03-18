import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css']
})
export class PageTableComponent implements OnInit {
  public listCountries!: any[];
  constructor() { }

  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/region/europe?fields=name,capital,area,maps,population")
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response);

        this.listCountries = response;
      })
  }

}
