import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotels-available',
  templateUrl: './hotels-available.component.html',
  styleUrls: ['./hotels-available.component.scss']
})
export class HotelsAvailableComponent implements OnInit {

  selectedTravel:FormControl = new FormControl();

    passengersvalue: string = 'adult';

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
