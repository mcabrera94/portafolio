import { Component, OnInit } from '@angular/core';

import GLightbox from 'glightbox';
@Component({
  selector: 'app-cyber-video-promo',
  templateUrl: './cyber-video-promo.component.html',
  styleUrls: ['./cyber-video-promo.component.css'],
})
export class CyberVideoPromoComponent implements OnInit {
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
