import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { environment } from 'src/environments/environment';
declare var paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  priceToPay = 0;

  constructor(
    private _ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    const price = this.cart.getTotal();
    this.priceToPay = price;
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            application_context: {
              shipping_preference: 'NO_SHIPPING',
            },
            intent: 'CAPTURE',
            purchase_units: [
              {
                // invoice_id: pension.toString(),
                description: `Veramas Promotion`,
                amount: {
                  value: this.priceToPay,
                },
                payee: {
                  // email_address: 'payee@gmail.com',
                  email_address: environment.paypal.payee,
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          // This function captures the funds from the transaction.

          // This function shows a transaction success message to your buyer.
          return actions.order.capture().then((details) => {
            // This function shows a transaction success message to your buyer.

            alert(
              'Gracias tu pago ha sido completado ' +
                details.payer.name.given_name
            );
            this._ngZone.run(() => {
              this.router.navigateByUrl('/store/delivery-address');
            });
          });
        },
        onError: (err) => {
          // Show an error page here, when an error occurs
          alert('Ocurrio un error al procesar tu pago');
        },
      })
      .render('#paypal-container');
  }
}
