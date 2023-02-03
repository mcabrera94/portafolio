import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiBlogComponent } from './digi-blog.component';

describe('DigiBlogComponent', () => {
  let component: DigiBlogComponent;
  let fixture: ComponentFixture<DigiBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
