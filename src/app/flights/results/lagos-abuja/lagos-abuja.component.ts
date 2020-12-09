import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lagos-abuja',
  templateUrl: './lagos-abuja.component.html',
  styleUrls: ['./lagos-abuja.component.scss']
})
export class LagosAbujaComponent implements OnInit {

  selectedTravel:FormControl = new FormControl();

  travelvalue: string ='return';
  classvalue: string = 'economy';
  passengersvalue: string = 'adult';

  
   isDay1 = false;
    isDay2 = false;
    isDay3 = false;
    isDay4 = false;
    isDay5 = false;
    isDay6 = false;

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

  onDay6() {
    this.isDay6 = !this.isDay6;
  }

}
