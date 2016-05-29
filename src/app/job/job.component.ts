import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-job',
  templateUrl: 'job.component.html',
  styleUrls: ['job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job;
  
  constructor() {}

  ngOnInit() {
  }

}
