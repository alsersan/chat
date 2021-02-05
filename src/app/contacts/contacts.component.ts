import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  public messages = [];
  public name: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  public getMessage(message: string) {
    this.messages.push(message);
  }

  public ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params.user;
  }
}
