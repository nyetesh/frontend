import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbRadioModule } from '@nebular/theme';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { XpasModule } from "nikosera-shell/src/packages/xpas.module";

@Component({
  selector: 'xpc-admin-register',
  templateUrl: './admin-register.component.html',
  standalone: true,
  imports: [
    StimulusModule,
    CommonModule,
    XpasModule,
    NbRadioModule
  ],
  providers: []
})
export class AdminRegisterComponent {

  adminKycForm!: FormGroup;
  contentType!: string;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.adminKycForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      emailAddress: [null, [Validators.required]],
      mobileNumber: [null, [Validators.required]],
      addressOne: [null, [Validators.required]],
      addressTwo: [null],
    });
  }

  create(event: any) {

  }

  reset() {

  }
}
