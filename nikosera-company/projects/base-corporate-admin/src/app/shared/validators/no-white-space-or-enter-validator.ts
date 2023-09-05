import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NoWhiteSpaceOrEnterValidator {
    static cannotContainSpaceOrEnter(
        control: AbstractControl
    ): ValidationErrors | null {
        if (control.value != null) {
            const value = control.value as string;
            if (
                value.length !== 0 &&
                (value.indexOf(' ') === 0 ||
                    value.lastIndexOf(' ') === value.length - 1 ||
                    value.indexOf('\n') === 0 ||
                    value.lastIndexOf('\n') === value.length - 1)
            ) {
                return { cannotContainSpaceOrEnter: true };
            }
        }
        return null;
    }
}
