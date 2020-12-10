import { _ParseAST } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { sumBy } from 'lodash-es';

interface IProduct {
  id: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  epiProduct: IProduct = {
    id: 'VERAMAS',
    price: 55,
    quantity: 1,
  };

  items: IProduct[] = [this.epiProduct];
  constructor() {}
  add(product: IProduct) {
    this.items.push(product);
  }

  getTotal() {
    return sumBy(this.items, (item) => {
      return item.quantity * item.price;
    });
  }
}
