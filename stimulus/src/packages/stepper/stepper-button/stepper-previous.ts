import { CdkStepperPrevious } from '@angular/cdk/stepper';
import { Directive } from '@angular/core';

@Directive({
    selector: 'button[SclStepperPrevious]',
    host: {
        'class': 'stepper-previous',
        '[type]': 'type',
    },
    inputs: ['type'],
    standalone: true
})
export class SclStepperPrevious extends CdkStepperPrevious {
}
