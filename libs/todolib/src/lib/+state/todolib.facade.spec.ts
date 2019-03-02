import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { TodolibEffects } from './todolib.effects';
import { TodolibFacade } from './todolib.facade';

import { todolibQuery } from './todolib.selectors';
import { LoadTodolib, TodolibLoaded } from './todolib.actions';
import {
  TodolibState,
  Entity,
  initialState,
  todolibReducer
} from './todolib.reducer';

interface TestSchema {
  todolib: TodolibState;
}

describe('TodolibFacade', () => {
  let facade: TodolibFacade;
  let store: Store<TestSchema>;
  let createTodolib;

  beforeEach(() => {
    createTodolib = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('todolib', todolibReducer, { initialState }),
          EffectsModule.forFeature([TodolibEffects])
        ],
        providers: [TodolibFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(TodolibFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allTodolib$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allTodolib$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `TodolibLoaded` to manually submit list for state management
     */
    it('allTodolib$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allTodolib$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new TodolibLoaded([createTodolib('AAA'), createTodolib('BBB')])
        );

        list = await readFirst(facade.allTodolib$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
