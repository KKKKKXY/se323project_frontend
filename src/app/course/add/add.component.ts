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
    activityId: [null, Validators.compose([Validators.required,Validators.maxLength(6),Validators.minLength(6),Validators.pattern('[0-9]+')])],
    activityName: [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_]*$')])],
    semester:[null, Validators.required],
    academic:[null, Validators.required],
    participant:[null, Validators.compose([Validators.required,Validators.pattern('[0-9]+')])],
    credit:[null, Validators.compose([Validators.required,Validators.pattern('[0-9]+')])],
    lecturer: [null, Validators.required]
  });
  lecturerId: number;

  validation_messages = {
    'activityId': [
      { type: 'required', message: 'the activity id is <strong>required</strong>' },
      { type: 'maxlength', message: 'activity id exactly is 6' },
      { type: 'minlength', message: 'activity id exactly is 6' },
      { type: 'pattern', message: 'please enter number' }
    ],
    'activityName': [
      { type: 'required', message: 'the activity name is <strong>required</strong>' },
      { type: 'pattern', message: 'please enter letter or number' }
    ],
    'semester': [
      { type: 'required', message: 'the semester is <strong>required</strong>' }
    ],
    'academic': [
      { type: 'required', message: 'the academic is <strong>required</strong>' }
    ],
    'participant': [
      { type: 'required', message: 'the participant is <strong>required</strong>' },
      { type: 'pattern', message: 'please enter number' }
    ],
    'credit': [
      { type: 'required', message: 'the credit is <strong>required</strong>' },
      { type: 'pattern', message: 'please enter number' }
    ],
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