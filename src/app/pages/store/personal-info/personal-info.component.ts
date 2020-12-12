import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';
import { PersonalInfoForm } from './personal-info.form';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  form = new PersonalInfoForm();
  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private user: UserService
  ) {}

  ngOnInit(): void {}

  proccessInfo() {
    const data = this.form.value;
    const currentId = this.user.currentUserId;
    this.afs
      .collection('users')
      .doc(currentId)
      .set(data, { merge: true })
      .then(() => {
        this.router.navigate(['store/payment']);
      });
  }
}
