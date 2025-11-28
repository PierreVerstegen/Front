import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrigCharacCreateService {
  charac_race = signal<string>("");
  stats = signal<{ [key: string]: number }>({
  combat: 0,
  connaissances: 0,
  discretion: 0,
  endurance: 0,
  force: 0,
  habilete: 0,
  magie: 0,
  mouvement: 0,
  perception: 0,
  sociabilite: 0,
  survie: 0,
  tir: 0,
  volonte: 0,
});
  
  selectedArchetype = signal<string>("");
  //Jet de dés : méthode
  throw2D10(value : number) : number {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    value = num1 + num2 + value
    return value
  }

bonusSlider1 = signal<number>(0)
bonusSlider2 = signal<number>(0)

humainStats(){
this.charac_race.set('Humain')
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
elfeStats(){
this.charac_race.set('Elfe')
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
  'volonte': 20,
});
}
nainStats(){
this.charac_race.set('Nain')
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
halfelinStats(){
this.charac_race.set('Halfelin')
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
  'volonte': 20,
});
}


generateAll() {
  this.stats.update(stats => {
    const result = { ...stats }; // Les trois points servent à copier les éléments de stats, en gros on copie un élément pour pouvoir l'update avec la copie
    for (const key in result) {
      if (key !== 'magie')
      result[key] = this.throw2D10(result[key]);
    }
    return result;
  });
}

updateStats() {
  this.stats.update(stats => {
    const result = { ...stats }; // Les trois points servent à copier les éléments de stats, en gros on copie un élément pour pouvoir l'update avec la copie
    // Aigle
    if (this.selectedArchetype() === "Aigle"){
      result['volonte'] += 5
        if (this.bonusSlider1()=== 0){
          result['connaissances'] += 5
        }else{
          result['perception'] += 5
        }
    }
    // Ane
    if (this.selectedArchetype() === "Ane"){
      result['endurance'] += 5
      result['volonte'] += 5
      result['connaissances'] -= 5
        if (this.bonusSlider1()=== 0){
          result['habilete'] += 5
        }else{
          result['survie'] += 5
        }
    }
    // Cerf
    if (this.selectedArchetype() === "Cerf"){
      result['sociabilite'] += 5
      result['volonte'] += 5

        if (this.bonusSlider1()=== 0){
          result['survie'] += 5
        }else{
          result['mouvement'] += 5
        }

        if (this.bonusSlider2()=== 0){
          result['discretion'] -= 5
        }else{
          result['tir'] -= 5
        }
    }
    // Chat
    if (this.selectedArchetype() === "Chat"){
      result['discretion'] += 5
      result['perception'] += 5
      result['mouvement'] += 5
        if (this.bonusSlider1()=== 0){
          result['force'] -= 5
        }else{
          result['volonte'] -= 5
        }
      }
      // Chien
      if (this.selectedArchetype() === "Chien"){
      result['endurance'] += 5
      result['perception'] += 5
      result['sociabilite'] += 5
        if (this.bonusSlider1()=== 0){
          result['discretion'] -= 5
        }else{
          result['habilete'] -= 5
        }
      }
      // Coq
      if (this.selectedArchetype() === "Coq"){
      result['combat'] += 5
      result['sociabilite'] += 5

        if (this.bonusSlider1()=== 0){
          result['discretion'] -= 5
        }else{
          result['habilete'] -= 5
        }
      }
      // Corbeau
      if (this.selectedArchetype() === "Corbeau"){
      result['connaissances'] += 5
      result['volonte'] += 5
      result['sociabilite'] -= 5
        if (this.bonusSlider1()=== 0){
          result['discretion'] += 5
        }else{
          result['survie'] += 5
        }
      }
      // Fourmi
      if (this.selectedArchetype() === "Fourmi"){
      result['habilete'] += 5
      result['volonte'] += 5
      
        if (this.bonusSlider1()=== 0){
          result['connaissances'] += 5
        }else{
          result['discretion'] += 5
        }

        if (this.bonusSlider2()=== 0){
          result['perception'] -= 5
        }else{
          result['sociabilite'] -= 5
        }
      }

      // Hibou
      if (this.selectedArchetype() === "Hibou"){
      result['connaissances'] += 10
      result['combat'] -= 5
      
        if (this.bonusSlider1()=== 0){
          result['habilete'] += 5
        }else{
          result['perception'] += 5
        }

        if (this.bonusSlider2()=== 0){
          result['sociabilite'] += 5
        }else{
          result['volonte'] += 5
        }
      }

      // Hyène
      if (this.selectedArchetype() === "Hyène"){
      result['combat'] += 5
      
        if (this.bonusSlider1()=== 0){
          result['discretion'] += 5
        }else{
          result['mouvement'] += 5
        }

        if (this.bonusSlider2()=== 0){
          result['force'] -= 5
        }else{
          result['volonte'] -= 5
        }
      }

      // Lapin
      if (this.selectedArchetype() === "Lapin"){
      result['discretion'] += 5
      result['mouvement'] += 5
      result['perception'] += 5
      result['sociabilite'] += 10

        result['force'] -= 5
        result['combat'] -= 5
      }

      // Lion
      if (this.selectedArchetype() === "Lion"){
      result['combat'] += 5
      result['force'] += 5
      result['sociabilite'] += 5
      result['discretion'] -= 5

      if (this.bonusSlider1()=== 0){
          result['connaissances'] -= 5
        }else{
          result['habilete'] -= 5
        }
      }

      // Loup
      if (this.selectedArchetype() === "Loup"){
      result['combat'] += 5
      result['sociabilite'] -= 5


      if (this.bonusSlider1()=== 0){
          result['perception'] += 5
        }else{
          result['survie'] += 5
        }
      }

      // Mouton
      if (this.selectedArchetype() === "Mouton"){
      result['habilete'] += 5
      result['perception'] += 5
      result['sociabilite'] += 5

        result['volonte'] -= 5
      }

      // Ours
      if (this.selectedArchetype() === "Ours"){
      result['force'] += 5
      result['endurance'] += 5

        if (this.bonusSlider1()=== 0){
          result['perception'] += 5
        }else{
          result['survie'] += 5
        }

        if (this.bonusSlider2()=== 0){
          result['connaissances'] -= 5
        }else{
          result['discretion'] -= 5
        }
      }

      // Paon
      if (this.selectedArchetype() === "Paon"){
      result['force'] -= 5
      result['sociabilite'] += 10


      if (this.bonusSlider1()=== 0){
          result['connaissances'] += 5
        }else{
          result['perception'] += 5
        }
      }

      // Porc
      if (this.selectedArchetype() === "Ours"){
      result['force'] += 5
      result['endurance'] += 5
      result['sociabilite'] += 5

        if (this.bonusSlider1()=== 0){
          result['mouvement'] -= 5
        }else{
          result['connaissances'] -= 5
        }
      }

      // Rat
      if (this.selectedArchetype() === "Rat"){
      result['force'] -= 5
      result['discretion'] += 5

        if (this.bonusSlider1()=== 0){
          result['connaissances'] += 5
        }else{
          result['volonte'] += 5
        }

        if (this.bonusSlider2()=== 0){
          result['endurance'] += 5
        }else{
          result['survie'] += 5
        }
      }

      // Renard
      if (this.selectedArchetype() === "Renard"){
      result['mouvement'] += 5
      result['sociabilite'] += 5

        if (this.bonusSlider1()=== 0){
          result['habilete'] += 5
        }else{
          result['discretion'] += 5
        }

        if (this.bonusSlider2()=== 0){
          result['endurance'] -= 5
        }else{
          result['force'] -= 5
        }
      }

      // Serpent
      if (this.selectedArchetype() === "Serpent"){
      result['connaissances'] += 5
      result['sociabilite'] += 5
      result['volonte'] += 5

        if (this.bonusSlider1()=== 0){
          result['mouvement'] -= 5
        }else{
          result['perception'] -= 5
        }

      }
      // Singe
      if (this.selectedArchetype() === "Singe"){
      result['mouvement'] += 10
      result['sociabilite'] += 5
      result['volonte'] -= 5
      }

      // Souris
      if (this.selectedArchetype() === "Souris"){
      result['discretion'] += 10
      result['habilete'] += 5
      result['mouvement'] += 5
      result['sociabilite'] += 5

      result['combat'] -= 5
      result['force'] -= 5
      }

      // Taureau
      if (this.selectedArchetype() === "Taureau"){
      result['force'] += 5
      result['combat'] += 5
      result['endurance'] += 5
      result['discretion'] -= 5

        if (this.bonusSlider1()=== 0){
          result['connaissances'] -= 5
        }else{
          result['habilete'] -= 5
        }

      }
      // Vautour
      if (this.selectedArchetype() === "Vautour"){
      result['perception'] += 5
      result['volonte'] += 5

        if (this.bonusSlider1()=== 0){
          result['connaissances'] += 5
        }else{
          result['endurance'] += 5
        }

        if (this.bonusSlider2()=== 0){
          result['mouvement'] -= 5
        }else{
          result['sociabilite'] -= 5
        }
      }
    return result;
  });
}



} // <----- Closes the service