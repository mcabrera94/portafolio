import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvPriceComponent } from './ev-price.component';

describe('EvPriceComponent', () => {
  let component: EvPriceComponent;
  let fixture: ComponentFixture<EvPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
