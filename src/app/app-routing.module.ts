import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { AdminComponent } from './userType/admin/admin.component';
import { StudentComponent } from './userType/student/student.component';
import { TeacherComponent } from './userType/teacher/teacher.component';
import { StudentEnrollListComponent } from './course/student-enroll-list/student-enroll-list.component';
import { EnrolledListComponent } from './enrolled-list/enrolled-list.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/adminFunctions',
    pathMatch: 'full'
  },
  { path: 'adminFunctions', component: AdminComponent },
  { path: 'studentFunctions', component: StudentComponent },
  { path: 'teacherFunctions', component: TeacherComponent },
  { path: 'enrollActivity', component: StudentEnrollListComponent },
  { path: 'enrolledActivity', component: EnrolledListComponent },
  { path: '**', component: FileNotFoundComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
