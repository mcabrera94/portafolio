import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCtaComponent } from './crypto-cta.component';

describe('CryptoCtaComponent', () => {
  let component: CryptoCtaComponent;
  let fixture: ComponentFixture<CryptoCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
