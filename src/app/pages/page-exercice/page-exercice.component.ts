import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-exercice',
  templateUrl: './page-exercice.component.html',
  styleUrls: ['./page-exercice.component.css']
})
export class PageExerciceComponent implements OnInit {
  public data = "Coucou tout le monde";
  public customTitle="un joli titre";
  public monNom="Pascal";
  public messageIsDisplay: boolean = false;
  public textButton="Afficher le message";
  constructor() { }

  ngOnInit(): void {
  }

  public onClickDisplayInfo(){
    console.log(this.data);
    alert(`Coucou mon nom est ${this.monNom}`);
    this.monNom="Jérome";
  }

  public onClickDisplayMessage(){
    this.messageIsDisplay= !this.messageIsDisplay;
    if(this.messageIsDisplay){
      this.textButton="Cacher le message"
    }
    else{
      this.textButton="Afficher le message";
    }
  }

}

/**
 * Dans un fichier javascript
 * des varables (let, const)
 * et des fonctions
 * 
 * Dans nos classes
 * caractéristiques -> propriétés
 * comportements -> méthodes
 */
