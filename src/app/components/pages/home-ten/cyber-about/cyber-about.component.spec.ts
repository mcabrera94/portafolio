import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberAboutComponent } from './cyber-about.component';

describe('CyberAboutComponent', () => {
  let component: CyberAboutComponent;
  let fixture: ComponentFixture<CyberAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
