import { User } from '@apptodo/data-models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todolist: User[] = [];
  @Input() filter: string = 'ALL';
  @Output() toggleTodoClick = new EventEmitter<string>(true);
  @Output() deleteTodoClick = new EventEmitter<string>(true);

  constructor() {}

  ngOnInit() {}

  onChangeCompleted(idTodo: string) {
    this.toggleTodoClick.emit(idTodo);
  }

  removeTodo(idTodo: string) {
    if (!window.confirm('Are you  sure delete')) return;
    this.deleteTodoClick.emit(idTodo);
  }
}
