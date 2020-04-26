import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListDataSource,ListItem } from './list-datasource';
import Course from 'src/app/entity/course';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit {
  ngAfterViewInit(): void {
  }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ListItem>;
  dataSource: ListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['activityId', 'activityName', 'semester', 'academic','participant','credit','lecturer','view'];

  constructor(private courseService: CourseService,private router: Router) { }
  ngOnInit() {
    this.courseService.getCourses().subscribe(
      courses => {
        this.dataSource = new ListDataSource(this.paginator, this.sort);
        this.dataSource.data = courses;
      });
  }
  
  routeToCourseInfo(activityId: number) {
    this.router.navigate(['course/info',activityId]);
  }
}