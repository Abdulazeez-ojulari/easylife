import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  selectedTravel:FormControl = new FormControl();

  travelvalue: string ='return';
  classvalue: string = 'economy';
  passengersvalue: string = 'adult';

  constructor() { }

  ngOnInit(): void {
  }

}
