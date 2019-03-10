import * as Action from './todolib.actions';
import { User } from '@apptodo/data-models';
import { v4 as uuid } from 'uuid';

export const TODOLIB_FEATURE_KEY = 'todolib';
export type TodoFilter = 'ALL' | 'DONE' | 'ACTIVE';
/* tslint:disable:no-empty-interface */

export interface TodoState {
  list: User[]; // list of Todolib; analogous to a sql normalized table
  selectedId?: string | number; // which Todolib record has been selected
  loaded: boolean; // has the Todolib list been loaded
  error?: any; // last none error (if any)
  filter: TodoFilter;
}

export interface TodoPartialState {
  readonly [TODOLIB_FEATURE_KEY]: TodoState;
}

export const initialState: TodoState = {
  list: [],
  loaded: false,
  filter: 'ALL'
};

export function todolibReducer(
  state: TodoState = initialState,
  action: Action.Actions
): TodoState {
  switch (action.type) {
    case Action.GET_TODO: {
      return {
        ...state,
        loaded: true,
        list: [],
        filter: 'ALL'
      };
    }
    case Action.GET_TODO_SUCCESS: {
      return {
        ...state,
        loaded: false,
        list: [...action.payload],
        filter: 'ALL'
      };
    }
    case Action.GET_TODO_FAILED: {
      return {
        ...state,
        loaded: false,
        list: [],
        filter: 'ALL',
        error: action.payload
      };
    }
    case Action.ADD_TODO: {
      const newUser: User = {
        userId: 1,
        id: uuid(),
        title: action.payload,
        completed: false
      };
      return {
        ...state,
        loaded: false,
        list: [newUser, ...state.list],
        filter: 'ALL',
        error: action.payload
      };
    }

    case Action.REMOVE_TODO: {
      const newList = state.list.filter(
        (val: User) => val.id !== action.payload
      );
      return {
        ...state,
        loaded: false,
        list: [...newList],
        filter: 'ALL'
      };
    }

    case Action.FILTER_TODO: {
      return {
        ...state,
        filter: action.payload
      };
    }

    case Action.TOGGLE_TODO: {
      const newList = state.list.map(val =>
        val.id === action.payload ? { ...val, completed: !val.completed } : val
      );
      return {
        ...state,
        list: [...newList]
      };
    }
  }
  return state;
}
