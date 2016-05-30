import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-job',
  templateUrl: 'job.component.html',
  styleUrls: ['job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job;
  @Output() delete = new EventEmitter();
  
  constructor() {}

  ngOnInit() {
  }
  
  removeMe(job){
    this.delete.emit(job);
    // console.log(this);
  }

}
