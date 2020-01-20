import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './components/games/games.component'
import { AddGameComponent } from './components/add-game/add-game.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/games', pathMatch: 'full'
  },
  {
    path: 'games', component: GamesComponent
  },
  {
    path: 'games/add', component: AddGameComponent
  },
  {
    path: 'games/edit/:id', component: AddGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
