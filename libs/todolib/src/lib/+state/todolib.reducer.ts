import { TodoAction, TodoActionTypes } from './todolib.actions';
import { User } from '@apptodo/data-models';
export const TODOLIB_FEATURE_KEY = 'todolib';

/**
 * Interface for the 'Todolib' data used in
 *  - TodolibState, and
 *  - todolibReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */

export interface TodoState {
  list: User[]; // list of Todolib; analogous to a sql normalized table
  selectedId?: string | number; // which Todolib record has been selected
  loaded: boolean; // has the Todolib list been loaded
  error?: any; // last none error (if any)
}

export interface TodoPartialState {
  readonly [TODOLIB_FEATURE_KEY]: TodoState;
}

export const initialState: TodoState = {
  list: [],
  loaded: false
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function todolibReducer(
  state: TodoState = initialState,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case TodoActionTypes.LoadTodo: {
      state = {
        ...state,
        loaded: false
      };
      break;
    }
    case TodoActionTypes.TodoLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case TodoActionTypes.AddTodo: {
      const newData: User = {
        userId: 1,
        id: this.getRandomInt(100),
        title: action.payload,
        completed: false
      };
      state = {
        ...state,
        list: [newData, ...state.list],
        loaded: true
      };
      break;
    }
    case TodoActionTypes.RemoveTodo: {
      const newDataRemove = state.list.filter(
        (val: User) => val.id !== action.payload
      );
      state = {
        ...state,
        list: [...newDataRemove],
        loaded: true
      };
      break;
    }
  }
  return state;
}
