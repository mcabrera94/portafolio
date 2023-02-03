import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberFaqComponent } from './cyber-faq.component';

describe('CyberFaqComponent', () => {
  let component: CyberFaqComponent;
  let fixture: ComponentFixture<CyberFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
