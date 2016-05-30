import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-job-form',
  templateUrl: 'job-form.component.html',
  styleUrls: ['job-form.component.css']
})
export class JobFormComponent implements OnInit {

  private _jobList: FirebaseListObservable<any[]>;
  
  constructor(private _af: AngularFire) {
        this._jobList = _af.database.list('/messages');
    }

  ngOnInit() {
  }
  
  addNew(item: any){
      this._jobList.push(item);
      console.log(item);
  }

  updateMe(item: any){
      this._jobList.update(item, { value: 5});
  }

  removeMe(item: any){
      this._jobList.remove(item);
  }

}
