import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Game } from '../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://138.68.51.208//api'

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get<Game[]>(`${this.API_URI}/games`);
  }

  getGame(id: number): Observable<Game>{
    return this.http.get<Game>(`${this.API_URI}/games/${id}`);
  }

  createGame(game: Game): Observable<Game>{
    return this.http.post(`${this.API_URI}/games`, game);
  }

  updateGame(id: number, game: Game): Observable<Game>{
    return this.http.put(`${this.API_URI}/games/${id}`, game);
  }

  deleteGame(id: number):Observable<Game>{
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  searchGame(busqueda:string): Observable<Game>{
    return this.http.delete(`${this.API_URI}/games/buscar/${busqueda}`);
  }

}
