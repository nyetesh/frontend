import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { XpaValidators } from '../../shared/validators/validator';
import { XpasPageHeaderComponent, XpasShellComponent } from 'nikosera-shell/src/packages';
import { XpasModule } from "nikosera-shell/src/packages/xpas.module";
import { NbRadioModule } from '@nebular/theme';

@Component({
  selector: 'xpa-user-kyc',
  templateUrl: './user-kyc.component.html',
  standalone: true,
  imports: [
    StimulusModule,
    CommonModule,
    XpasModule,
    NbRadioModule
  ],
  providers: []
})
export class UserKycComponent implements OnInit {

  userKycForm!: FormGroup;
  contentType!: string;

  genders = [{
    label: 'Male',
    value: 'M',
  },
  {
    label: 'Female',
    value: 'F'
  },
  {
    label: 'Other',
    value: 'O'
  }];

  maritalStatusOptions = [
    {
      label: 'Single',
      value: 'Single'
    },
    {
      label: 'Married',
      value: 'Married',
    }
  ]

  salutationOptions = [
    {
      label: 'Mr.',
      value: 'Mr.'
    },
    {
      label: 'Ms.',
      value: 'Ms.'
    },
    {
      label: 'Mrs.',
      value: 'Mrs.'
    }
  ]

  get dob() {
    return this.userKycForm.get('dob') as FormControl;
  }

  get gender() {
    return this.userKycForm.get('gender') as FormControl;
  };

  get maritalStatus() {
    return this.userKycForm.get('maritalStatus') as FormControl;
  };

  get salutation() {
    return this.userKycForm.get('salutation') as FormControl;
  };

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.userKycForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      middleName: [null],
      lastName: [null, [Validators.required]],
      emailAddress: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      maritalStatus: [null, [Validators.required]],
      nationality: [null, [Validators.required]],
      occupation: [null, [Validators.required]],
      salutation: [null, [Validators.required]],
      mobileNumber: [null, [Validators.required]],
      addressOne: [null, [Validators.required]],
      addressTwo: [null],
    });
  }

  ngOnInit(): void {
  }

  create(event: any) {

  }

  reset() {

  }

}
