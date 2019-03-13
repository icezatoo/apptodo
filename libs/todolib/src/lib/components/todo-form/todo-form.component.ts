import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() addTodoList = new EventEmitter<string>(true);

  public titlevalue = '';

  constructor() {}

  ngOnInit() {}

  AddTodo(event) {
    event.preventDefault();
    this.addTodoList.emit(this.titlevalue);
    this.titlevalue = '';
  }
}
