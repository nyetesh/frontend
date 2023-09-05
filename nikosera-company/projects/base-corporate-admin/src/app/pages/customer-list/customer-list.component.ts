import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Page } from '@core/page';
import { XpasModule } from 'nikosera-shell/src/packages/xpas.module';
import { FormField } from 'stimulus/src/app/search/form-field';
import { PageChangeEvent } from 'stimulus/src/packages/pagination/pagination';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { CustomerDetail } from './customer.service';

@Component({
    selector: 'xpc-customer-list',
    templateUrl: './customer-list.component.html',
    standalone: true,
    imports: [
        StimulusModule,
        CommonModule,
        XpasModule
    ],
    providers: []
})
export class CustomerListComponent {
    total = 0;
    page = new Page();
    customerList: CustomerDetail[] = [
        {
            firstName: 'John',
            emailAddress: 'johnDoe@gmail.com',
            mobileNumber: '9876432152'
        },
        {
            firstName: 'Max',
            emailAddress: 'MaxDoe@gmail.com',
            mobileNumber: '9821234312'
        }
    ];
    searchField: FormField[] = [
        {
            label: 'Username',
            type: 'text',
            formControlName: 'username',
            placeholder: 'Username',
        },
        {
            label: 'Name',
            type: 'text',
            formControlName: 'name',
            placeholder: 'Name',
        },
        {
            label: 'Email Address',
            type: 'text',
            formControlName: 'emailAddress',
            placeholder: 'Email Address',
        }
        // {
        //     label: 'Status',
        //     type: 'select',
        //     formControlName: 'active',
        //     placeholder: 'Select Status',
        //     options: this.statusList, // replace with your actual array of status options
        // },
    ];

    constructor() {

    }

    handleSearchFormValues(formValues: any) {

    }

    callUser(id: any) {

    }

    viewDetail(id: any) {

    }

    onPageChange(page: PageChangeEvent) {

    }
}
