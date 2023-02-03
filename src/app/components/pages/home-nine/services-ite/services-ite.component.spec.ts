import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIteComponent } from './services-ite.component';

describe('ServicesIteComponent', () => {
  let component: ServicesIteComponent;
  let fixture: ComponentFixture<ServicesIteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesIteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesIteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
