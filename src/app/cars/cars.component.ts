import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  selectedTravel:FormControl = new FormControl();

    passengersvalue: string = 'adult';

  constructor() { }

  ngOnInit(): void {
  }

}
