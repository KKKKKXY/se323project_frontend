import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { DeleteActivityService } from '../service/delete-activity.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { gradeListItem, gradeListDataSource } from '../grade-list/gradeList-datasource';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.css']
})
export class DeleteListComponent implements AfterViewInit,OnInit {
  ngAfterViewInit(): void {
  }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<gradeListItem>;
  dataSource: gradeListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['activityId', 'activityName', 'semester', 'academic', 'lecturer', 'score'];



  constructor(private deleteActivityService:DeleteActivityService) { }

  ngOnInit() {
    this.deleteActivityService.getDeleteActivity().subscribe(
      courses => {
        this.dataSource = new gradeListDataSource(this.paginator, this.sort);
        this.dataSource.data = courses;
      });
  }

}