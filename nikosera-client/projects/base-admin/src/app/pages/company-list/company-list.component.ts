import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { XpasModule } from 'nikosera-shell/src/packages/xpas.module';
import { FormField } from 'stimulus/src/app/search/form-field';
import { PageChangeEvent } from 'stimulus/src/packages';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { Page } from '../../core/page';
import { CompanyDetail } from './company.service';

@Component({
  selector: 'xpa-company-list',
  templateUrl: './company-list.component.html',
  standalone: true,
  imports: [
    StimulusModule,
    CommonModule,
    XpasModule
  ],
  providers: []
})
export class CompanyListComponent {
  total = 0;
  page = new Page();
  companyList: CompanyDetail[] = [
    {
      name: 'ABC Consultancy',
      city: 'Kathmandu',
      contactNumber: '9876543210',
      description: ''
    },
    {
      name: 'BCD Consultancy',
      city: 'Biratnagar',
      contactNumber: '9876543210',
      description: ''
    },
    {
      name: 'DEF Consultancy',
      city: 'Pokhara',
      contactNumber: '9876543210',
      description: ''
    }
  ]
  searchField: FormField[] = [

    {
      label: 'Company Name',
      type: 'text',
      formControlName: 'companyName',
      placeholder: 'Company Name',
    },
    {
      label: 'Email Address',
      type: 'text',
      formControlName: 'emailAddress',
      placeholder: 'Email Address',
    },
    {
      label: 'City',
      type: 'text',
      formControlName: 'city',
      placeholder: 'City'
    }
  ]

  constructor() {

  }

  handleSearchFormValues(formValues: any) {

  }

  scheduleCall(id: any) {

  }

  viewDetail(id: any) {

  }

  makeCall(id: any) {

  }

  onPageChange(page: PageChangeEvent) {

  }

}
