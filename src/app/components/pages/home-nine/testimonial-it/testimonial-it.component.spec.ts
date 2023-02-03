import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialItComponent } from './testimonial-it.component';

describe('TestimonialItComponent', () => {
  let component: TestimonialItComponent;
  let fixture: ComponentFixture<TestimonialItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
