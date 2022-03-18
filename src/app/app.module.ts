import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageTableComponent } from './pages/page-table/page-table.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';

import { CardCountryComponent } from './components/card-country/card-country.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageExerciceComponent } from './pages/page-exercice/page-exercice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageTableComponent,
    PageCardsComponent,
    
    CardCountryComponent,
         PageNotFoundComponent,
         PageExerciceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
