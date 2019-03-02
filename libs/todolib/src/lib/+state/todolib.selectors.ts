import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOLIB_FEATURE_KEY, TodoState } from './todolib.reducer';

// Lookup the 'Todolib' feature state managed by NgRx
const getTodolibState = createFeatureSelector<TodoState>(TODOLIB_FEATURE_KEY);

const getLoaded = createSelector(
  getTodolibState,
  (state: TodoState) => state.loaded
);
const getError = createSelector(
  getTodolibState,
  (state: TodoState) => state.error
);

const getAllTodolib = createSelector(
  getTodolibState,
  getLoaded,
  (state: TodoState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getTodolibState,
  (state: TodoState) => state.selectedId
);
const getSelectedTodolib = createSelector(
  getAllTodolib,
  getSelectedId,
  (todolib, id) => {
    const result = todolib.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const todolibQuery = {
  getLoaded,
  getError,
  getAllTodolib,
  getSelectedTodolib
};
