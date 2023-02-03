import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFifteenComponent } from './hero-fifteen.component';

describe('HeroFifteenComponent', () => {
  let component: HeroFifteenComponent;
  let fixture: ComponentFixture<HeroFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
