import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  isDay1 = false;
  isDay2 = false;
  isDay3 = false;
  isDay4 = false;
  isDay5 = false;

constructor() { }

ngOnInit(): void {
}

onDay1() {
  this.isDay1 = !this.isDay1;
}

onDay2() {
  this.isDay2 = !this.isDay2;
}

onDay3() {
  this.isDay3 = !this.isDay3;
}

onDay4() {
  this.isDay4 = !this.isDay4;
}

onDay5() {
  this.isDay5 = !this.isDay5;
}

}
