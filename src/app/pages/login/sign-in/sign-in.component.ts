import { Component } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { FormService } from '../../../services/form.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public signInGroup!: FormGroup;

  constructor(private readonly _fb: FormBuilder, private readonly _formService: FormService) {}

  public ngOnInit(): void {
    this._createForm();
  }

  public submit(): void {
    const user: User = this.signInGroup.getRawValue();
    console.log(user);

    this._formService.signIn(user);
  }

  private _createForm(): void {
    this.signInGroup = this._fb.group({
      login: ['', this._formService.getLoginValidatorList()],
      password: ['', this._formService.getPasswordValidatorList()],
      save: [true],
    });
  }
}
