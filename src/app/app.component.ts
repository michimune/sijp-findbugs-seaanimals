import { Component } from '@angular/core';
import { SeaAnimal } from './sea-animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sea animals in the order of the size';
  seaAnimals: SeaAnimal[] = [];

  constructor() {
    this.seaAnimals.push(new SeaAnimal({
      order: 1,
      picture: 'salmon.jpg',
      name: 'Salmon',
      mammal: false
    }));
    this.seaAnimals.push(new SeaAnimal({
      order: 2,
      picture: 'nemo2.jpg',
      name: 'Goldfish',
      mammal: false
    }));
    this.seaAnimals.push(new SeaAnimal({
      order: 3,
      picture: 'gorilla.jpg',
      name: 'Shark',
      mammal: true
    }));
    this.seaAnimals.push(new SeaAnimal({
      order: 100,
      picture: 'whale.jpg',
      name: 'Whole',
      mammal: false
    }));
  }
}
