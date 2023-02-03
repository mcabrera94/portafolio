import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutItComponent } from './about-it.component';

describe('AboutItComponent', () => {
  let component: AboutItComponent;
  let fixture: ComponentFixture<AboutItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
