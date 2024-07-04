import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appConfirmPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordValidatorDirective, multi: true }]
})
export class ConfirmPasswordValidatorDirective implements Validator {
  @Input('appConfirmPasswordValidator') passwordControlName: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const confirmPassword = control.value;
    const passwordControl = control.root.get(this.passwordControlName);

    if (passwordControl && confirmPassword !== passwordControl.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
}
