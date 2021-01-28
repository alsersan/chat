import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  public messages = [];

  constructor() {}

  public updateMessage(value) {
    this.messages.push(value);
    console.log(this.messages);
  }

  ngOnInit(): void {}
}
