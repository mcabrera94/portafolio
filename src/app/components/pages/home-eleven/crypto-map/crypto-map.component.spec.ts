import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoMapComponent } from './crypto-map.component';

describe('CryptoMapComponent', () => {
  let component: CryptoMapComponent;
  let fixture: ComponentFixture<CryptoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
