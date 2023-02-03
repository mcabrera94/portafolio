import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTestimonialComponent } from './crypto-testimonial.component';

describe('CryptoTestimonialComponent', () => {
  let component: CryptoTestimonialComponent;
  let fixture: ComponentFixture<CryptoTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
