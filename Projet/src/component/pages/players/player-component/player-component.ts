import { Component, inject } from '@angular/core';
import { PlayerService } from '../../../../core/service/player-service/player-service';
import { PlayerResponse } from '../../../../models/playerResponse.model';

@Component({
  selector: 'app-player-component',
  imports: [],
  templateUrl: './player-component.html',
  styleUrl: './player-component.css',
})
export class PlayerComponent {
playerToFind : PlayerResponse | undefined;
players : PlayerResponse[] = [];
private readonly playerService = inject(PlayerService);

  getPlayer(){
    this.playerService.getPlayer().subscribe({
      next : (response : PlayerResponse[])=>{
        this.players = response
      },
      error : (error) => {
          console.log(error);
        },
      complete : () => {
          console.log('complete');
        }
    })
  }
  getPlayerById(id : number){
    this.playerToFind = this.players.find(p => p.player_id === id)
    console.log(this.playerToFind)
    }
  }

