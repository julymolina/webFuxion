import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreComponent } from '../store/store.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoComponent } from '../store/personal-info/personal-info.component';
import { DeliveryAddressComponent } from '../store/delivery-address/delivery-address.component';
import { BeFuxionComponent } from '../store/be-fuxion/be-fuxion.component';
import { PaymentComponent } from '../store/payment/payment.component';
import { CheckoutComponent } from '../store/checkout/checkout.component';
import { ThanksComponent } from '../store/thanks/thanks.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreHeaderComponent } from './store-header/store-header.component';
import { ResumeOrderComponent } from './resume-order/resume-order.component';
import { PaypalResolver } from './paypal.resolver';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    // resolve: { paypal: PaypalResolver },
  },
  {
    path: 'store/prunex',
    component: StoreComponent,
    // resolve: { paypal: PaypalResolver },
  },

  {
    path: 'store/personal-info',
    component: PersonalInfoComponent,
    resolve: { paypal: PaypalResolver },
  },
  {
    path: 'store/delivery-address',
    component: DeliveryAddressComponent,
    resolve: { paypal: PaypalResolver },
  },
  {
    path: 'store/be-fuxion',
    component: BeFuxionComponent,
    // resolve: { paypal: PaypalResolver },
  },
  {
    path: 'store/payment',
    component: PaymentComponent,
    resolve: { paypal: PaypalResolver },
  },
  {
    path: 'store/checkout',
    component: CheckoutComponent,
    resolve: { paypal: PaypalResolver },
  },
  {
    path: 'store/thanks',
    component: ThanksComponent,
    // resolve: { paypal: PaypalResolver },
  },
];

@NgModule({
  declarations: [
    StoreComponent,
    PersonalInfoComponent,
    DeliveryAddressComponent,
    BeFuxionComponent,
    PaymentComponent,
    CheckoutComponent,
    ThanksComponent,
    StoreHeaderComponent,
    ResumeOrderComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreModule {}
