import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NoWhiteSpaceOrEnterValidator {
    static cannotContainSpaceOrEnter(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value != null) {
                const value = control.value as string;
                const trimmedValue = value.trim();

                if (
                    trimmedValue.length !== 0 &&
                    (trimmedValue.startsWith(' ') ||
                        trimmedValue.endsWith(' ') ||
                        trimmedValue.startsWith('\n') ||
                        trimmedValue.endsWith('\n'))
                ) {
                    return { cannotContainSpaceOrEnter: true };
                }
            }
            return null;
        };
    }
}
