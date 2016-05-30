import { Component, OnInit } from '@angular/core';
import { Control, ControlGroup, NgClass, Validators } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-job-form',
  templateUrl: 'job-form.component.html',
  styleUrls: ['job-form.component.css'],
  directives: [NgClass]
})
export class JobFormComponent implements OnInit {
  
  form;

  private _jobList: FirebaseListObservable<any[]>;
  private _peopleList: FirebaseListObservable<any[]>;
  
  constructor(private _af: AngularFire) {
        this._jobList = _af.database.list('/jobs');
        this._peopleList = _af.database.list('/people');
    }

  ngOnInit() {
    this.buildForm();
  }
  
  buildForm():void {
    this.form = new ControlGroup({
      'name' : new Control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      'category' : new Control('', Validators.required),
      'rep' : new Control('', Validators.required)
    });
  }
  
  addNew(item: any){
      this._jobList.push(item);
      console.log(item);
      this.form.name = "";
      this.form.category = "";
      this.form.rep = "";
      
  }

  updateMe(item: any){
      this._jobList.update(item, { value: 5});
  }

  removeMe(item: any){
      this._jobList.remove(item);
  }

}
