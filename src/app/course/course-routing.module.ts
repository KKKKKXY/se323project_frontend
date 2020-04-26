import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CourseAddComponent } from './add/add.component';
import { CourseInfoComponent } from './info/info.component';



const courseRoutes: Routes = [
  { path: 'course/list', component: ListComponent },
  { path: 'course/add', component: CourseAddComponent},
  { path: 'course/info/:id', component: CourseInfoComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
