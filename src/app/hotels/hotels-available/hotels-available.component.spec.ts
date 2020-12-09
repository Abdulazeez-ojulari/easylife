import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsAvailableComponent } from './hotels-available.component';

describe('HotelsAvailableComponent', () => {
  let component: HotelsAvailableComponent;
  let fixture: ComponentFixture<HotelsAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
