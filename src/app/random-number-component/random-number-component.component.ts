import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.css']
})
export class RandomNumberComponentComponent {

  constructor(private dataService : DataServiceService){}
  
  generateRandomNumber(){
    this.dataService.generateRandomNumber(1, 100);
  }
}
