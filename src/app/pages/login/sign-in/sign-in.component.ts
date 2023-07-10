import { Component } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LoginService } from '../services/login.service';
import { EMPTY, catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public signInGroup!: FormGroup;

  constructor(private readonly _fb: FormBuilder, private readonly _loginService: LoginService) {}

  public ngOnInit(): void {
    this._createForm();
  }

  public submit(): void {
    const user: User = this.signInGroup.getRawValue();
    console.log(user);

    this._loginService.signIn(user)
    .pipe(
      tap((response) => {
        console.log('response:', response);
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err.message);

        return EMPTY;
      }),
    )
    .subscribe();
  }

  private _createForm(): void {
    this.signInGroup = this._fb.group({
      login: ['', this._loginService.getLoginValidatorList()],
      password: ['', this._loginService.getLoginValidatorList()],
      save: [true],
    });
  }
}
