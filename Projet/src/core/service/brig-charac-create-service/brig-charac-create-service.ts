import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrigCharacCreateService {
  
  //Jet de dés : méthode
  throw2D10() : number {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    return num1 + num2
  }


}
