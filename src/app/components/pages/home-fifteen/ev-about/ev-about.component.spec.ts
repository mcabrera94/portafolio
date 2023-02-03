import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvAboutComponent } from './ev-about.component';

describe('EvAboutComponent', () => {
  let component: EvAboutComponent;
  let fixture: ComponentFixture<EvAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
