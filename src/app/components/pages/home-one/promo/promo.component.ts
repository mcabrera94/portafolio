import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  destination: any;

  constructor(private router : Router,
              private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.queryParams
      .subscribe(params => {
        this.destination = params['destination'];
        const element = window.document.querySelector('containerpromo');
        if (element != null){
          console.log(element);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    );
  }

}
