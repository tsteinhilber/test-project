import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import { PeopleComponent } from './people/people.component'
import { JobListComponent } from './job-list/job-list.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'

@Component({
  moduleId: module.id,
  selector: 'test-project-app',
  templateUrl: 'test-project.component.html',
  styleUrls: ['test-project.component.css'],
  directives: [ROUTER_DIRECTIVES, FooterComponent, HeaderComponent, JobListComponent, PeopleComponent],
  pipes: []
})

export class TestProjectAppComponent {
  
  title = 'test-project works!';
  
  constructor(public af: AngularFire, private titleService: Title) {
    this.titleService.setTitle( "Angular 2 (test-project)" );
  }
 
}