import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  enrollActivity() {
    this.router.navigate(['course/add']);
  }

  seeActivityList() {
    this.router.navigate(['course/add']);
  }

  removeEnrolledActivity() {
    this.router.navigate(['course/add']);
  }

  seeActivityScore() {
    this.router.navigate(['course/add']);
  }

}
