import { Component, Input, } from '@angular/core';
import { CdkStep } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'scl-step',
    templateUrl: './step.html',
    imports: [
        CommonModule
    ],
    standalone: true
})

export class SclStep extends CdkStep {
    @Input() disabled = false;
}
