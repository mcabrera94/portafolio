import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAppCtaComponent } from './crypto-app-cta.component';

describe('CryptoAppCtaComponent', () => {
  let component: CryptoAppCtaComponent;
  let fixture: ComponentFixture<CryptoAppCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoAppCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoAppCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
