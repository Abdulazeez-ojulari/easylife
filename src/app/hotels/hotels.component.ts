import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  selectedTravel:FormControl = new FormControl();

    passengersvalue: string = 'adult';

  constructor() { }

  ngOnInit(): void {
  }

}
