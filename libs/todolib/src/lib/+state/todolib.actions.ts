import { Action } from '@ngrx/store';
import { User } from '@apptodo/data-models';

export enum TodoActionTypes {
  LoadTodo = '[Todo] Load Todo',
  TodoLoaded = '[Todo] Todo Loaded',
  TodoLoadError = '[Todo] Todo Load Error',
  AddTodo = '[Todo] Add Todo',
  RemoveTodo = '[Todo] Remove Todo'
}

export class LoadTodo implements Action {
  readonly type = TodoActionTypes.LoadTodo;
}

export class TodoLoadError implements Action {
  readonly type = TodoActionTypes.TodoLoadError;
  constructor(public payload: any) {}
}

export class TodoLoaded implements Action {
  readonly type = TodoActionTypes.TodoLoaded;
  constructor(public payload: User[]) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;
  constructor(public payload: string) {}
}

export class RemoveTodo implements Action {
  readonly type = TodoActionTypes.RemoveTodo;
  constructor(public payload: number) {}
}

export type TodoAction =
  | LoadTodo
  | TodoLoaded
  | TodoLoadError
  | AddTodo
  | RemoveTodo;

export const fromTodoActions = {
  LoadTodo,
  TodoLoaded,
  AddTodo,
  TodoLoadError,
  RemoveTodo
};
