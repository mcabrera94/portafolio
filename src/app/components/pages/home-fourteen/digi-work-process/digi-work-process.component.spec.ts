import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiWorkProcessComponent } from './digi-work-process.component';

describe('DigiWorkProcessComponent', () => {
  let component: DigiWorkProcessComponent;
  let fixture: ComponentFixture<DigiWorkProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiWorkProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiWorkProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
