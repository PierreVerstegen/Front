import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home-component/home-component';
import { PlayerComponent } from '../component/pages/players/player-component/player-component';
import { PlayerCreationComponent } from '../component/pages/players/player-creation-component/player-creation-component';

export const routes: Routes = [ 
    {path: '' , component : HomeComponent},
    {path: 'app-player-component', component : PlayerComponent},
    {path: 'app-player-creation-component', component : PlayerCreationComponent}
];
