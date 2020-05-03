import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { gradeListItem, gradeListDataSource } from '../grade-list/gradeList-datasource';
import { GradeService } from '../service/grade.service';
@Component({
  selector: 'app-result-grading',
  templateUrl: './result-grading.component.html',
  styleUrls: ['./result-grading.component.css']
})
export class ResultGradingComponent implements AfterViewInit, OnInit {

  ngAfterViewInit(): void {
  }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<gradeListItem>;
  dataSource: gradeListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['activityId', 'activityName', 'semester', 'academic', 'lecturer', 'grade'];

  constructor(private gradeService: GradeService, private router: Router) { }
  ngOnInit() {
    this.gradeService.getActivityResult().subscribe(
      courses => {
        this.dataSource = new gradeListDataSource(this.paginator, this.sort);
        this.dataSource.data = courses;
      });
  }
}