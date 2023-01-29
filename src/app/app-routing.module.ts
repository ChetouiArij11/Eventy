import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FilmComponent } from './film/film.component';
import { ProComponent } from './pro/pro.component';
import { SerieComponent } from './serie/serie.component';

const routes: Routes = [
  {path:"",component:AuthentificationComponent,pathMatch:'full'},
  {path:"film",component:FilmComponent},
  {path:"serie",component:SerieComponent},
  {path:"pro",component:ProComponent},
  {path:"aaa",component:AbonnementComponent},
  {path:"**",redirectTo:'film'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
