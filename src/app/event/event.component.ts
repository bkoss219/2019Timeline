import { Component, OnInit } from '@angular/core';
import { EVENTS } from './event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  makeEvents(){
    console.log("thisWorked");
  }

  constructor() { }

  ngOnInit() {
  }

  


}


