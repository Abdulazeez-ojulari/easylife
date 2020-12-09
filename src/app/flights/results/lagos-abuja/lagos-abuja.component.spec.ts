import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LagosAbujaComponent } from './lagos-abuja.component';

describe('LagosAbujaComponent', () => {
  let component: LagosAbujaComponent;
  let fixture: ComponentFixture<LagosAbujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagosAbujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagosAbujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
