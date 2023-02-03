import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTestimonialComponent } from './payment-testimonial.component';

describe('PaymentTestimonialComponent', () => {
  let component: PaymentTestimonialComponent;
  let fixture: ComponentFixture<PaymentTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
