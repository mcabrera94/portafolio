import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberTestimonialComponent } from './cyber-testimonial.component';

describe('CyberTestimonialComponent', () => {
  let component: CyberTestimonialComponent;
  let fixture: ComponentFixture<CyberTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
