import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import gradeCourse from '../entity/gradeCourse';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  getActivityResult(): Observable<gradeCourse[]> {
    return this.http.get<gradeCourse[]>('assets/gradeResult.json');
  }
  constructor(private http: HttpClient) { }
}