import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public getPriceValidatorList() {
    return [Validators.maxLength(6)];
  }

  public getAreaValidatorList() {
    return [Validators.maxLength(3)];
  }

  public getRoomValidatorList() {
    return [Validators.maxLength(2)];
  }
}
