import { User } from '@apptodo/data-models';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  @Input() filterStatus: string = 'ALL';
  @Input() todolist: User[] = [];
  @Output() menuHeaderClick = new EventEmitter<string>(true);

  constructor() {}

  ngOnInit() {}

  menuFilterClick(valueMenu: string) {
    this.menuHeaderClick.emit(valueMenu);
  }
}
