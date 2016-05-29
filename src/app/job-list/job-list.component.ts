import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-job-list',
  templateUrl: 'job-list.component.html',
  styleUrls: ['job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Observable<any[]>;
  
  constructor(public af: AngularFire) {
    this.jobs = af.list('/messages');
  }

  ngOnInit() {
  }

}
