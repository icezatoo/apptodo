import { Component, OnInit } from '@angular/core';
import { TodolibFacade } from '../../+state/todolib.facade';

@Component({
  selector: 'apptodo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  constructor(private todolibServiceFacade: TodolibFacade) {}

  ngOnInit() {
    this.todolibServiceFacade.fatchUserList();
  }
}
