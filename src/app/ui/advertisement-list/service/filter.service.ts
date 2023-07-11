import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { priceInterval } from '../validation/price.validator';

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
}
