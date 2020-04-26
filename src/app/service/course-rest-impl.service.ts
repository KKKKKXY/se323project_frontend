import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from './course.service';
import { Observable } from 'rxjs';
import Course from '../entity/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseRestImplService extends CourseService{

  constructor(private http: HttpClient) {
    super();
  }
  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(environment.courseApi);
  }

  getCourse(id:number): Observable<Course> {
    return this.http.get<Course>(environment.courseApi+"/"+id);
  }

  saveCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(environment.courseApi,course);
  }
}
