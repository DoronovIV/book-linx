import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
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
    private readonly _formService: FormService,
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
      login: ['', this._formService.getLoginValidatorList()],
      oldPassword: ['', this._formService.getPasswordValidatorList()],
      newPassword: ['', this._formService.getPasswordValidatorList()],
      save: [true],
    });
  }
}
