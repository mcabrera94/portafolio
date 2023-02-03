import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTeamComponent } from './crypto-team.component';

describe('CryptoTeamComponent', () => {
  let component: CryptoTeamComponent;
  let fixture: ComponentFixture<CryptoTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
