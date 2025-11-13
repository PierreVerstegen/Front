import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerResponse } from '../../../models/playerResponse.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = 'http://localhost:8000/api/characters/brigandyne/';
  private tokenKey = 'auth_token';
  private roleKey = 'user_role';
  private readonly httpClient = inject(HttpClient)
  constructor() {}

getPlayer(): Observable<PlayerResponse[]>{
  return this.httpClient.get<PlayerResponse[]>(this.apiUrl);
}

getPlayerById(id : number): Observable<PlayerResponse>{
  return this.httpClient.get<PlayerResponse>(this.apiUrl+id);
}
}
