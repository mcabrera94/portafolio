import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberClientBrandComponent } from './cyber-client-brand.component';

describe('CyberClientBrandComponent', () => {
  let component: CyberClientBrandComponent;
  let fixture: ComponentFixture<CyberClientBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberClientBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberClientBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
