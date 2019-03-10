import { Action } from '@ngrx/store';

export const GET_TODO = '[Get] Todo ';
export const GET_TODO_SUCCESS = '[Get] Todo  Success';
export const GET_TODO_FAILED = '[Get] Todo  Failed';
export const ADD_TODO = '[Add] Todo';
export const REMOVE_TODO = '[Remove] Remove Todo';
export const FILTER_TODO = '[Filter] filter Todo';
export const TOGGLE_TODO = '[TOGGLE] Toggle Todo';

export class GetTodo implements Action {
  readonly type = GET_TODO;
  constructor() {}
}

export class GetTodoSuccess implements Action {
  readonly type = GET_TODO_SUCCESS;

  constructor(public payload: any) {}
}

export class GetTodoFailed implements Action {
  readonly type = GET_TODO_FAILED;
  constructor(public payload: any) {}
}

export class AddTodolist implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: any) {}
}

export class RemoveTodolist implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: any) {}
}

export class FilterTodolist implements Action {
  readonly type = FILTER_TODO;
  constructor(public payload: any) {}
}

export class ToggleTodolist implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: any) {}
}

export type Actions =
  | GetTodo
  | GetTodoSuccess
  | GetTodoFailed
  | AddTodolist
  | RemoveTodolist
  | FilterTodolist
  | ToggleTodolist;
