import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import { PeopleComponent } from './people/people.component'
import { JobsComponent } from './jobs/jobs.component'

@Component({
  moduleId: module.id,
  selector: 'test-project-app',
  templateUrl: 'test-project.component.html',
  styleUrls: ['test-project.component.css'],
  directives: [ROUTER_DIRECTIVES, JobsComponent, PeopleComponent],
  pipes: []
})

export class TestProjectAppComponent {
  
  title = 'test-project works!';
  
  constructor(public af: AngularFire) {

  }
 
}