import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvBlogComponent } from './ev-blog.component';

describe('EvBlogComponent', () => {
  let component: EvBlogComponent;
  let fixture: ComponentFixture<EvBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
