import { Component, OnInit, Input } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {JobComponent} from '../job/job.component';

@Component({
  moduleId: module.id,
  selector: 'app-job-list',
  directives: [JobComponent],
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
  
  onClick(obj){
    console.log("clicked " + obj.text);
  }

}