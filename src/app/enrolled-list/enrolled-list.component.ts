import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import Student from '../entity/student';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-enrolled-list',
  templateUrl: './enrolled-list.component.html',
  styleUrls: ['./enrolled-list.component.css']
})
export class EnrolledListComponent implements OnInit {

  ngOnInit() {
    
  }
  student:Student
  constructor(private route: ActivatedRoute, private studentService: StudentService){}
  students: Student[];
}