import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailTemplateConnector } from '../connector/email-template.connector';
import { EmailTemplateRequest, EmailTemplateDetail, EmailTemplateService } from '../service/email-template.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { FormContainerComponent } from 'nikosera-shell/src/packages/form-container/form-container.component';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { SanitizeHtmlPipe } from '../sanitize-html.pipe';
import { RoutingConstants } from '../../../constant/routing-constants';
import { XpasPageHeaderComponent } from 'nikosera-shell/src/packages';

@Component({
  selector: 'xpa-email-template-edit',
  templateUrl: './email-template-edit.component.html',
  standalone: true,
  imports: [CommonModule, StimulusModule, XpasPageHeaderComponent, FormContainerComponent, SanitizeHtmlPipe],
  providers: [EmailTemplateConnector, EmailTemplateService]
})
export class EmailTemplateEditComponent implements OnInit {

  editForm!: FormGroup;
  emailTemplateDetail!: EmailTemplateDetail;
  state: any;

  constructor(
    private emailTemplateConnector: EmailTemplateConnector,
    private emailTemplateService: EmailTemplateService,
    private router: Router,
    private location: Location
  ) {
    this.editForm = this.emailTemplateConnector.buildEmailTemplateCreateForm();
    this.editForm.addControl('active', new FormControl('', [Validators.required]));
    const currentnavigation = this.router.getCurrentNavigation();
    if (currentnavigation) {
      this.state = currentnavigation.extras.state;
    }
  }

  ngOnInit(): void {
    if (!this.state) {
      this.location.back();
    } else {
      const emailTemplateId = this.state.id;
      this.loadDetail(emailTemplateId);
    }
  }

  loadDetail(id: any) {
    this.emailTemplateService.detail(id).pipe(
      finalize(() =>
        console.log('Loader'))
    ).subscribe({
      next: (response) => {
        this.emailTemplateDetail = response.data;
        this.setEditForm();
      },
      error: (errorResponse) => {
        if (errorResponse.message) {
          // this.toastrService.danger(errorResponse.message);
        } else {
          // this.toastrService.danger('Error');
        }
      },
    })
  }

  setEditForm() {
    this.editForm.patchValue({
      name: this.emailTemplateDetail.name,
      type: this.emailTemplateDetail.type,
      subject: this.emailTemplateDetail.subject,
      template: this.emailTemplateDetail.template,
      active: this.emailTemplateDetail.active === 'Y' ? true : false,
    })
  }

  edit(): void {

    this.emailTemplateConnector.edit(this.editForm, this.state.id).pipe(
      finalize(() =>
        // this.loaderService.hideLoader()
        console.log("Loader Here ")
      )
    ).subscribe({
      next: (response) => {
        console.log('response', response.message);
        // this.toastrService.success("Admin has been created successfully");
        this.router.navigate([RoutingConstants.EMAIL_TEMPLATE, RoutingConstants.LIST]);
      },
      error: (errorResponse) => {
        console.log('in error', errorResponse);
        if (errorResponse.message) {
          // this.toastrService.danger(errorResponse.message);
        } else {
          // this.toastrService.danger('Error');
        }
      },
    });

  }

  get template() {
    return this.editForm.controls['template'].value;
  }
}
