import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-hero-twelve',
  templateUrl: './hero-twelve.component.html',
  styleUrls: ['./hero-twelve.component.css'],
})
export class HeroTwelveComponent implements OnInit {
  constructor() {}

  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2000,
    },
  };

  ngOnInit(): void {}
}
