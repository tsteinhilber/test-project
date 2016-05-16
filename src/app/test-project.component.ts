import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component'

@Component({
  moduleId: module.id,
  selector: 'test-project-app',
  templateUrl: 'test-project.component.html',
  styleUrls: ['test-project.component.css'],
  directives: [PeopleComponent]
})
export class TestProjectAppComponent {
  title = 'test-project works!';
  subtitle = 'who knew?'
}
