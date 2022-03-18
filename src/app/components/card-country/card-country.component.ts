import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {
  @Input() public country: any; // cette propriété ici est fournie par son parent
  // On l'a rend paramétrable de l'extérieur du composant grâce au décorateur @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
