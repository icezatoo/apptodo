import { async, TestBed } from '@angular/core/testing';
import { TodoModule } from './todo.module';

describe('TodolibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodoModule).toBeDefined();
  });
});
