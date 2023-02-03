import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-payment-testimonial',
  templateUrl: './payment-testimonial.component.html',
  styleUrls: ['./payment-testimonial.component.css'],
})
export class PaymentTestimonialComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
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
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1142: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
