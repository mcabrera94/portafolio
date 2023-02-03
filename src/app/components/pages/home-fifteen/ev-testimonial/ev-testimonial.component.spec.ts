import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvTestimonialComponent } from './ev-testimonial.component';

describe('EvTestimonialComponent', () => {
  let component: EvTestimonialComponent;
  let fixture: ComponentFixture<EvTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
