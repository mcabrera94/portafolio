import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
@Component({
  selector: 'app-hero-fifteen',
  templateUrl: './hero-fifteen.component.html',
  styleUrls: ['./hero-fifteen.component.css'],
})
export class HeroFifteenComponent implements OnInit {
  constructor() {}

  lightbox: any;
  ngOnInit() {
    //lightbox settings
    this.lightbox = GLightbox({
      href: 'https://www.youtube.com/watch?v=hAP2QF--2Dg',
      type: 'video',
      source: 'youtube',
      width: 800,
      autoplayVideos: true,
    });
  }
}
