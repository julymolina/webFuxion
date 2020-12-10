import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

import { loadDynamicScript } from '../../providers/dynamic-js-loader/dynamic-js-loader';

@Injectable({ providedIn: 'root' })
export class PaypalResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return loadDynamicScript('https://www.paypal.com/sdk/js?client-id='+environment.paypal.client_id, 'paypalGateway');


  }
}
