import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { FormField } from './form-field';
import { NbDatepickerModule, NbLayoutModule } from '@nebular/theme';
import { XpasPageHeaderComponent } from 'nikosera-shell/src/packages';
import { NgSelectModule } from '@ng-select/ng-select';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { FormContainerComponent } from 'nikosera-shell/src/packages/form-container/form-container.component';

@Component({
    selector: 'xpa-search',
    templateUrl: './search.component.html',
    standalone: true,
    imports: [
        XpasPageHeaderComponent,
        NbLayoutModule,
        StimulusModule,
        CommonModule,
        FormContainerComponent,
        NgSelectModule,
        NbDatepickerModule
    ],
    providers: [],
})
export class SearchComponent implements OnInit {
    @Input() formFields: FormField[] = [];
    @Output() searchFormValues: EventEmitter<any> = new EventEmitter();

    filterForm!: FormGroup;
    formControls: { [key: string]: FormControl } = {};


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        console.log("fORM fIELDS", this.formFields)
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
            }

        });


        this.filterForm = this.formBuilder.group(this.formControls);
        // this.filterForm.reset();
    }

    search(): void {
        const formValue = this.filterForm.value;

        console.log("I am here ", formValue)

        this.searchFormValues.emit(formValue);
        //this.searchFormValues.emit(this.filterForm);
    }

    reset(): void {
        const formValue = {};
        this.filterForm.reset();
        this.searchFormValues.emit(formValue);
    }

    date(formControlName: any) {

        return this.filterForm.get(formControlName) as FormControl;

    }
}
