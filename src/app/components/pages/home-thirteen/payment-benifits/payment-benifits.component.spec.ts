import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBenifitsComponent } from './payment-benifits.component';

describe('PaymentBenifitsComponent', () => {
  let component: PaymentBenifitsComponent;
  let fixture: ComponentFixture<PaymentBenifitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentBenifitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBenifitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
