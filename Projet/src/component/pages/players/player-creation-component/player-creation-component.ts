import { Component, signal, computed, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlayerResponse } from '../../../../models/playerResponse.model';
import { BrigPlayerCreation } from '../../../../models/brigPlayerCreation.model';
import { BrigFormComponent } from "../../../shared/forms/brig-form-component/brig-form-component";
@Component({
  selector: 'app-player-creation-component',
  imports: [CommonModule,
    FormsModule, BrigFormComponent],
  templateUrl: './player-creation-component.html',
  styleUrl: './player-creation-component.css',
})
export class PlayerCreationComponent {

charac_model : string = ""
  // Données du formulaire (utilisation de signals pour la réactivité)
  character = signal({
    charac_name: '',
    charac_class: '',
    charac_money: 0,
    charac_bio: '',
    charac_model: '',
    experience_points: 0,
    user_id: 0,
    stats: {},
    abilities: [] as string[]
  });

  // Model selection methods
select_BRIG() {
  this.charac_model = 'BRIG'
}

select_DND() {
  this.charac_model = 'DND'
}

select_DCC() {
  this.charac_model = 'DCC'
}

change_model() {
  this.charac_model = ""
}

// Gestion des jets de dés pour attributs dnas un composant à part

  // addAbility() {
  //   if (this.newAbility.trim()) {
  //     this.character.update(c => ({
  //       ...c,
  //       abilities: [...c.abilities, this.newAbility.trim()]
  //     }));
  //     this.newAbility = '';
  //   }
  // }

  // removeAbility(index: number) {
  //   this.character.update(c => ({
  //     ...c,
  //     abilities: c.abilities.filter((_, i) => i !== index)
  //   }));
  // }



  submit() {
    const finalData: BrigPlayerCreation = {
      
      character: this.character()
    };
    console.log('Personnage créé :', finalData);

  }

}