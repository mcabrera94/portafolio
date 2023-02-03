import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvSponsorLogoComponent } from './ev-sponsor-logo.component';

describe('EvSponsorLogoComponent', () => {
  let component: EvSponsorLogoComponent;
  let fixture: ComponentFixture<EvSponsorLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvSponsorLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvSponsorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
