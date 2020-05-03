import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { AdminComponent } from './userType/admin/admin.component';
import { StudentComponent } from './userType/student/student.component';
import { TeacherComponent } from './userType/teacher/teacher.component';
import { StudentEnrollListComponent } from './course/student-enroll-list/student-enroll-list.component';
import { EnrolledListComponent } from './enrolled-list/enrolled-list.component';
import { DeleteListComponent } from './delete-list/delete-list.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { ResultGradingComponent } from './result-grading/result-grading.component';


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
  { path: 'deleteActivity', component: DeleteListComponent },
  { path: 'grade', component: GradeListComponent },
  { path: 'result', component: ResultGradingComponent },
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
