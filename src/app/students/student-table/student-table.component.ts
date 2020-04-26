import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentTableDataSource } from './student-table-datasource';
import Student from 'src/app/entity/student';
import { BehaviorSubject } from 'rxjs';
import { StudentService } from 'src/app/service/student-service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Student>;
  dataSource: StudentTableDataSource;
  loading: boolean;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  displayedColumns = ['id', 'studentId', 'name', 'surname', 'image', 'penAmount', 'gpa'];
  students: Student[];
  filter: string;
  filter$: BehaviorSubject<string>;
  constructor(private studentService: StudentService) { }
  ngOnInit() {
    this.loading = true;
    this.studentService.getStudents()
      .subscribe(students => {
        this.dataSource = new StudentTableDataSource();
        this.dataSource.data = students;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.students = students;
        this.filter$ = new BehaviorSubject<string>('');
        this.dataSource.filter$ = this.filter$;
        setTimeout(() => {
          this.loading = false;
        },500);
        
      }
      );
  }

  ngAfterViewInit() {
  }
  applyFilter(filterValue: string) {
    this.filter$.next(filterValue.trim().toLowerCase());
  }
  averageGpa() {
    let sum = 0;
    if (Array.isArray(this.students)) {
      for (const student of this.students) {
        sum += student.gpa;
      }
      return sum / this.students.length;
    } else {
      return null;
    }

  }

  upQuantity(student: Student) {
    student.penAmount++;
  }

  downQuantity(student: Student) {
    if (student.penAmount > 0) {
      student.penAmount--;
    }
  }
}
