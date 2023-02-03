import { Component, OnInit } from '@angular/core';
// import { Navigation, SwiperOptions } from 'swiper';

// import Swiper core and required modules
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-testimonial-it',
  templateUrl: './testimonial-it.component.html',
  styleUrls: ['./testimonial-it.component.css'],
})
export class TestimonialItComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  config: SwiperOptions = {
    freeMode: false,
    slidesPerView: 3,
    speed: 700,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1142: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-nav-control .swiper-button-next',
      prevEl: '.swiper-nav-control .swiper-button-prev',
    },
  };
}
