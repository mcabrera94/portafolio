import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-payment-logo',
  templateUrl: './payment-logo.component.html',
  styleUrls: ['./payment-logo.component.css'],
})
export class PaymentLogoComponent implements OnInit {
  constructor() {}
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 5,
      },
    },
  };

  ngOnInit(): void {}
}
