import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-ev-testimonial',
  templateUrl: './ev-testimonial.component.html',
  styleUrls: ['./ev-testimonial.component.css'],
})
export class EvTestimonialComponent implements OnInit {
  constructor() {}

  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    pagination: {
      clickable: true,
      el: '.eve-pagination.swiper-pagination',
    },
  };

  ngOnInit(): void {}
}
