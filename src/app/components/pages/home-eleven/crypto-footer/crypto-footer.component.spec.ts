import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoFooterComponent } from './crypto-footer.component';

describe('CryptoFooterComponent', () => {
  let component: CryptoFooterComponent;
  let fixture: ComponentFixture<CryptoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
