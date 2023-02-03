import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameServicesComponent } from './game-services.component';

describe('GameServicesComponent', () => {
  let component: GameServicesComponent;
  let fixture: ComponentFixture<GameServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
