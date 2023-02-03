import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvCounterComponent } from './ev-counter.component';

describe('EvCounterComponent', () => {
  let component: EvCounterComponent;
  let fixture: ComponentFixture<EvCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
