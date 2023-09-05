import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import {
    NbLayoutModule,
    NbRouteTab,
    NbIconLibraries,
    NbIconModule,
} from '@nebular/theme';
import { SclSideDrawerService } from 'src/packages/side-drawer/side-drawer.service';
import { StimulusModule } from 'src/packages/stimulus.module';
import { DetailComponent } from './detail/detail.component';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { SclAlertService } from 'src/packages/alert/alert.service';
import { FilterFormGroup } from 'src/packages/filter/filter';
import { NbIcons } from '@nebular/theme';
import { SclAccordionItem } from 'src/packages/accordion/accordion';

import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NbLayoutModule,
        StimulusModule,
        ReactiveFormsModule,
        NbIconModule,
        NgSelectModule
    ],
})
export class AppComponent {
    title = 'stimulus';

    filterForm!: FormGroup;

    tabs: NbRouteTab[] = [
        {
            title: 'All',
            route: '',
        },
        {
            title: 'Blocked',
            route: '',
            queryParams: {
                blocked: true
            }
        },
        {
            title: 'Locked',
            route: '',
            queryParams: {
                locked: true
            }
        }
    ];

    myDataset = [
        { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '098-765-4321',
        },
        {
            name: 'Mary Johnson',
            email: 'mary@example.com',
            phone: '111-222-3333',
        },
        {
            name: 'Mary Johnson',
            email: 'mary@example.com',
            phone: '111-222-3333',
        },
    ];

    @ViewChild('sidedrawer', { static: false }) sidedrawer!: ElementRef;

    filterFields: FilterFormGroup[] = [
        // {
        //     type: 'dropdown-text',
        //     label: 'Dropdown with Text',
        //     placeholder: 'Enter text',
        //     options: [
        //         { value: 'option1', label: 'Option 1' },
        //         { value: 'option2', label: 'Option 2' },
        //         { value: 'option3', label: 'Option 3' },
        //     ],
        //     dropdownFormControlName: 'dropdownField',
        //     formControlName: 'textField',
        // },
        {
            label: 'User Name',
            type: 'text',
            formControlName: 'username',
            placeholder: 'Username',
        },
        {
            label: 'Email Address',
            type: 'text',
            formControlName: 'emailAddress',
            placeholder: 'Email Address',
        },
        {
            label: 'Branch',
            type: 'select',
            formControlName: 'branchId',
            placeholder: 'Select Branch',
            options: [{ value: 'option1', label: 'Option 1' }],
        },
    ];

    dataSource = [
        {
            name: 'ACCOUNT',
            label: 'Account',
            id: 1,
            children: [
                {
                    name: 'TXN_STATEMENT',
                    label: 'Txn Statement',
                    id: 2,
                    children: [],
                },
                {
                    name: 'TAX_STATEMENT',
                    label: 'Tax Statement',
                    children: [],
                    id: 3,
                },
                {
                    name: 'INTEREST_STATEMENT',
                    label: 'Interest Statement',
                    children: [],
                    id: 4,
                },
            ],
        },
        {
            name: 'FUND_TRANSFER',
            label: 'Fund Transfer',
            id: 5,
            children: [
                {
                    name: 'INTRA_BANK',
                    label: 'Intra Bank',
                    children: [],
                    id: 6,
                },
                {
                    name: 'IPS',
                    label: 'IPS',
                    children: [],
                    id: 7,
                },
                {
                    name: 'CIPS',
                    label: 'CIPS',
                    children: [],
                    id: 8,
                },
                {
                    name: 'FONEPAY',
                    label: 'Fonepay',
                    children: [],
                    id: 9,
                },
            ],
        },
        {
            name: 'PAYROLL_MANAGEMENT',
            label: 'PayRoll Management',
            children: [
                {
                    name: 'PAYROLL',
                    label: 'PayRoll',
                    children: [],
                    id: 10,
                },
                {
                    name: 'EMPLOYEE',
                    label: 'Employee',
                    children: [],
                    id: 11,
                },
            ],
        },
        {
            name: 'UTILITY_PAYMENT',
            label: 'Utility Payment',
            children: [],
            id: 12,
        },
    ];

    accordionData: SclAccordionItem[] = [
        {
            name: 'Admin',
            children: [
                {
                    name: 'Registration',
                    children: []
                },
                {
                    name: 'Manage Admin',
                    children: []
                },
                {
                    name: 'Unblock Admin Users',
                    children: []
                },
                {
                    name: 'Approve Unblock Admin Login ',
                    children: []
                }
            ]
        },
        {
            name: 'Teller',
            children: []
        },
        {
            name: 'Customer',
            children: [
                {
                    name: 'Registration',
                    children: []
                },
                {
                    name: 'Manage Customer',
                    children: [
                        {
                            name: 'Modify Detail',
                            children: [
                                {
                                    name: 'Block Customer',
                                    children: []
                                },
                                {
                                    name: 'Device Reset',
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]


    constructor(
        private selectConfig: NgSelectConfig,
        private drawerService: SclSideDrawerService,
        private formBuilder: FormBuilder,
        private alertService: SclAlertService,
        private iconLibraries: NbIconLibraries
    ) {
        this.selectConfig.appendTo = 'body'

        this.userForm = this.formBuilder.group({
            name: ['', [Validators.required]],
        });

        this.filterForm = this.formBuilder.group({
            username: null,
            profileId: null,
            branchId: null,
            active: null,
            emailAddress: null,
            name: null,
        });
        this.iconLibraries.registerSvgPack('scl-button', SclTestIcons);
        this.iconLibraries.registerSvgPack('scl-select', SclSelectIcons);
    }

    userForm!: FormGroup;

    @ViewChild('content') content!: TemplateRef<any>;

    openDrawer() {
        const ref = this.drawerService.open(DetailComponent, {
            id: 1,
        });
    }

    showToast() {
        this.alertService.show({
            description:
                'You have successfully created an account for “hari.bahadur”. Link to create password has been sent to their email',
            type: 'success',
            heading: 'Account created Successfully',
        });
    }

    OnFilterChange(value: any) {
        console.log(value);
    }

    onSelectionChange(ids: any) {
        console.log(ids);
    }

    onUploadFile(file: any) {
        console.log(file);
    }
}

export const SclTestIcons: NbIcons = {
    'setting': `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.735 1.333a6.68 6.68 0 0 0-1.516.18.5.5 0 0 0-.384.432l-.106.968a1 1 0 0 1-1.396.806h-.001l-.889-.392a.5.5 0 0 0-.566.116 6.654 6.654 0 0 0-1.522 2.624.5.5 0 0 0 .183.548l.788.578a1 1 0 0 1 0 1.614l-.788.577a.5.5 0 0 0-.183.548c.3.996.83 1.888 1.522 2.625a.5.5 0 0 0 .566.115l.889-.391a1 1 0 0 1 1.397.806l.106.968a.5.5 0 0 0 .383.432c.484.113.991.18 1.517.18.526 0 1.032-.067 1.516-.18a.5.5 0 0 0 .384-.432l.106-.968a.999.999 0 0 1 1.396-.806l.89.39a.5.5 0 0 0 .566-.114 6.658 6.658 0 0 0 1.522-2.625.5.5 0 0 0-.183-.548l-.788-.577a.999.999 0 0 1 0-1.614l.788-.577a.5.5 0 0 0 .183-.548 6.657 6.657 0 0 0-1.522-2.625.5.5 0 0 0-.566-.115l-.89.391a1 1 0 0 1-1.396-.806l-.106-.968a.5.5 0 0 0-.383-.432 6.664 6.664 0 0 0-1.517-.18zm0 1c.325 0 .637.059.95.114l.062.574a2.002 2.002 0 0 0 2.793 1.614l.529-.233c.406.488.727 1.038.952 1.642l-.469.343a2.001 2.001 0 0 0 0 3.226l.469.343a5.622 5.622 0 0 1-.952 1.642l-.529-.233a2.001 2.001 0 0 0-2.793 1.614l-.063.574c-.312.055-.624.114-.95.114-.324 0-.636-.059-.948-.114l-.063-.575a2.002 2.002 0 0 0-2.793-1.613l-.53.233a5.616 5.616 0 0 1-.95-1.642l.468-.343a2.001 2.001 0 0 0 0-3.226l-.469-.344a5.617 5.617 0 0 1 .953-1.641l.528.232a2 2 0 0 0 2.793-1.613l.063-.574c.312-.055.624-.114.949-.114zm0 3A2.674 2.674 0 0 0 5.068 8c0 1.467 1.2 2.667 2.667 2.667 1.467 0 2.667-1.2 2.667-2.667 0-1.467-1.2-2.667-2.667-2.667zm0 1c.926 0 1.667.74 1.667 1.667a1.66 1.66 0 0 1-1.667 1.667A1.66 1.66 0 0 1 6.068 8c0-.926.74-1.667 1.667-1.667z" 
    fill="currentColor"/>
    </svg>`,
};

export const SclSelectIcons: NbIcons = {
    'tick': `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.062 4.438a.926.926 0 0 1 0 1.31L7.877 15.931a.926.926 0 0 1-1.31 0l-4.63-4.63a.926.926 0 0 1 1.31-1.309l3.975 3.975 9.53-9.53a.926.926 0 0 1 1.31 0z" fill="currentColor"/>
    </svg>
    `
}
