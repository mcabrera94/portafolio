import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiWhyChooseComponent } from './digi-why-choose.component';

describe('DigiWhyChooseComponent', () => {
  let component: DigiWhyChooseComponent;
  let fixture: ComponentFixture<DigiWhyChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiWhyChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiWhyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
