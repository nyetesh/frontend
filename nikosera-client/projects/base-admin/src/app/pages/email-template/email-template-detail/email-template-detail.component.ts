import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { EmailTemplateDetail, EmailTemplateService } from '../service/email-template.service';
import { EmailTemplateConnector } from '../connector/email-template.connector';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { SanitizeHtmlPipe } from '../sanitize-html.pipe';
import { NbLayoutModule } from '@nebular/theme';
import { XpasPageHeaderComponent } from 'nikosera-shell/src/packages';
import { finalize } from 'rxjs';

@Component({
  selector: 'xpa-email-template-detail',
  templateUrl: './email-template-detail.component.html',
  standalone: true,
  imports: [CommonModule, StimulusModule, SanitizeHtmlPipe, NbLayoutModule, XpasPageHeaderComponent]
})
export class EmailTemplateDetailComponent implements OnInit {

  state: any;
  emailTemplateDetail!: EmailTemplateDetail;

  constructor(
    private router: Router,
    private location: Location,
    private emailTemplateConnector: EmailTemplateConnector,
    private emailTemplateService: EmailTemplateService

  ) {
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

  get template() {
    return this.emailTemplateDetail.template;
  }

}
