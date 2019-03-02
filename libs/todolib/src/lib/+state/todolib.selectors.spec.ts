import { Entity, TodolibState } from './todolib.reducer';
import { todolibQuery } from './todolib.selectors';

describe('Todolib Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTodolibId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createTodolib = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      todolib: {
        list: [
          createTodolib('PRODUCT-AAA'),
          createTodolib('PRODUCT-BBB'),
          createTodolib('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Todolib Selectors', () => {
    it('getAllTodolib() should return the list of Todolib', () => {
      const results = todolibQuery.getAllTodolib(storeState);
      const selId = getTodolibId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedTodolib() should return the selected Entity', () => {
      const result = todolibQuery.getSelectedTodolib(storeState);
      const selId = getTodolibId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = todolibQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = todolibQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
