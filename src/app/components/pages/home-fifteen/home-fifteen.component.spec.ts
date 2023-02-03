import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFifteenComponent } from './home-fifteen.component';

describe('HomeFifteenComponent', () => {
  let component: HomeFifteenComponent;
  let fixture: ComponentFixture<HomeFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
