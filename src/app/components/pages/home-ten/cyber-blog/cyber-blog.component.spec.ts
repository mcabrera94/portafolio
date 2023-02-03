import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberBlogComponent } from './cyber-blog.component';

describe('CyberBlogComponent', () => {
  let component: CyberBlogComponent;
  let fixture: ComponentFixture<CyberBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
