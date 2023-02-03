import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-hero-ten',
  templateUrl: './hero-ten.component.html',
  styleUrls: ['./hero-ten.component.css'],
})
export class HeroTenComponent implements OnInit {
  constructor() {}
  lightbox: any;
  ngOnInit(): void {
    this.lightbox = GLightbox({
      href: 'https://www.youtube.com/watch?v=hAP2QF--2Dg',
      type: 'video',
      source: 'youtube',
      width: 800,
      autoplayVideos: true,
    });
  }
}
