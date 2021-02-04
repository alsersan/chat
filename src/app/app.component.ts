import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public messages = [];
  public users = [];

  constructor(private userService: UsersService) {}

  public getMessage(message: string) {
    this.messages.push(message);
  }

  public ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((users) => (this.users = users.results));
  }
}
