import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataValidationService implements AsyncValidator {
  constructor(private readonly _loginService: LoginService) {}
  public async validate(
    control: AbstractControl<any, any>,
  ): Promise<Promise<ValidationErrors | null> | Observable<ValidationErrors | null>> {
    const user = await this._loginService.getUserByID(this._loginService.currentUserID);

    let currentPassword = control.value;

    if (user?.password) {
      if (user?.password === currentPassword) {
        return null;
      }
    }

    return new Observable<ValidationErrors>();
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
