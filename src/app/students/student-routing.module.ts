import { Routes, RouterModule } from '@angular/router';
import { StudentsViewComponent } from './view/students.view.component';
import { StudentsAddComponent } from './add/students.add.component';
import { StudentsComponent } from './list/students.component';
import { NgModule } from '@angular/core';
import { StudentTableComponent } from './student-table/student-table.component';



const StudentRoutes: Routes = [
    { path: 'add', component: StudentsAddComponent },
    { path: 'list', component: StudentTableComponent },
    { path: 'detail/:id', component: StudentsViewComponent },
    { path: 'table', component: StudentTableComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(StudentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StudentRoutingModule {

}
