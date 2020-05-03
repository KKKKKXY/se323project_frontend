import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from './student-service';
import { Observable } from '../../../node_modules/rxjs';
import Student from '../entity/student';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class StudentsFileImplService extends StudentService {
  enrollActivity(activity: Observable<import("../entity/course").default>): Observable<import("../entity/course").default> {
    throw new Error("Method not implemented.");
  }



  enrolledActivity(id: number): Observable<import("../entity/course").default[]> {
    throw new Error("Method not implemented.");
  }
  saveStudent(student: Student): Observable<Student> {
    throw new Error("Method not implemented.");
  }
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student[]>('assets/people.json')
      .pipe(map(students => {
        const output: Student = (students as Student[]).find(student => student.id === +id);
        return output;
      }));

  }

  constructor(private http: HttpClient) {
    super();
  }
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('assets/people.json');
  }
}
