import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRemarks } from './dialog-remark';
import { NbDialogModule, NbDialogRef } from '@nebular/theme';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { CommonModule } from '@angular/common';
import { ButtonGroupPipe } from './button-group.pipe';
import { XpcValidators } from '../validators/validator';

export interface DialogData {
    title: string;
    headerMessage: string;
    suggestionMessages: string[];
    eventType: string;
}

@Component({
    standalone: true,
    selector: 'xpc-remarks-dialog',
    templateUrl: './remarks-dialog.component.html',
    imports: [NbDialogModule, StimulusModule, CommonModule, ButtonGroupPipe],
    providers: [ButtonGroupPipe],
})
export class RemarksDialogComponent {
    dialogData!: DialogData;
    dialogServiceForm: FormGroup;

    @Output() submit: EventEmitter<DialogRemarks> = new EventEmitter();

    get f() {
        return this.dialogServiceForm.controls;
    }

    constructor(private formBuilder: FormBuilder, protected ref: NbDialogRef<RemarksDialogComponent>) {
        this.dialogServiceForm = this.formBuilder.group({
            remarks: [null, [XpcValidators.remark]],
        });
    }

    onSubmit() {
        if (this.dialogServiceForm.invalid) {
            return;
        }
        const remarksDialog: DialogRemarks = {
            remarks: this.dialogServiceForm.controls['remarks'].value,
            event: 'submit',
        };
        this.submit.emit(remarksDialog);
        this.ref.close();
    }

    cancel() {
        this.ref.close();
    }

    selectMessage(message: string) {
        this.dialogServiceForm.reset({
            remarks: message,
        });
    }

    status(eventType: string): string {
        if (eventType === 'BLOCK' || eventType === 'DELETE') {
            return 'danger';
        }
        return 'basic';
    }
}
