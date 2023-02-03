import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-cyber-blog',
  templateUrl: './cyber-blog.component.html',
  styleUrls: ['./cyber-blog.component.css'],
})
export class CyberBlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  };
}
