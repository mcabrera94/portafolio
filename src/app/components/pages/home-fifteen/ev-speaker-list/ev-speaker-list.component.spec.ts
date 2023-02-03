import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvSpeakerListComponent } from './ev-speaker-list.component';

describe('EvSpeakerListComponent', () => {
  let component: EvSpeakerListComponent;
  let fixture: ComponentFixture<EvSpeakerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvSpeakerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvSpeakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
