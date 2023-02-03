import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
@Component({
  selector: 'app-hero-nine',
  templateUrl: './hero-nine.component.html',
  styleUrls: ['./hero-nine.component.css'],
})
export class HeroNineComponent implements OnInit {
  constructor() {}

  lightbox: any;
  ngOnInit(): void {
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
