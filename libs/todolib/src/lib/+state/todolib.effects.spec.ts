import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { TodolibEffects } from './todolib.effects';
import { LoadTodo, TodoLoaded } from './todolib.actions';

describe('TodolibEffects', () => {
  let actions: Observable<any>;
  let effects: TodolibEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        TodolibEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(TodolibEffects);
  });

  describe('loadTodolib$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadTodo() });
      expect(effects.loadTodolib$).toBeObservable(
        hot('-a-|', { a: new TodoLoaded([]) })
      );
    });
  });
});
