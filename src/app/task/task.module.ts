import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskComponent
      }
    ])
  ],
  declarations: [TaskComponent]
})
export class TaskModule { }
