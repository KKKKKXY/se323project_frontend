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
    this.router.navigate(['/enrollActivity']);
  }

  seeActivityList() {
    this.router.navigate(['/enrollActivity']);
  }

  removeEnrolledActivity() {
    this.router.navigate(['/enrolledActivity']);
  }

  seeActivityScore() {
    this.router.navigate(['/deleteActivity']);
  }

}
