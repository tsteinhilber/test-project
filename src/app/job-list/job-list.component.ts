import { Component, OnInit, Input } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {JobComponent} from '../job/job.component';
import {JobFormComponent} from '../job-form/job-form.component';

@Component({
  moduleId: module.id,
  selector: 'app-job-list',
  directives: [JobComponent, JobFormComponent],
  templateUrl: 'job-list.component.html',
  styleUrls: ['job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobList: Observable<any[]>;
  
  constructor(af: AngularFire) {
    this.jobList = af.list('/messages');
  }

  ngOnInit() {
  }
  
  onClick(obj){
    console.log("clicked " + obj.text);
  }

}
