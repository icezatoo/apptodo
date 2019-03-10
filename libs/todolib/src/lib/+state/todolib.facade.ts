import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TodoPartialState } from './todolib.reducer';
import { todolibQuery } from './todolib.selectors';
import * as todoAction from './todolib.actions';

@Injectable()
export class TodolibFacade {
  loaded$ = this.store.pipe(select(todolibQuery.getLoaded));
  allTodolib$ = this.store.pipe(select(todolibQuery.getAllTodolib));
  selectedTodolib$ = this.store.pipe(select(todolibQuery.getSelectedTodolib));

  constructor(private store: Store<TodoPartialState>) {}

  public fatchUserList() {
    this.store.dispatch(new todoAction.GetTodo());
  }

  public addTodoList(title: string) {
    this.store.dispatch(new todoAction.AddTodolist(title));
  }

  public removeTodoList(id: string) {
    this.store.dispatch(new todoAction.RemoveTodolist(id));
  }
}
