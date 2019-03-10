import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TodoService } from './../services/todo/todo.service';
import * as Act from './todolib.actions';
import { User } from '@apptodo/data-models';

@Injectable({
  providedIn: 'root'
})
export class TodoEffects {
  @Effect()
  loadTodolib$: Observable<Action> = this.actions$.pipe(
    debounceTime(500),
    ofType(Act.GET_TODO),
    mergeMap(action =>
      this.todoService.fetchTodoUser().pipe(
        map(data => ({ type: Act.GET_TODO_SUCCESS, payload: data })),
        catchError(err => of({ type: Act.GET_TODO_FAILED, payload: err }))
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
