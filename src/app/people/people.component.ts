import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
})

export class PeopleComponent implements OnInit {
 
 people: Observable<any[]>;
 
 constructor(public af:AngularFire) {
   this.people = af.list("/people");
  }

  ngOnInit() {

  }
  
  onSelect(person){
    console.log(person);
    // alert(person.name_first);
  }

}
