import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberPriceComponent } from './cyber-price.component';

describe('CyberPriceComponent', () => {
  let component: CyberPriceComponent;
  let fixture: ComponentFixture<CyberPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
