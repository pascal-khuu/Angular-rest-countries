import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { PageExerciceComponent } from './pages/page-exercice/page-exercice.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageTableComponent } from './pages/page-table/page-table.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'table', component:PageTableComponent},
  { path: 'cards', component:PageCardsComponent},
  { path: 'exercice', component: PageExerciceComponent},
  { path: '**', component:PageNotFoundComponent}
]; // ici on crée une url associée à notre composant PageAccueil

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
