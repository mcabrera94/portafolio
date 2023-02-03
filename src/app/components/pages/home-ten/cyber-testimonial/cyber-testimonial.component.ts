import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-cyber-testimonial',
  templateUrl: './cyber-testimonial.component.html',
  styleUrls: ['./cyber-testimonial.component.css'],
})
export class CyberTestimonialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  config: SwiperOptions = {
    slidesPerView: 1,
    speed: 700,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
    },
  };
}
