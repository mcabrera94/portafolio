import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiServicesComponent } from './digi-services.component';

describe('DigiServicesComponent', () => {
  let component: DigiServicesComponent;
  let fixture: ComponentFixture<DigiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
