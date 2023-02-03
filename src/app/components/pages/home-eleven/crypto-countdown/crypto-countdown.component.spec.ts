import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCountdownComponent } from './crypto-countdown.component';

describe('CryptoCountdownComponent', () => {
  let component: CryptoCountdownComponent;
  let fixture: ComponentFixture<CryptoCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
