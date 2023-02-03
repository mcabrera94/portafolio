import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTimelineComponent } from './crypto-timeline.component';

describe('CryptoTimelineComponent', () => {
  let component: CryptoTimelineComponent;
  let fixture: ComponentFixture<CryptoTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
