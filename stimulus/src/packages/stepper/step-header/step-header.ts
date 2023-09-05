import { StepState } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StepStatePipe } from '../step/step.pipe';

@Component({
    selector: 'scl-step-header',
    templateUrl: './step-header.html',
    host: {
        class: 'step-header'
    },
    imports: [
        CommonModule,
        StepStatePipe
    ],
    standalone: true
})

export class SclStepHeader {

    @Input() index!: number;

    @Input() label!: string;

    @Input() selected!: boolean;

    @Input() state!: StepState;

    @Input() disabled!: boolean;

}
