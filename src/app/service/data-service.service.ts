import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public randomNumbers: number[] = [];
  constructor() { }

  generateRandomNumber(min: number, max: number){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return this.randomNumbers.push(randomNumber);
  }

  getRandomNumber(){
    return this.randomNumbers;
  }
}
