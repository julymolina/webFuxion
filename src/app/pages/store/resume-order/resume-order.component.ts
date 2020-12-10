import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-resume-order',
  templateUrl: './resume-order.component.html',
  styleUrls: ['./resume-order.component.scss']
})
export class ResumeOrderComponent implements OnInit {

  constructor(private cart: CartService) { }

  get currentItem(){
    return this.cart.items[0];
  }

  ngOnInit(): void {
  }

  getTotal(){
    return this.cart.getTotal();
  }



}
