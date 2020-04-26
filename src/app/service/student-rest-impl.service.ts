import { Injectable } from '@angular/core';
import { StudentService } from './student-service';
import { Observable } from 'rxjs';
import Student from '../entity/student';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentRestImplService extends StudentService {

  constructor(private http: HttpClient) {
    super();
   }

   getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(environment.studentApi);
   }

   getStudent(id: number): Observable<Student>{
     return this.http.get<Student>(environment.studentApi + '/'+ id);
   }
   saveStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(environment.studentApi, student);
      }
    
}
