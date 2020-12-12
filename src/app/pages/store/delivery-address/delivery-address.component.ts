import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';
import { DeliveryAddresForm } from './delivery-address.form';
@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss'],
})
export class DeliveryAddressComponent implements OnInit {
  form = new DeliveryAddresForm();
  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private user: UserService
  ) {}

  ngOnInit(): void {}

  complete() {
    const data = this.form.value;
    const currentId = this.user.currentUserId;
    this.afs
      .collection('users')
      .doc(currentId)
      .set(data, { merge: true })
      .then(() => {
        alert('Gracias, tu pedido ha sido registrado exitosamente ');
        this.router.navigateByUrl('/');
      });
  }
}
