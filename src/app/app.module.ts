import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './service/student-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentsFileImplService } from './service/students-file-impl.service';
import { StudentsComponent } from './students/list/students.component';
import { StudentsAddComponent } from './students/add/students.add.component';
import { StudentsViewComponent } from './students/view/students.view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule
  , MatIconModule, MatListModule, MatGridListModule, MatCardModule
  , MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatSelectModule, MatRadioModule, MatProgressBarModule
} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { StudentRoutingModule } from './students/student-routing.module';
import { StudentTableComponent } from './students/student-table/student-table.component';
import { StudentRestImplService } from './service/student-rest-impl.service';
import { MatFileUploadModule } from "mat-file-upload";
import { ListComponent } from './course/list/list.component';
import { CourseAddComponent } from './course/add/add.component';
import { CourseInfoComponent } from './course/info/info.component';

import { CourseRoutingModule } from './course/course-routing.module';
import { CourseService } from './service/course.service';
import { CourseRestImplService } from './service/course-rest-impl.service';
import { LecturerService } from './service/lecturer.service';
import { LecturerRestImplService } from './service/lecturer-rest-impl.service';
import { AdminComponent } from './userType/admin/admin.component';
import { StudentComponent } from './userType/student/student.component';
import { TeacherComponent } from './userType/teacher/teacher.component';
import { StudentEnrollListComponent } from './course/student-enroll-list/student-enroll-list.component';





@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsViewComponent,
    MyNavComponent,
    FileNotFoundComponent,
    StudentTableComponent,
    ListComponent,
    CourseAddComponent,
    CourseInfoComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    StudentEnrollListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressBarModule,
    StudentRoutingModule,
    CourseRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatRadioModule,
    MatFileUploadModule
  ],
  providers: [
    { provide: StudentService, useClass: StudentRestImplService },
    { provide: CourseService, useClass: CourseRestImplService},
    { provide: LecturerService, useClass: LecturerRestImplService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
