import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import Course from 'src/app/entity/course';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { studentEnrollListItem, studentEnrollListDataSource } from '../course/student-enroll-list/studentEnrollList-datasource';


@Component({
  selector: 'app-enrolled-list',
  templateUrl: './enrolled-list.component.html',
  styleUrls: ['./enrolled-list.component.css']
})
export class EnrolledListComponent implements AfterViewInit,OnInit {
  ngAfterViewInit(): void {
  }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<studentEnrollListItem>;
  dataSource: studentEnrollListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['activityId', 'activityName', 'semester', 'academic', 'participant', 'credit', 'lecturer', 'delete'];

  constructor(private courseService: CourseService, private router: Router) { }
  ngOnInit() {
    this.courseService.getCourses().subscribe(
      courses => {
        this.dataSource = new studentEnrollListDataSource(this.paginator, this.sort);
        this.dataSource.data = courses;
      });
  }

  deleteActivity(activityId: number) {
    console.log(activityId);
    const course:Observable<Course> = this.courseService.getCourse(activityId);
    console.log(course);
        this.router.navigate(['/deleteActivity']);
  }
}