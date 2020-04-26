import { Component, OnInit } from '@angular/core';
import Student from '../../entity/student';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentService } from 'src/app/service/student-service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students.view.component.html',
  styleUrls: ['./students.view.component.css']
})
export class StudentsViewComponent implements OnInit{
  ngOnInit(): void {
    this.route.params
     .subscribe((params: Params) => {
     this.studentService.getStudent(+params['id'])
     .subscribe((inputStudent: Student) => this.student = inputStudent);
     });
    
  }
  student:Student
  constructor(private route: ActivatedRoute, private studentService: StudentService){}
  students: Student[];
}
