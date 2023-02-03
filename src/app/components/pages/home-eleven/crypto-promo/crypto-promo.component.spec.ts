import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPromoComponent } from './crypto-promo.component';

describe('CryptoPromoComponent', () => {
  let component: CryptoPromoComponent;
  let fixture: ComponentFixture<CryptoPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
