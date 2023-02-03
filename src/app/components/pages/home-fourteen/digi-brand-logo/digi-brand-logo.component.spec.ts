import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiBrandLogoComponent } from './digi-brand-logo.component';

describe('DigiBrandLogoComponent', () => {
  let component: DigiBrandLogoComponent;
  let fixture: ComponentFixture<DigiBrandLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiBrandLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiBrandLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
