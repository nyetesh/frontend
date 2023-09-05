import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { EmailTemplateConnector } from './connector/email-template.connector';
import { EmailTemplateListComponent } from './email-template-list/email-template-list.component';

@Component({
  selector: 'xpa-email-template',
  templateUrl: './email-template.component.html',
  standalone: true,
  imports: [CommonModule, StimulusModule, EmailTemplateListComponent],
  providers: [EmailTemplateConnector]
})
export class EmailTemplateComponent {




}
