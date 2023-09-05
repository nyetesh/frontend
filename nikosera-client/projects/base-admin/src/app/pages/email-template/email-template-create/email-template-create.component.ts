import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormContainerComponent } from 'nikosera-shell/src/packages/form-container/form-container.component';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { EmailTemplateConnector } from '../connector/email-template.connector';
import { EmailTemplateService } from '../service/email-template.service';
import { FormGroup } from '@angular/forms';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { RoutingConstants } from '../../../constant/routing-constants';
import { SanitizeHtmlPipe } from '../sanitize-html.pipe';
import { XpasPageHeaderComponent } from 'nikosera-shell/src/packages';

@Component({
  selector: 'xpa-email-template-create',
  templateUrl: './email-template-create.component.html',
  standalone: true,
  imports: [CommonModule, StimulusModule, XpasPageHeaderComponent, FormContainerComponent, SanitizeHtmlPipe],
  providers: [EmailTemplateConnector, EmailTemplateService]
})
export class EmailTemplateCreateComponent implements OnInit {

  createForm!: FormGroup;

  constructor(
    private emailTemplateConnector: EmailTemplateConnector,
    private router: Router
  ) {
    this.createForm = this.emailTemplateConnector.buildEmailTemplateCreateForm();
  }

  ngOnInit(): void {

  }

  create() {
    this.emailTemplateConnector.create(this.createForm).pipe(
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
    return this.createForm.controls['template'].value;
  }

}
