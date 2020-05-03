import { Component, OnInit } from '@angular/core';
import Course from '../entity/course';
import { DeleteActivityService } from '../service/delete-activity.service';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.css']
})
export class DeleteListComponent implements OnInit {

  activities: Course[];

  constructor(private deleteActivityService:DeleteActivityService) { }

  ngOnInit() {
    this.deleteActivityService.getDeleteActivity().subscribe(
      activities => {
        this.activities = activities;
      }
    );
  }

}
