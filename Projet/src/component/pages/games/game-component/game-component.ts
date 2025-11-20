import { Component, inject } from '@angular/core';
import { GameService } from '../../../../core/service/game-service/game-service';
import { gameResponse } from '../../../../models/gameResponse';

@Component({
  selector: 'app-game-component',
  imports: [],
  templateUrl: './game-component.html',
  styleUrl: './game-component.css',
})
export class GameComponent {
  gameToFind : gameResponse | undefined;
  games : gameResponse[] = [];
  private readonly gameService = inject(GameService);

  getGames(){
  this.gameService.getGame().subscribe({
    next : (response : gameResponse[])=>{
            this.games = response
          },
          error : (error) => {
              console.log(error);
            },
          complete : () => {
              console.log('complete');
            }
  })
}
getGameById(id : number){
    this.gameToFind = this.games.find(g => g.game_id === id)

    }
}
