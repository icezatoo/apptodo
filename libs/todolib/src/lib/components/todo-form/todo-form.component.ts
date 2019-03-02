import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apptodo-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  public titlevalue = '';

  constructor() {}

  ngOnInit() {}

  AddTodo(event) {
    event.preventDefault();
    // this.onaddtodo.emit(this.titlevalue);
    this.titlevalue = '';
  }
}
