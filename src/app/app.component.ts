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
  version = '1.0';
  seaAnimals: SeaAnimal[] = [];
  sub: Subscription;

  constructor(private route: ActivatedRoute, router: Router) {
    this.sub = this.route.params.subscribe((params: ParamMap) => {
      console.log('subscribe');
      console.log('subscribe: keys = ' + params.keys);
      this.version = params['ver']
    });
    // TODO: Find a proper way to get a query string
    router.events.subscribe((ev: RouterEvent) => {
      if (ev instanceof ActivationEnd) {
        console.log('params.ver = ' + ev.snapshot.params.ver);
        this.version = ev.snapshot.params.ver;
      }
    });
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
  
  ngOnInit() {
   console.log('onInit');
   /*
    this.route.params.subscribe((params: Params) => {
      console.log('subscribe(): params = ' + params);
      let str = params['ver'];
      console.log('ver = ' + str);
    });
    */
  }
}
