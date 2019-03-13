import { User } from '@apptodo/data-models';
import { Component, OnInit } from '@angular/core';
import { TodolibFacade } from '../../+state/todolib.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'apptodo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public loaded$: Observable<boolean>;
  public todoList$: Observable<User[]>;
  public filterMenu$: Observable<string>;

  constructor(private todolibServiceFacade: TodolibFacade) {
    this.loaded$ = this.todolibServiceFacade.loaded$;
    this.todoList$ = this.todolibServiceFacade.allTodolib$;
    this.filterMenu$ = this.todolibServiceFacade.filterTodo$;
  }

  ngOnInit() {
    this.todolibServiceFacade.fatchUserList();
  }

  toggleTodoClick(id: string) {
    this.todolibServiceFacade.toggleTodoList(id);
  }

  addTodoList(title: string) {
    this.todolibServiceFacade.addTodoList(title);
  }

  menuHeaderClick(memuClick: string) {
    this.todolibServiceFacade.filterTodoList(memuClick);
  }

  deleteTodoClick(id: string) {
    this.todolibServiceFacade.removeTodoList(id);
  }
}
