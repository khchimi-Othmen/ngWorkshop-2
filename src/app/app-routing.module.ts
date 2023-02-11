import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OffresEmploiComponent} from "./offres-emploi/offres-emploi.component";
import {ArticlesComponent} from "./articles/articles.component";

const routes: Routes = [
  {path:'exercice1', component:OffresEmploiComponent},
  {path:'exercice2', component:ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
