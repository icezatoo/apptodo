import { User } from '@apptodo/data-models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class TodoCountPipe implements PipeTransform {
  transform(todolist: User[], args?: any): any {
    if (args === 'DONE') {
      return todolist.filter(val => val.completed === true).length;
    } else if (args === 'ACTIVE') {
      return todolist.filter(val => val.completed === false).length;
    } else {
      return todolist.length;
    }
  }
}
