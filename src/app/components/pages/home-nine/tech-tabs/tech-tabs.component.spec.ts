import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTabsComponent } from './tech-tabs.component';

describe('TechTabsComponent', () => {
  let component: TechTabsComponent;
  let fixture: ComponentFixture<TechTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
