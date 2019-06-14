import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() versions: number[];
  currentVersionNumber: number = 0;

  @Input() get currentVersion() {
    return this.currentVersionNumber;
  }
  @Output() versionChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  set currentVersion(val) {
    this.currentVersionNumber = val;
    this.versionChange.emit(this.currentVersionNumber);
  }

  onSelect(version) {
    console.log('onSelect: ' + version);
    this.currentVersion = version;
  }
}
