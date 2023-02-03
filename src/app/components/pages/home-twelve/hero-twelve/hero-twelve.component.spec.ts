import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTwelveComponent } from './hero-twelve.component';

describe('HeroTwelveComponent', () => {
  let component: HeroTwelveComponent;
  let fixture: ComponentFixture<HeroTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
