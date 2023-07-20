import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root',
})
export class UserDataValidationService {
  constructor(private readonly _auth: AuthorizationService) {}

  public validateRepeatPasswordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control;
    const confirmPassword = control.parent?.get('newPassword');

    if (password && confirmPassword && password.value != confirmPassword.value) {
      return {
        matchError: true,
      };
    }

    return null;
  }

  public validateCurrentPasswordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control;

    if (password && password.value != this._auth.userPassword) {
      return {
        matchError: true,
      };
    }

    return null;
  }
}
