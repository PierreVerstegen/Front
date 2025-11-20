import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs'
import { gameResponse } from '../../../models/gameResponse';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = 'http://localhost:8000/api/games/';
  private tokenKey = 'auth_token';
  private roleKey = 'user_role';
  private readonly httpClient = inject(HttpClient)
  constructor(private router: Router) {}
  
  getGame(): Observable<gameResponse[]>{
    return this.httpClient.get<gameResponse[]>(this.apiUrl);
  }

  getPlayerById(id : number): Observable<gameResponse>{
    return this.httpClient.get<gameResponse>(this.apiUrl+id);
}

  create_game(game_name:string, game_model : string, game_theme : string, players? : [], npcs?:[]): Observable<gameResponse>{
    return this.httpClient.post<gameResponse>(`${this.apiUrl}/games`,
      {
            game_name,
            game_model,
            game_theme,
            players,
            npcs,
          }).pipe(
            tap(() => this.router.navigate(['/app-game-component'])),
            catchError(err => throwError(() => err))
          );
        }
  };
