import { CdkStepperNext } from '@angular/cdk/stepper';
import { Directive } from '@angular/core';

@Directive({
    selector: 'button[SclStepperNext]',
    host: {
        'class': 'stepper-next',
        '[type]': 'type',
    },
    inputs: ['type'],
    standalone: true
})
export class SclStepperNext extends CdkStepperNext {
}
