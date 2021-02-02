import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  @Input() public buttonLabel: string;
  @Output() public actionClicked = new EventEmitter();
  public message: string;

  constructor() {}

  public buttonClicked() {
    this.actionClicked.emit(this.message);
    this.message = '';
  }
}
