import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvCtaComponent } from './ev-cta.component';

describe('EvCtaComponent', () => {
  let component: EvCtaComponent;
  let fixture: ComponentFixture<EvCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
