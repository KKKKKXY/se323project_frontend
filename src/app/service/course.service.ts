import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from '../entity/course';

@Injectable({
  providedIn: 'root'
})
export abstract class CourseService {

  abstract getCourses(): Observable<Course[]>;
  abstract getCourse(id: number): Observable<Course>;
  abstract saveCourse(course: Course): Observable<Course>;

}
