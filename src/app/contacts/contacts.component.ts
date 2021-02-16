import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  public messages = [];
  public name: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  public getMessage(message: string) {
    this.messages.push(message);
  }

  public ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params.user;
  }

  public editUser(): void {
    this.router.navigate(['edit', this.usersService.activeUser.name.first]);
  }
}
