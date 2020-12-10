import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  constructor(private cart: CartService) {}

  ngOnInit(): void {}

  get currentItem(){
    return  this.cart.items[0];
  }

  aumentar() {
   this.currentItem.quantity++;
  }

  disminuir() {
    this.currentItem.quantity--;
  }

  getTotal() {
    return this.cart.getTotal();
  }
}
