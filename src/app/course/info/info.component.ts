import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import Course from 'src/app/entity/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: Course;
  constructor(private route: ActivatedRoute, private courseService:CourseService) { }
  ngOnInit() {
    this.course = {
      'id': -1,
      'activityId': '',
      'activityName': '',
      'semester': '',
      'academic':'',
      'participant':'',
      'credit':'',
      'lecturer': null
    };
    this.route.params
    .subscribe((params: Params) => {
      this.courseService.getCourse(+params['id'])
        .subscribe((inputCourse: Course) => this.course = inputCourse);
    });
  }
}