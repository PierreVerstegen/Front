import { Component, inject, NgModule } from '@angular/core';
import { combineLatestAll } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrigCharacCreateService } from '../../../../core/service/brig-charac-create-service/brig-charac-create-service';
@Component({
  selector: 'app-brig-form-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './brig-form-component.html',
  styleUrl: './brig-form-component.css',
})
export class BrigFormComponent {

// Signaux pour variables locales
characCreateService = inject(BrigCharacCreateService)
charac_race = this.characCreateService.charac_race
stats = this.characCreateService.stats

affichage = "+ 2D10"
isDisabled = false;
isDisabled2 = false;
selectedArchetype = this.characCreateService.selectedArchetype
archetypeDict : {} = {
                "Aigle":"Ambitieux(-se), sûr(e) de moi, j'ai un fort esprit de compétition. Connaissances ou Perception +5, Volonté +5",
                "Ane":"Tranquille, altruiste, plaisantin et têtu(e). Endurance +5, Habileté ou Survie +5, Volonté +5, Connaissances -5",
                "Cerf":"Honorable, droit(e) dans mes bottes, et fier(e). Sociabilité +5, Volonté +5, Survie ou Mouvement +5, Discrétion ou Tir -5",
                "Chat":"Svelte, charmeur(-se), mystérieux(-se), parfois cruel(-le). Discrétion +5, Perception +5, Mouvement +5, Force ou Volonté -5",
                "Chien":"Amical(e), loyal(e), courageux (-se), mais aussi impulsif(-ive). Endurance +5, Perception +5, Sociabilité +5, Discrétion ou Habileté -5",
                "Coq":"Vaniteux(-se), va-t-en-guerre, et séducteur(-trice). Combat +5, Sociabilité +5, Discrétion ou Habileté -5",
                "Corbeau":"Mystérieux(-se), d’allure sombre, j’ai mauvaise réputation. Connaissances +5, Discrétion ou Survie +5, Volonté +5, Sociabilité -5",
                "Fourmi":"Plutôt petit(e), travailleur(-se), sérieux(-se). Connaissances ou Discrétion +5, Habileté +5, Volonté +5, Perception ou Sociabilité -5",
                "Hibou":"Je-sais-tout, travailleur(-se), exigeant(e). Connaissances +10, Habileté ou Perception +5, Sociabilité ou Volonté +5, Combat -5",
                "Hyène":"Moqueur(-se), cruel(-le), violent(e). Combat +5, Discrétion ou Mouvement+5, Force ou Volonté -5",
                "Lapin":"Plutôt petit(e), enjoué(e), j’aime plaire. Discrétion +5, Mouvement +5, Perception +5, Sociabilité +10, Combat -5, Force -5",
                "Lion":"Imposant(e), charismatique, j'ai une forte estime de moi. Combat +5, Force +5, Sociabilité +5, Connaissances ou Habileté -5, Discrétion -5",
                "Loup":"Patibulaire, violent(e), loyal(e). Combat +5, Perception ou Survie +5, Sociabilité -5",
                "Mouton":"Suiveur(-se), prudent(e), amical(e). Habileté +5, Perception +5, Sociabilité +5, Volonté -5",
                "Ours":"Gros(-se) et fort(e), mais aussi protecteur(-trice). Force +5, Endurance +5, Perception ou Survie +5, Connaissances ou Discrétion -5",
                "Paon":"Frivole, vaniteux(-se), sociabilite. Sociabilité +10, Connaissances ou Perception +5, Force -5",
                "Porc":"Fort(e), gras(-se), lubrique, j'aime la fête et la bonne chère. Force +5, Endurance +5, Sociabilité +5, Mouvement ou Connaissances -5",
                "Rat":"Plutôt petit(e), avare, méchant(e). Discrétion +5, Connaissances ou Volonté +5, Endurance ou Survie +5, Force -5",
                "Renard":"Plutôt svelte, rusé(e), séducteur(-trice). Mouvement +5, Sociabilité +5, Habileté ou Discrétion +5, Endurance ou Force -5",
                "Serpent":"Froid(e), calculateur(-trice), cynique. Connaissances +5, Sociabilité +5, Volonté +5, Mouvement ou Perception -5",
                "Singe":"Agile, amical(e), moqueur(-se), plaisantin. Mouvement +10, Sociabilité +5, Volonté -5",
                "Souris":"Plutôt petit(e), enjoué(e), courageux(-se). Discrétion +10, Habileté +5, Mouvement +5, Sociabilité +5, Combat -5, Force -5",
                "Taureau":"Gros (-se) et fort(e), violent(e), j’aime m’imposer. Combat +5, Endurance +5, Force +5, Discrétion -5, Connaissances ou Habileté -5",
                "Vautour":"Dégingandé(e), moqueur(-se), cynique. Connaissances ou Endurance +5, Perception +5, Volonté +5, Mouvement ou Sociabilité -5",
}

// bidule test

bonusSlider1= this.characCreateService.bonusSlider1;
bonusSlider2= this.characCreateService.bonusSlider2;





// Méthodes appelant service

humainStats(){
this.characCreateService.humainStats()
this.isDisabled = false
}
elfeStats(){
this.characCreateService.elfeStats()
this.isDisabled = false
}
nainStats(){
this.characCreateService.nainStats()
this.isDisabled = false
}
halfelinStats(){
this.characCreateService.halfelinStats()
this.isDisabled = false
}

generateAll(){
  this.characCreateService.generateAll()
  this.affichage = ""
  this.isDisabled = true

}

updateStats(){

  this.characCreateService.updateStats()
  this.isDisabled2 = true
}

resetStats(){
if (this.charac_race() === 'Humain'){
this.stats.set({
  'combat': 25,
  'connaissances': 25,
  'discretion': 25,
  'endurance': 25,
  'force': 25,
  'habilete': 25,
  'magie': 0,
  'mouvement': 25,
  'perception': 25,
  'sociabilite': 25,
  'survie': 25,
  'tir': 25,
  'volonte': 25,
});
}
if (this.charac_race() === 'Elfe'){
this.stats.set({
  'combat': 25,
  'connaissances': 25,
  'discretion': 25,
  'endurance': 20,
  'force': 20,
  'habilete': 25,
  'magie': 0,
  'mouvement': 25,
  'perception': 30,
  'sociabilite': 25,
  'survie': 30,
  'tir': 30,
  'volonte': 20,})
}
if (this.charac_race() === 'Nain'){
this.stats.set({
  'combat': 30,
  'connaissances': 25,
  'discretion': 25,
  'endurance': 30,
  'force': 25,
  'habilete': 30,
  'magie': 0,
  'mouvement': 20,
  'perception': 20,
  'sociabilite': 20,
  'survie': 20,
  'tir': 20,
  'volonte': 30,
});
}
if (this.charac_race() === 'Halfelin'){
this.stats.set({
  'combat': 20,
  'connaissances': 25,
  'discretion': 35,
  'endurance': 20,
  'force': 15,
  'habilete': 30,
  'magie': 0,
  'mouvement': 30,
  'perception': 25,
  'sociabilite': 35,
  'survie': 25,
  'tir': 25,
  'volonte': 20,});
}
this.affichage = "+2D10"
  this.isDisabled = false
  this.isDisabled2 = false
}

}
