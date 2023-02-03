import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-digi-brand-logo',
  templateUrl: './digi-brand-logo.component.html',
  styleUrls: ['./digi-brand-logo.component.css'],
})
export class DigiBrandLogoComponent implements OnInit {
  constructor() {}

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 6,
      },
    },
  };

  ngOnInit(): void {}
}
