import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLogoComponent } from './payment-logo.component';

describe('PaymentLogoComponent', () => {
  let component: PaymentLogoComponent;
  let fixture: ComponentFixture<PaymentLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
