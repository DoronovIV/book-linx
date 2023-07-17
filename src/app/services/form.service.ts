import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, tap } from 'rxjs';

import { User as User } from '../pages/login/interfaces/user.interface';
import { User as ModelUser } from '../model/main/user.interface';

import { Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(
    private readonly _router: Router,
    private readonly _http: HttpClient,
    private readonly _authorizationService: AuthorizationService,
  ) {}

  public signIn(user: User): void {
    const url = `users`;
    let userList: ModelUser[] = [];

    this._http
      .get<ModelUser[]>(url)
      .pipe(
        tap((response) => {
          console.log('response:', response);
        }),
        catchError((err: HttpErrorResponse) => {
          console.log(err.message);

          return EMPTY;
        }),
      )
      .subscribe((users) => {
        userList = users ?? [];

        if (userList) {
          let success = false;
          let modelUser: ModelUser | null = null;
          userList.forEach((el) => {
            let condition = user.login === el.login && user.password === el.password;
            if (condition) {
              success = condition;
              modelUser = el;
            }
          });

          if (success) {
            this._authorizationService.authorize(modelUser);
            this._router.navigateByUrl('/');
          } else {
            console.log('authorization fail');
          }
        }
      });
  }

  public getLoginValidatorList() {
    return [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12),
      Validators.pattern(/^[A-Za-z]{1}[A-Za-z0-9]{3}[A-Za-z0-9]*$/),
    ];
  }

  public getPasswordValidatorList() {
    return [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern(/^(?=.*[0-9]{2})(?=.*[!@#$%^&*]{2})[a-zA-Z0-9!@#$%^&*]*$/),
    ];
  }
}
