import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-jobs',
  templateUrl: 'jobs.component.html',
  styleUrls: ['jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Observable<any[]>;
  
  constructor(public af: AngularFire) {
    this.jobs = af.list('/messages');
  }

  ngOnInit() {
  }

}
