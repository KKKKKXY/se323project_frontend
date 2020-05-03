import Student from './student';
import Course from './course';
import { Observable } from 'rxjs';

export default class Enroll {
    id: number;
    student: Observable<Student>;
    activity: Observable<Course>;
}
