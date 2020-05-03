import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import Course from 'src/app/entity/course';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { ListItem, ListDataSource } from '../list/list-datasource';
import { studentEnrollListDataSource, studentEnrollListItem } from './studentEnrollList-datasource';
import { StudentService } from 'src/app/service/student-service';
import Lecturer from 'src/app/entity/lecturer';
import Enroll from 'src/app/entity/enroll';

@Component({
  selector: 'app-student-enroll-list',
  templateUrl: './student-enroll-list.component.html',
  styleUrls: ['./student-enroll-list.component.css']
})
export class StudentEnrollListComponent implements AfterViewInit, OnInit {

  ngAfterViewInit(): void {
  }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<studentEnrollListItem>;
  dataSource: studentEnrollListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['activityId', 'activityName', 'semester', 'academic', 'participant', 'credit', 'lecturer', 'enroll'];


  constructor(private courseService: CourseService, private studentService: StudentService, private router: Router) { }
  ngOnInit() {
    this.courseService.getCourses().subscribe(
      courses => {
        this.dataSource = new studentEnrollListDataSource(this.paginator, this.sort);
        this.dataSource.data = courses;
      });
  }


  enrollActivity(activityId: number) {
    console.log(activityId);
    const course:Observable<Course> = this.courseService.getCourse(activityId);
    console.log(course);
    // this.studentService.enrollActivity(course)
    //   .subscribe(course => {
        this.router.navigate(['enrolledActivity']);
      // }
    // )
  }
}