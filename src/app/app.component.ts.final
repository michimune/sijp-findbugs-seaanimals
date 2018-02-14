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
      picture: 'nemo2.jpg',
      name: 'Angel fish',
      mammal: false
    }));
    this.seaAnimals.push(new SeaAnimal({
      order: 2,
      picture: 'salmon.jpg',
      name: 'Salmon',
      mammal: false
    }));
    this.seaAnimals.push(new SeaAnimal({
      order: 3,
      picture: 'shark.jpg',
      name: 'Shark',
      mammal: false
    }));
    this.seaAnimals.push(new SeaAnimal({
      order: 4,
      picture: 'whale.jpg',
      name: 'Whale',
      mammal: true
    }));
  }
}
