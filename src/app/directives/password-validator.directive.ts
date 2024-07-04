import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordValidatorDirective),
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    if (!password) return null;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const minLength = password.length >= 7;

    if (hasUpperCase && hasNumber && hasSymbol && minLength) {
      return null;
    } else {
      return { passwordInvalid: true };
    }
  }
}
