import { Component, inject, NgModule } from '@angular/core';
import { combineLatestAll } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrigCharacCreateService } from '../../../../core/service/brig-charac-create-service/brig-charac-create-service';
@Component({
  selector: 'app-brig-form-component',
  imports: [CommonModule],
  templateUrl: './brig-form-component.html',
  styleUrl: './brig-form-component.css',
})
export class BrigFormComponent {

// Signaux pour variables locales
characCreateService = inject(BrigCharacCreateService)
charac_race = this.characCreateService.charac_race
stats = this.characCreateService.stats

// Méthodes appelant service

humainStats(){
this.characCreateService.humainStats
console.log(this.stats)
console.log(this.charac_race)
}elfeStats(){
this.characCreateService.elfeStats
}
nainStats(){
this.characCreateService.nainStats
}
halfelinStats(){
this.characCreateService.halfelinStats
}





}
