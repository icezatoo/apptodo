import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface Menu {
  value: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  @Input() filter: string = 'ALL';
  @Output() menuFilterClick = new EventEmitter<string>(true);

  public menuFilter: Menu[] = [
    { value: 'ALL', title: 'All', icon: 'list' },
    { value: 'DONE', title: 'Done', icon: 'done' },
    { value: 'ACTIVE', title: 'Active', icon: 'stop' }
  ];
  constructor() {}

  ngOnInit() {}

  onMenuFilter(value: string) {
    this.menuFilterClick.emit(value);
  }
}
