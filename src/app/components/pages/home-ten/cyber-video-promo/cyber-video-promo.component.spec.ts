import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberVideoPromoComponent } from './cyber-video-promo.component';

describe('CyberVideoPromoComponent', () => {
  let component: CyberVideoPromoComponent;
  let fixture: ComponentFixture<CyberVideoPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberVideoPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberVideoPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
