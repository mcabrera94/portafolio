import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvSessionComponent } from './ev-session.component';

describe('EvSessionComponent', () => {
  let component: EvSessionComponent;
  let fixture: ComponentFixture<EvSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
