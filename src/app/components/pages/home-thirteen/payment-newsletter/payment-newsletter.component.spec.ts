import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNewsletterComponent } from './payment-newsletter.component';

describe('PaymentNewsletterComponent', () => {
  let component: PaymentNewsletterComponent;
  let fixture: ComponentFixture<PaymentNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
