import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss'],
})
export class DeliveryAddressComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  complete() {
    alert('Gracias, tu pedido ha sido registrado exitosamente ');
    this.router.navigateByUrl('/');
  }
}
