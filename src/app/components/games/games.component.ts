import { Component, OnInit, NgModule, Input } from '@angular/core';

import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game';

import swal from'sweetalert2';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  private games: Game[] = [];

  constructor(private _gameService: GamesService) { }

  ngOnInit() {
    this.getGames()
  }

  getGames(){
    this._gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }

  deleteGame(id: number){
    this._gameService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.log(err)
    );
  }


  

}
