import { Observable } from '../../../node_modules/rxjs';
import Student from '../entity/student';
import Course from '../entity/course';
import Enroll from '../entity/enroll';

export abstract class StudentService {
     abstract getStudents(): Observable<Student[]>;
     abstract getStudent(id: number): Observable<Student>;
     abstract saveStudent(student: Student): Observable<Student>;
     abstract enrollActivity(activity:Observable<Course>):Observable<Course>;
     abstract enrolledActivity(id:number):Observable<Course[]>;
}