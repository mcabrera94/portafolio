import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFaqComponent } from './payment-faq.component';

describe('PaymentFaqComponent', () => {
  let component: PaymentFaqComponent;
  let fixture: ComponentFixture<PaymentFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
