import { FormControl, FormGroup, Validators } from '@angular/forms';
export class PersonalInfoForm extends FormGroup {
  constructor() {
    super({
      lastName: new FormControl('' || '', [Validators.required]),
      name: new FormControl('' || '', [Validators.required]),
      phone: new FormControl('' || '', [Validators.required]),
      email: new FormControl('' || '', [Validators.required, Validators.email]),
    });
  }
}
