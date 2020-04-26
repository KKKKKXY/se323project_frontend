import { Injectable } from '@angular/core';
import { LecturerService } from './lecturer.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Lecturer from '../entity/lecturer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LecturerRestImplService extends LecturerService{
  constructor(private http: HttpClient) {
    super();
  }
  getLectures(): Observable<Lecturer[]>{
    return this.http.get<Lecturer[]>(environment.lecturerApi);
  }
}
