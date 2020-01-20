import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { GamesComponent } from './components/games/games.component';

import { GamesService } from "./services/games.service";

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddGameComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
