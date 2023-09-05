import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SclButtonGroup } from '../button-group/button-group';
import { SclFormMessage } from '../form/form-message/form-message';
import { SclFormField } from '../form/form-control/form-field';
import { SclColumn } from '../row/column/column.component';
import { SclRow } from '../row/row.component';
import { NbButtonModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { SclLabel } from '../label/label';
import { SclSelectInputField } from '../form/select-input-field/select-input-field';

export interface FilterFormGroup {
    label: string;
    placeholder: string;
    formControlName: string;
    type: string;
    options?: any[];
    dropdownFormControlName?: string;
    value?:any;
    dropdownFormControlValue?:any
}


@Component({
    selector: 'scl-filter',
    templateUrl: './filter.html',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule,
        NgSelectModule,
        SclButtonGroup,
        SclFormMessage,
        SclFormField,
        SclColumn,
        SclRow,
        NbInputModule,
        NbButtonModule,
        SclLabel,
        NbDatepickerModule,
        SclSelectInputField
    ],
    providers: [],
})
export class SclFilter implements OnInit {
    @Input() formFields: FilterFormGroup[] = [];
    @Output() onFilter: EventEmitter<any> = new EventEmitter();

    filterForm!: FormGroup;
    formControls: { [key: string]: FormControl } = {};

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.formFields.forEach((field) => {
            if (
                field.type === 'dropdown-text' &&
                field.dropdownFormControlName
            ) {
                this.formControls[field.dropdownFormControlName] =
                    new FormControl('', Validators.required);
            }
            if (field.formControlName) {
                this.formControls[field.formControlName] = new FormControl(null);
                if(field.dropdownFormControlName && field.dropdownFormControlValue){
                    this.formControls[field.dropdownFormControlName].patchValue(field.dropdownFormControlValue)
                }
            }
            
        });

        this.filterForm = this.formBuilder.group(this.formControls);
    }

    search(): void {
        const formValue = this.filterForm.value;
        this.onFilter.emit(formValue);
    }

    reset(): void {
        const formValue = {};
        this.filterForm.reset();
        this.onFilter.emit(formValue);
    }
}
