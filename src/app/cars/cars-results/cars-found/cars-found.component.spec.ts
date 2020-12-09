import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFoundComponent } from './cars-found.component';

describe('CarsFoundComponent', () => {
  let component: CarsFoundComponent;
  let fixture: ComponentFixture<CarsFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
