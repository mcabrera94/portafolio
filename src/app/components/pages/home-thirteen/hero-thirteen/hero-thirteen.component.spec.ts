import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroThirteenComponent } from './hero-thirteen.component';

describe('HeroThirteenComponent', () => {
  let component: HeroThirteenComponent;
  let fixture: ComponentFixture<HeroThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
