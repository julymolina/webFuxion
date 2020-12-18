import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit(): void {}

  get currentItem(){
    return  this.cart.items[0];
  }

  aumentar() {
   this.currentItem.quantity++;
  }

  disminuir() {
    this.currentItem.quantity = Math.max(1,this.currentItem.quantity-1);

  }

  getTotal() {
    return this.cart.getTotal();
  }
}
