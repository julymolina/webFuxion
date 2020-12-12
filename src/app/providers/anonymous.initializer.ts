import { Injectable, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class AnonymousInitializer {
  constructor(private auth: AngularFireAuth, private user: UserService) {}

  load(): Promise<any> {
    return this.user.authState
      .pipe(
        switchMap((user) => {
          if (!user) {
            console.log('no hay usuario');
            return this.auth.signInAnonymously().then((credential) => {
              return credential;
            });
          } else {
            console.log('si lo hay');
            return of(user);
          }
        }),
        take(1)
      )
      .toPromise();
  }
}
export function AnonymousInitializerFactory(service: AnonymousInitializer): () => Promise<any> {
  return () => service.load();
}
