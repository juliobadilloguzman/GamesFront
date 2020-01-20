import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private _gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;

    if(id){
      
      this._gameService.getGame(id).subscribe(
        res => {
          this.game = res[0];
          delete this.game['createdAt'];
          this.edit = true;
        
        },
        error => {
          console.log(error);
        }
      )
    }

  }

  saveGame(){
    
    delete this.game.id;
    delete this.game.created_at;

    this._gameService.createGame(this.game).subscribe(
      res => {
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    );

  }

  updateGame(){
    
    console.log(this.game);

    this._gameService.updateGame(this.game.id, this.game).subscribe(
      res => {
        this.router.navigate(['/games']);
      },
      error => {
        console.log(error);
      }
    );

  }

}
