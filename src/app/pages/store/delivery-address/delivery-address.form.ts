import { FormControl, FormGroup, Validators } from '@angular/forms';
export class DeliveryAddresForm extends FormGroup {
  constructor() {
    super({
      address: new FormControl('' || '', [Validators.required]),
      city: new FormControl('' || '', [Validators.required]),
      zip: new FormControl('' || '', [Validators.required]),
      country: new FormControl('USA' || 'USA', [Validators.required]),
    });
  }
}
