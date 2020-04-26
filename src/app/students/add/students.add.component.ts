import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { FileUploadService } from 'src/app/service/file-upload.service';
import { Router } from '@angular/router';
import Student from '../../entity/student';
import { StudentService } from 'src/app/service/student-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-students-add',
  templateUrl: './students.add.component.html',
  styleUrls: ['./students.add.component.css']
})
export class StudentsAddComponent implements OnInit {
  uploadEndPoint: string;
  uploadedUrl: string;
  ngOnInit(): void {
    this.uploadEndPoint = environment.uploadApi;
  }
  progress: number;
  students: Student[];
  form = this.fb.group({
    id: [''],
    studentId: [null, Validators.compose([Validators.required, Validators.maxLength(13)])],
    name: [null, Validators.required],
    surname: [null, Validators.required],
    gpa: [''],
    image: [''],
    featured: [''],
    penAmount: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
    description: ['']
  });

  validation_messages = {
    'studentId': [
      { type: 'required', message: 'student id is required' },
      { type: 'maxlength', message: 'student id is too long' }
    ],
    'name': [
      { type: 'required', message: 'the name is required' }
    ],
    'surname': [
      { type: 'required', message: 'the surname is required' }
    ]
    ,
    'penAmount': [
      { type: 'required', message: 'the penAmount is required' },
      { type: 'pattern', message: 'please enter number' }
    ]
    ,
    'image': []
    ,
    'description': []
  };



  get diagnostic() {
    return JSON.stringify(this.form.value);
  }

  upQuantity(student: Student) {
    this.form.patchValue({
      penAmount: +this.form.value['penAmount'] + 1
    });

  }

  downQuantity(student: Student) {
    if (+this.form.value['penAmount'] > 0) {
      this.form.patchValue({
        penAmount: +this.form.value['penAmount'] - 1
      });
    }
  }


  submit() {
    this.studentService.saveStudent(this.form.value)
      .subscribe((student) => {
        this.router.navigate(['/detail/', student.id]);
      }, (error) => {
        alert('could not save value');
      });
  }

  // onUploadClicked(event){
  // console.log(typeof(event));
  // console.log(event)
  onUploadClicked(files?: FileList) {
    console.log(typeof (files));
    console.log(files.item(0));
    const uploadedFile = files.item(0);
    this.progress = 0;
    this.fileUploadService.uploadFile(uploadedFile)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            this.uploadedUrl = event.body;
            this.form.patchValue({
              image: this.uploadedUrl
            });
            this.form.get('image').updateValueAndValidity();
            setTimeout(() => {
              this.progress = 0;
            }, 1500);
        }
      });
  }
  onSelectedFilesChanged(files?: FileList) {

  }

  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router,
    private fileUploadService: FileUploadService) {

  }
}
