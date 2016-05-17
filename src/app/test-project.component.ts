import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import { PeopleComponent } from './people/people.component'

@Component({
  moduleId: module.id,
  selector: 'test-project-app',
  templateUrl: 'test-project.component.html',
  styleUrls: ['test-project.component.css'],
  directives: [ROUTER_DIRECTIVES, PeopleComponent],
  pipes: []
})

export class TestProjectAppComponent {
  
  title = 'test-project works!';
  subtitle = 'who knew?'
  
  constructor(public af: AngularFire) {

  }
 
}