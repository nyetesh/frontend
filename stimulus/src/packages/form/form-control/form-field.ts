import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterContentInit, Component, ContentChild, ContentChildren, Directive, ElementRef, QueryList } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { SclFormMessage } from '../form-message/form-message';

@Component({
    selector: 'scl-form-field',
    standalone: true,
    templateUrl:'./form-field.html',
    host: {
        class: 'scl-form-field'
    }
})
export class SclFormField implements AfterContentInit {
    @ContentChildren(NgControl, { descendants: true })
    controls!: QueryList<NgControl>;

    @ContentChildren(NgControl, { read: ElementRef, descendants: true  })
    controlEls!: QueryList<ElementRef>;

    @ContentChild(SclFormMessage)
    formMessage!: SclFormMessage;

    constructor(private focusMonitor: FocusMonitor) { }

    ngAfterContentInit() {
        this.controlEls.forEach((controlEl: ElementRef, index: number) => {
            const ngControl: NgControl = this.controls.toArray()[index];
            const control: AbstractControl | null = ngControl.control;
            if (control && control.untouched) {
                this.focusMonitor.monitor(controlEl).subscribe((origin) => {
                    if (!origin) {
                        this.setMessage(controlEl, index);
                        this.focusMonitor.stopMonitoring(controlEl);
                        control.statusChanges.subscribe(() => {
                            this.setMessage(controlEl, index);
                        });
                    }
                });
            }
        });
    }

    setMessage(controlEl: ElementRef, index: number) {
        const control = this.controls.toArray()[index];
        const errors = control.errors;
        const name = controlEl.nativeElement.getAttribute('name') || control.name;
        this.formMessage.message = errors
            ? Object.keys(errors)
                .map((error) => {
                    switch (error) {
                        case 'required':
                            return `${name} is mandatory.`;
                        case 'min':
                            return `${name} must be greater than ${errors['min'].min}.`;
                        case 'max':
                            return `${name} must be less than ${errors['max'].max}.`;
                        case 'minlength':
                            return `${name} must be greater than ${errors['minlength'].requiredLength} characters.`;
                        case 'maxlength':
                            return `${name} must be less than ${errors['maxlength'].requiredLength} characters.`;
                        case 'pattern':
                            return `${name} must be valid`;
                        case 'mismatch':
                            return `Confirm password does not match.`;
                        case 'samePassword':
                            return `Old and new password is same.`;
                        case 'cannotContainSpaceOrEnter':
                            return `${name} cannot contain space/enter at start or end.`;
                        case 'invalidUsername':
                            return `Invalid username.`;
                    }
                    return '';
                })
                .join(' ')
            : '';
        this.formMessage.type = errors && Object.keys(errors).length ? 'danger' : 'basic';
    }
}
