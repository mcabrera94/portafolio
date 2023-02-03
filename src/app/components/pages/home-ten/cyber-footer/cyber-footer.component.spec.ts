import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberFooterComponent } from './cyber-footer.component';

describe('CyberFooterComponent', () => {
  let component: CyberFooterComponent;
  let fixture: ComponentFixture<CyberFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
