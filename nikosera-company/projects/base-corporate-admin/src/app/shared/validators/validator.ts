import { Validators } from '@angular/forms';
import { NoWhiteSpaceOrEnterValidator } from './no-white-space-or-enter-validator';

export class XpcValidators {
    static textRequired = Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
        NoWhiteSpaceOrEnterValidator.cannotContainSpaceOrEnter,
    ]);

    static amount = Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.minLength(1),
        Validators.maxLength(15),
        Validators.pattern('^[0-9]*$'),
        NoWhiteSpaceOrEnterValidator.cannotContainSpaceOrEnter,
    ]);
    static username = Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
        Validators.pattern('^S|^[a-zA-Z0-9._-]*$'),
        NoWhiteSpaceOrEnterValidator.cannotContainSpaceOrEnter,
    ]);
    static usernameValidator = Validators.pattern('^S|^[a-zA-Z0-9._-]*$');
    static emailValidator = Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    static mobileNumberValidator = Validators.pattern('^[9][0-9]{9}$');
    static renewInterval = Validators.compose([this.amount]);
    static phoneNumber = Validators.pattern('^[0-9]+$');
    static remark = Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        NoWhiteSpaceOrEnterValidator.cannotContainSpaceOrEnter,
    ]);
}
