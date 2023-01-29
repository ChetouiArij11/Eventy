import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilmComponent } from './film/film.component';
import { SerieComponent } from './serie/serie.component';
import { ProComponent } from './pro/pro.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CardComponent } from './card/card.component';
import { SceneComponent } from './scene/scene.component';
import { AbonnementComponent } from './abonnement/abonnement.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmComponent,
    SerieComponent,
    ProComponent,
    AuthentificationComponent,
    CardComponent,
    SceneComponent,
    AbonnementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
