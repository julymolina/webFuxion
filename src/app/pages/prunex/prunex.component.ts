import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-prunex',
  templateUrl: './prunex.component.html',
  styleUrls: ['./prunex.component.scss']
})
export class PrunexComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cart: CartService) {}

  private fragment: string;

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
      const element = document.querySelector('#' + fragment);
      if (element) element.scrollIntoView();
    });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {}
  }

  addPrunexToCart(){
    this.cart.addPrunex()
  }

}
