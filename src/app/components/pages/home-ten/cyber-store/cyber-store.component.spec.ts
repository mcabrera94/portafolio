import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberStoreComponent } from './cyber-store.component';

describe('CyberStoreComponent', () => {
  let component: CyberStoreComponent;
  let fixture: ComponentFixture<CyberStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
