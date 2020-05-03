import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeleteActivityService } from '../service/delete-activity.service';
import { gradeListItem, gradeListDataSource } from './gradeList-datasource';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements AfterViewInit,OnInit {
  ngAfterViewInit(): void {
  }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<gradeListItem>;
  dataSource: gradeListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['activityId', 'activityName', 'semester', 'academic', 'lecturer', 'score', 'grade'];

  constructor(private deleteActivityService: DeleteActivityService, private router: Router) { }
  ngOnInit() {
    this.deleteActivityService.getDeleteActivity().subscribe(
      courses => {
        this.dataSource = new gradeListDataSource(this.paginator, this.sort);
        this.dataSource.data = courses;
      });
  }

  grade() {
        this.router.navigate(['/result']);
  }

}