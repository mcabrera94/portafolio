import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiIntegrationComponent } from './digi-integration.component';

describe('DigiIntegrationComponent', () => {
  let component: DigiIntegrationComponent;
  let fixture: ComponentFixture<DigiIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
