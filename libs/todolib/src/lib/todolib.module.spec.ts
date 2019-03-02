import { async, TestBed } from '@angular/core/testing';
import { TodolibModule } from './todolib.module';

describe('TodolibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodolibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodolibModule).toBeDefined();
  });
});
