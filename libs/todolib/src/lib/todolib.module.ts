import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TodoComponent } from './containers/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MaterialModule } from '@apptodo/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  TODOLIB_FEATURE_KEY,
  initialState as todoInitialState,
  todolibReducer
} from './+state/todolib.reducer';
import { TodolibEffects } from './+state/todolib.effects';
import { TodolibFacade } from './+state/todolib.facade';

export const todoRoutes: Route[] = [{ path: '', component: TodoComponent }];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature(TODOLIB_FEATURE_KEY, todolibReducer, {
      initialState: todoInitialState
    }),
    EffectsModule.forFeature([TodolibEffects])
  ],
  declarations: [TodoComponent, TodoFormComponent, TodoListComponent],
  providers: [TodolibFacade]
})
export class TodolibModule {}
