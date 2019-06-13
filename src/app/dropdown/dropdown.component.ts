import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  public versions: number[] = [1, 2];
  @Input() currentVersion: number;

  constructor() { }

  onSelect(version) {
    console.log('onSelect: ' + version);
    this.currentVersion = version;
  }
}
