import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { TodoPartialState } from './todolib.reducer';
import {
  LoadTodo,
  TodoLoaded,
  TodoLoadError,
  TodoActionTypes
} from './todolib.actions';

@Injectable()
export class TodolibEffects {
  @Effect() loadTodolib$ = this.dataPersistence.fetch(
    TodoActionTypes.LoadTodo,
    {
      run: (action: LoadTodo, state: TodoPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new TodoLoaded([]);
      },

      onError: (action: LoadTodo, error) => {
        console.error('Error', error);
        return new TodoLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TodoPartialState>
  ) {}
}
