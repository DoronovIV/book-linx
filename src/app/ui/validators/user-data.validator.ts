import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchCurrentPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return null;
}
