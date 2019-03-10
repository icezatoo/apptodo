import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@apptodo/data-models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  fetchTodoUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/todos/'
    );
  }
}
