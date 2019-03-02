import { TodolibLoaded } from './todolib.actions';
import {
  TodolibState,
  Entity,
  initialState,
  todolibReducer
} from './todolib.reducer';

describe('Todolib Reducer', () => {
  const getTodolibId = it => it['id'];
  let createTodolib;

  beforeEach(() => {
    createTodolib = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Todolib actions ', () => {
    it('should return set the list of known Todolib', () => {
      const todolibs = [
        createTodolib('PRODUCT-AAA'),
        createTodolib('PRODUCT-zzz')
      ];
      const action = new TodolibLoaded(todolibs);
      const result: TodolibState = todolibReducer(initialState, action);
      const selId: string = getTodolibId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = todolibReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
