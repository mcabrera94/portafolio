import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-cyber-client-brand',
  templateUrl: './cyber-client-brand.component.html',
  styleUrls: ['./cyber-client-brand.component.css'],
})
export class CyberClientBrandComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  config: SwiperOptions = {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      991: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  };
}
