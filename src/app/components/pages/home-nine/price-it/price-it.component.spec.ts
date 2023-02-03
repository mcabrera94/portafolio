import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceItComponent } from './price-it.component';

describe('PriceItComponent', () => {
  let component: PriceItComponent;
  let fixture: ComponentFixture<PriceItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
