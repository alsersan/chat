import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'https://randomuser.me/api';

  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}?results=5`);
  }
}
