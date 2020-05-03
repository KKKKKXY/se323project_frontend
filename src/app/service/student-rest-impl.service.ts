import { Injectable } from '@angular/core';
import { StudentService } from './student-service';
import { Observable } from 'rxjs';
import Student from '../entity/student';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Course from '../entity/course';
import Enroll from '../entity/enroll';

@Injectable({
  providedIn: 'root'
})
export class StudentRestImplService extends StudentService {

  public enroll:Enroll;
  constructor(private http: HttpClient) {
    super();
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(environment.studentApi);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(environment.studentApi + '/' + id);
  }

  saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(environment.studentApi, student);
  }

  // enrollActivity(enroll:Enroll): Observable<Student> {
  //   return this.http.post<Student>(environment.enrollActivityApi,enroll);
  // }
  enrollActivity(activity:Observable<Course>): Observable<Course> {
    throw this.http.post<Student>(environment.enrollActivityApi,activity);
  }

  enrolledActivity(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(environment.enrollActivityApi + '/' + id);
  }

}
