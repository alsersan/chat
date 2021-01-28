import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  public message: string;

  constructor() {}

  public updateMessage(value) {
    this.message = value;
  }

  ngOnInit(): void {}
}
