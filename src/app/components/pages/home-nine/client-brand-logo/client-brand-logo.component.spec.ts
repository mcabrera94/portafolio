import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBrandLogoComponent } from './client-brand-logo.component';

describe('ClientBrandLogoComponent', () => {
  let component: ClientBrandLogoComponent;
  let fixture: ComponentFixture<ClientBrandLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBrandLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBrandLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
