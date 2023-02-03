import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() dark: boolean = false;
  @Input() sticky: boolean = false;
  @Input() absolute: boolean = false;

  constructor(private router : Router) {}

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit(): void {}

  /*goHome(){
    this.router.navigate(['/promo/'], { queryParams: { destination: 'containerpromo' }});
  }*/

  ScrollIntoView(elem: string) {
    console.log(elem);

    
    //document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
    const element = window.document.querySelector(elem);
        if (element != null){
          console.log(element);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
  }
}
