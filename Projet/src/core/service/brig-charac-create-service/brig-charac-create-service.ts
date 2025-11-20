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
  habilite: 0,
  magie: 0,
  mouvement: 0,
  perception: 0,
  sociabilite: 0,
  survie: 0,
  tir: 0,
  volonte: 0,
});
  //Jet de dés : méthode
  throw2D10() : number {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    return num1 + num2
  }

humainStats(){
this.charac_race.set('Humain')
this.stats.set({
  'combat': 25,
  'connaissances': 25,
  'discretion': 25,
  'endurance': 25,
  'force': 25,
  'habilite': 25,
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
  'habilite': 25,
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
  'habilite': 30,
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
  'habilite': 30,
  'magie': 0,
  'mouvement': 30,
  'perception': 25,
  'sociabilite': 35,
  'survie': 25,
  'tir': 25,
  'volonte': 20,
});
}
}
