import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Course from 'src/app/entity/course';
import Lecturer from 'src/app/entity/lecturer';
import { Router } from '@angular/router';
import { CourseService} from 'src/app/service/course.service';
import { LecturerService } from 'src/app/service/lecturer.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class CourseAddComponent implements OnInit {

  addressForm = this.fb.group({
    courseId: [null, Validators.required],
    courseName: [null, Validators.required],
    content: [null, Validators.required],
    lecturer: [null, Validators.required]
  });
  lecturerId: number;

  validation_messages = {
    'courseId': [
      { type: 'required', message: 'course id is <strong>required</strong>' },
    ],
    'courseName': [
      { type: 'required', message: 'the course name is <strong>required</strong>' }
    ],
    'content': [
      { type: 'required', message: 'the course content is <strong>required</strong>' }
    ]
    ,
    'lecturer': [
      { type: 'required', message: 'the lecturer is <strong>required</strong>' },
    ]
  };
  hasUnitNumber = false;
  lecturers: Lecturer[] = [];

  constructor(private fb: FormBuilder, private lecturerService: LecturerService
    , private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.lecturerService.getLectures().subscribe(
      lecturers => {
        this.lecturers = lecturers;
      }
    );
  }

  onSubmit() {
    const model: Course = this.addressForm.value;
    model.lecturer = new Lecturer();
    model.lecturer.id = this.lecturerId;
    this.courseService.saveCourse(model).subscribe(
      course => {
        this.router.navigate(['course', 'list']);
      }
    )
  }
}
