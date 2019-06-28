import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeaAnimal } from './sea-animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sea animals in the order of the size';
  versions: number[] = [1, 2];
  @Input() currentVersion: number = this.versions[0];
  seaAnimals1: SeaAnimal[] = [];
  seaAnimals2: SeaAnimal[] = [];

  constructor(private _route : ActivatedRoute) {
    console.log('keys = ' + Object.keys(_route.params));
    console.log('keys = ' + Object.keys(_route.snapshot.queryParams));

    this.seaAnimals1.push(new SeaAnimal({
      order: 1,
      picture: 'salmon.jpg',
      name: 'Salmon',
      mammal: false
    }));
    this.seaAnimals1.push(new SeaAnimal({
      order: 2,
      picture: 'nemo2.jpg',
      name: 'Goldfish',
      mammal: false
    }));
    this.seaAnimals1.push(new SeaAnimal({
      order: 3,
      picture: 'gorilla.jpg',
      name: 'Shark',
      mammal: true
    }));
    this.seaAnimals1.push(new SeaAnimal({
      order: 4,
      picture: 'whale.jpg',
      name: 'Whole',
      mammal: false
    }));

    this.seaAnimals2.push(new SeaAnimal({
      order: 1,
      picture: 'nemo2.jpg',
      name: 'Goldfish',
      mammal: false
    }));
    this.seaAnimals2.push(new SeaAnimal({
      order: 2,
      picture: 'salmon.jpg',
      name: 'Salmon',
      mammal: true
    }));
    this.seaAnimals2.push(new SeaAnimal({
      order: 3,
      picture: 'shark.jpg',
      name: 'Shark',
      mammal: false
    }));
    this.seaAnimals2.push(new SeaAnimal({
      order: 3,
      picture: 'shark.jpg',
      name: 'Shark',
      mammal: false
    }));
    this.seaAnimals2.push(new SeaAnimal({
      order: 4,
      picture: 'whale.jpg',
      name: 'Whole',
      mammal: true
    }));
  }
  
  ngOnInit() {
   console.log('onInit');
  }

  versionChanged(event) {
    console.log('versionChanged: ' + event.target.value);
    this.currentVersion = event.target.value;
  }
}
