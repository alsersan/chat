import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {
  public user: any = {};

  public onSubmit(): void {
    alert('Form submitted');
  }
}
