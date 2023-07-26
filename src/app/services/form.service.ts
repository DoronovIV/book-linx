import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
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
      Validators.pattern(/^(?=.*[0-9]{2})(?=.*[!@#$%^&*]{1})[a-zA-Z0-9!@#$%^&*]*$/),
    ];
  }
}
