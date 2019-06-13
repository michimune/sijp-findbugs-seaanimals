import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivationEnd, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SeaAnimal } from './sea-animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sea animals in the order of the size';
  versions: number[] = [1, 2];
  currentVersion: number = this.versions[0];
  seaAnimals1: SeaAnimal[] = [];
  seaAnimals2: SeaAnimal[] = [];
  sub: Subscription;

  constructor() {
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
      name: 'Whale',
      mammal: true
    }));
  }
  
  ngOnInit() {
   console.log('onInit');
  }
}
