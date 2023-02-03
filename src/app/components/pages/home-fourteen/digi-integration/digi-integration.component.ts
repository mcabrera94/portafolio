import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-digi-integration',
  templateUrl: './digi-integration.component.html',
  styleUrls: ['./digi-integration.component.css'],
})
export class DigiIntegrationComponent implements OnInit {
  constructor() {}
  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.digi-nav-control .swiper-button-next',
      prevEl: '.digi-nav-control .swiper-button-prev',
    },
  };
  ngOnInit(): void {}
}
