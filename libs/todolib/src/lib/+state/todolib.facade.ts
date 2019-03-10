import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TodoPartialState } from './todolib.reducer';
import { todolibQuery } from './todolib.selectors';

@Injectable()
export class TodolibFacade {
  loaded$ = this.store.pipe(select(todolibQuery.getLoaded));
  allTodolib$ = this.store.pipe(select(todolibQuery.getAllTodolib));
  selectedTodolib$ = this.store.pipe(select(todolibQuery.getSelectedTodolib));

  constructor(private store: Store<TodoPartialState>) {}
}
