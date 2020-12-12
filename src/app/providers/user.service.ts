import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class UserService {
  $user: BehaviorSubject<firebase.default.User> = new BehaviorSubject(null);

  authState: Observable<firebase.default.User>;
  get currentUser() {
    return this.$user.value || null;
  }

  set currentUser(user) {
    this.$user.next(user);
  }
  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.currentUser !== null && this.currentUser !== undefined;
  }

  get isAnonymous(): boolean {
    if (!this.authenticated) {
      return false;
    }
    return this.currentUser.isAnonymous;
  }

  get isFullAuthenticated() {
    return this.authenticated && !this.isAnonymous;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.currentUser.uid : '';
  }

  constructor(private auth: AngularFireAuth) {
    this.authState = this.auth.authState;

    this.authState.subscribe((user) => {
      this.$user.next(user);
    });
  }
}
