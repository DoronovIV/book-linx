import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const priceInterval: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const lowerPrice = control.get('lowerPrice')?.value;
  const higherPrice = control.get('higherPrice')?.value;

  if (lowerPrice < higherPrice) {
    return null;
  }

  return {
    invalidPriceInterval: true,
  };
};
