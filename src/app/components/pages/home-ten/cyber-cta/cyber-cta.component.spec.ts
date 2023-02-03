import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberCtaComponent } from './cyber-cta.component';

describe('CyberCtaComponent', () => {
  let component: CyberCtaComponent;
  let fixture: ComponentFixture<CyberCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
