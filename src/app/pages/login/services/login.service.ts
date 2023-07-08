import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly _http: HttpClient) {}

  public signIn(user: User): Observable<void> {
    const url = `sign-in`;

    return this._http.post<void>(url, {
      user,
    });
  }

  public signUp(user: User): Observable<void> {
    const url = `sign-up`;

    return this._http.post<void>(url, {
      user,
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
      Validators.minLength(6),
      Validators.maxLength(16),
      Validators.pattern(/^[A-Za-z0-9]*$/),
    ];
  }
}
