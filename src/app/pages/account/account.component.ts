import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataValidationService } from 'src/app/services';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {
  public userData!: FormGroup;

  private _userLogin!: string;

  public get userLogin() {
    return this._userLogin;
  }

  constructor(
    private readonly _auth: AuthorizationService,
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _passwordValidator: UserDataValidationService,
  ) {}

  public ngOnInit() {
    this._createForm();
    this._userLogin = this._auth.userLogin;
  }

  public exitApp() {
    this._auth.signOut();
    this._router.navigateByUrl('/');
  }

  public submit() {
    const newData = this.userData.getRawValue();
    console.log(newData);
  }

  private _createForm(): void {
    this.userData = this._fb.group({
      oldPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(/^(?=.*[0-9]{2})(?=.*[!@#$%^&*]{1})[a-zA-Z0-9!@#$%^&*]*$/),
          this._passwordValidator.validateCurrentPasswordMatch.bind(this._passwordValidator),
        ],
      ],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(/^(?=.*[0-9]{2})(?=.*[!@#$%^&*]{1})[a-zA-Z0-9!@#$%^&*]*$/),
        ],
      ],
      repeatNewPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(/^(?=.*[0-9]{2})(?=.*[!@#$%^&*]{1})[a-zA-Z0-9!@#$%^&*]*$/),
          this._passwordValidator.validateRepeatPasswordMatch.bind(this._passwordValidator),
        ],
      ],
    });
  }
}
