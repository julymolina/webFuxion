import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreComponent } from '../store/store.component';
import { FormsModule } from '@angular/forms';
import { PersonalInfoComponent } from '../store/personal-info/personal-info.component';
import { DeliveryAddressComponent } from '../store/delivery-address/delivery-address.component';
import { BeFuxionComponent } from '../store/be-fuxion/be-fuxion.component';
import { PaymentComponent } from '../store/payment/payment.component';
import { CheckoutComponent } from '../store/checkout/checkout.component';
import { ThanksComponent } from '../store/thanks/thanks.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreHeaderComponent } from './store-header/store-header.component';
import { ResumeOrderComponent } from './resume-order/resume-order.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
  },

  {
    path: 'store/personal-info',
    component: PersonalInfoComponent,
  },
  {
    path: 'store/delivery-address',
    component: DeliveryAddressComponent,
  },
  {
    path: 'store/be-fuxion',
    component: BeFuxionComponent,
  },
  {
    path: 'store/payment',
    component: PaymentComponent,
  },
  {
    path: 'store/checkout',
    component: CheckoutComponent,
  },
  {
    path: 'store/thanks',
    component: ThanksComponent,
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
  imports: [CommonModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreModule {}
