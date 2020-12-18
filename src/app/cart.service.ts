import { _ParseAST } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { sumBy } from 'lodash-es';

interface IProduct {
  id: string;
  name: string;
  img: string;
  quantity: number;
  price: number;
  sku: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  veramas: IProduct = {
    id: 'VERAMAS',
    name: 'Vera +',
    img: '/assets/img/veramasstore.jpg',
    price: 55,
    quantity: 1,
    sku: 145156,
  };

  prunex: IProduct = {
    id: 'PRUNEX1',
    name: 'PRUNEX1',
    img: '/assets/img/prunexstore.jpg',
    price: 29,
    quantity: 1,
    sku: 142325,
  };

  items: IProduct[] = [];
  constructor() {}
  add(product: IProduct) {
    this.items.push(product);
  }

  addPrunex() {
    let found = this.items.find((value) => {
      return value.id == 'PRUNEX1';
    });
    if (!found) {
      this.add(this.prunex);
    }
  }

  addVeramas() {
    let found = this.items.find((value) => {
      return value.id == 'VERAMAS';
    });
    if (!found) {
      this.add(this.veramas);
    }
  }

  getTotal() {
    return sumBy(this.items, (item) => {
      return item.quantity * item.price;
    });
  }
}
