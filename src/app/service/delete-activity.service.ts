import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from '../entity/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteActivityService {

  getDeleteActivity(): Observable<Course[]> {
    return this.http.get<Course[]>('assets/course.json');
  }
  constructor(private http: HttpClient) { }
}