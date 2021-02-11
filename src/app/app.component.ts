import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public users = [];

  constructor(private userService: UsersService) {}

  public ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
