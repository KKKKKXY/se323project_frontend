import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import gradeCourse from '../entity/gradeCourse';

@Injectable({
  providedIn: 'root'
})
export class DeleteActivityService {

  getDeleteActivity(): Observable<gradeCourse[]> {
    return this.http.get<gradeCourse[]>('assets/course.json');
  }
  constructor(private http: HttpClient) { }
}