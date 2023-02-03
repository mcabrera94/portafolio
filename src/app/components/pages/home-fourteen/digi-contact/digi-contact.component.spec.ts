import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiContactComponent } from './digi-contact.component';

describe('DigiContactComponent', () => {
  let component: DigiContactComponent;
  let fixture: ComponentFixture<DigiContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
