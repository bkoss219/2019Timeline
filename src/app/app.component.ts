import { Component } from '@angular/core';
import { EVENTS } from './event/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Timeline';

  dispEvents = EVENTS;
  selectedEvent:Event;

  isCollapsed:boolean;

  order:string = "year";

  onSelect(e:Event){
    this.selectedEvent= e;
  }

  ngOnInit(){
    this.isCollapsed = true;
  }

  ngAfterViewInit() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  toggleAccordian(event, index) {
    var element = event.target;
    element.classList.toggle("active");
    if(this.dispEvents[index].isActive) {
      this.dispEvents[index].isActive = false;
    } else {
      this.dispEvents[index].isActive = true;
    }      
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

orderToType(){
  this.order = "type";
}

orderToYear(){
  this.order = "year";
}

  
}