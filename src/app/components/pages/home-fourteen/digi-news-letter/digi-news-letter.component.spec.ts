import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiNewsLetterComponent } from './digi-news-letter.component';

describe('DigiNewsLetterComponent', () => {
  let component: DigiNewsLetterComponent;
  let fixture: ComponentFixture<DigiNewsLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiNewsLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiNewsLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
