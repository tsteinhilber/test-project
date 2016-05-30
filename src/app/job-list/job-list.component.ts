import { Component, OnInit, Input } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
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

  private _jobList: FirebaseListObservable<any[]>;
  
  constructor(private af: AngularFire) {
    this._jobList = af.list('/messages');
  }

  ngOnInit() {
  }
  
  onClick(obj){
    console.log("clicked " + obj.text);
  }
  
  removeMe(item: any){
    this._jobList.remove(item);
  }
  
  myValueChange(event) {
    console.log(event);
    this._jobList.remove(event);
  }

}
