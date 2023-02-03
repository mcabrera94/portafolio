import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFourteenComponent } from './hero-fourteen.component';

describe('HeroFourteenComponent', () => {
  let component: HeroFourteenComponent;
  let fixture: ComponentFixture<HeroFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
