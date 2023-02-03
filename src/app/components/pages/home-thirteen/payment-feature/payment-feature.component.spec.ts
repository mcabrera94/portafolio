import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFeatureComponent } from './payment-feature.component';

describe('PaymentFeatureComponent', () => {
  let component: PaymentFeatureComponent;
  let fixture: ComponentFixture<PaymentFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
