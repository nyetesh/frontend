import { Component, ContentChildren, Output, OnInit, QueryList, EventEmitter, OnDestroy, Input } from '@angular/core';

import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { SclStep } from './step/step';
import { Subscription } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { SclStepHeader } from './step-header/step-header';
import { StepStatePipe } from './step/step.pipe';

@Component({
    selector: 'scl-stepper',
    templateUrl: './stepper.html',
    standalone: true,
    host: {
        class: 'stepper'
    },
    imports: [
        CommonModule,
        CdkStepperModule,
        SclStepHeader,
        StepStatePipe
    ],
    providers: [
        { provide: CdkStepper, useExisting: SclStepper }
    ]
})

export class SclStepper extends CdkStepper implements OnInit , OnDestroy {

    stepperSubscription!: Subscription;

     // tslint:disable-next-line
    @ContentChildren(SclStep) override _steps!: QueryList<SclStep>;

    @Output() forward: EventEmitter<string> = new EventEmitter();

    @Input()
    set disableStepNavigation(value: boolean) {
        this.disableHeaderNavigation = coerceBooleanProperty(value);
    }

    disableHeaderNavigation!: boolean

    ngOnInit() {
        this.stepperSubscription = this.selectionChange.subscribe((event) => {
            if (event.selectedIndex >= event.previouslySelectedIndex) {
                this.forward.emit();
            }
        })
    }

    override ngOnDestroy() {
        this.stepperSubscription.unsubscribe();
    }
}
