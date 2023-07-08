import { FormControl } from '@angular/forms';

export interface SignUpFormGroup {
  login: FormControl<string>;
  password: FormControl<string>;
  repeat: FormControl<string>;
  date: FormControl<Date>;
  subscribedForNews: FormControl<boolean>;
  tosAccepted: FormControl<boolean>;
}
