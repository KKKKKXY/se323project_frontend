import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Course from '../entity/course';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseFileImplService extends CourseService{

  constructor(private http: HttpClient) {
    super();
   }

   getCourses(): Observable<Course[]>{
     return this.http.get<Course[]>('assets/course.json');
   }

   getCourse(id:number): Observable<Course>{
     return this.http.get<Course[]>('assets/course.json')
     .pipe(map(courses =>{
       const output: Course = (courses as Course[]).find(course => course.id === +id);
       return output;
     }))
   }

   saveCourse(course: Course): Observable<Course>{
    throw new Error("Method not implemented.");
   }
}
