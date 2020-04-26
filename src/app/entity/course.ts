import Lecturer from './lecturer';

export default class Course {
    id: number;
    activityId: string;
    activityName: string;
    semester: string;
    academic: string;
    participant: string;
    credit: string;
    lecturer:Lecturer;
  }