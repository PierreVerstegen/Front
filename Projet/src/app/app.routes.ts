import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home-component/home-component';
import { PlayerComponent } from '../component/pages/players/player-component/player-component';
import { PlayerCreationComponent } from '../component/pages/players/player-creation-component/player-creation-component';
import { CreationComponent } from '../component/pages/creation-component/creation-component';
import { ListComponent } from '../component/pages/list-component/list-component';
import { GameComponent } from '../component/pages/games/game-component/game-component';
import { GameCreationComponent } from '../component/pages/games/game-creation-component/game-creation-component';

export const routes: Routes = [ 
    {path: '' , component : HomeComponent},
    {path: 'app-player-component', component : PlayerComponent},
    {path: 'app-player-creation-component', component : PlayerCreationComponent},
    {path: 'app-creation-component', component : CreationComponent},
    {path: 'app-list-component', component : ListComponent},
    {path: 'app-game-component', component : GameComponent},
    {path: 'app-game-creation-component', component : GameCreationComponent}
];
