import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { XpasPageHeaderComponent, XpasSectionSeparator } from 'nikosera-shell/src/packages';
import { forkJoin } from 'rxjs';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { InitialDataService, SuggestedReplyType, WebMessageDetail } from '../../core/services/initial.data/initial.data.service';
import { StatusPipe } from '../../utils/status-utils';
import { ButtonGroupPipe } from '../remarks-dialog/button-group.pipe';
import { DialogRemarks } from '../remarks-dialog/dialog-remark';
import { DialogData } from '../remarks-dialog/remarks-dialog.component';

@Component({
  selector: 'xpa-remarks',
  templateUrl: './remarks.component.html',
  standalone: true,
  imports: [
    StimulusModule,
    CommonModule,
    ButtonGroupPipe,
    XpasSectionSeparator,
    StatusPipe,
    XpasPageHeaderComponent
  ],
  providers: [
    ButtonGroupPipe
  ]
})
export class RemarksComponent implements OnInit {

  @Input()
  data!: any;
  dialogData!: DialogData
  remarksForm: FormGroup;
  suggestedReplies: SuggestedReplyType[] = [];
  suggestedMessages: string[] = [];
  webMessageDetail: WebMessageDetail[] = [];
  webMessage!: WebMessageDetail;
  @Output() remarkSubmit: EventEmitter<DialogRemarks> = new EventEmitter();
  menuCode!: string;
  username!: string;

  get f() {
    return this.remarksForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private initialDataService: InitialDataService
  ) {
    this.remarksForm = this.formBuilder.group({
      remarks: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.menuCode = this.data.menuCode;
      if (this.data.username) {
        this.username = this.data.username;
      }
    }
    forkJoin(
      [this.initialDataService.getSuggestedReplies,
      this.initialDataService.getWebMessageFormat
      ]
    ).subscribe(([suggestedReplies, webMessageFormat]) => {
      this.suggestedReplies = suggestedReplies.suggestedReply;
      this.webMessageDetail = webMessageFormat.messages;

      for (let reply of this.suggestedReplies) {
        if (reply.menuCode === this.menuCode) {
          for (let message of reply.suggestedReplies) {
            this.suggestedMessages.push(message.message)
          }
        }
      }

      for (let message of this.webMessageDetail) {
        if (message.menuCode === this.menuCode) {
          this.webMessage = {
            menuCode: message.menuCode,
            eventType: message.eventType,
            message: message.message,
            title: message.title,
          }
        }
      }

      this.dialogData = {
        title: this.webMessage.title,
        headerMessage: this.webMessage.message,
        suggestionMessages: this.suggestedMessages,
        eventType: this.webMessage.eventType,
      }
    });
  }

  onSubmit() {
    if (this.remarksForm.invalid) {
      return;
    }
    const remarksDialog: DialogRemarks = {
      remarks: this.remarksForm.controls['remarks'].value,
      event: 'submit',
    }
    this.remarkSubmit.emit(remarksDialog);
  }

  selectMessage(message: string) {
    this.remarksForm.reset({
      remarks: message
    });

  }

  cancel() {
    const remarksDialog: DialogRemarks = {
      remarks: '',
      event: 'cancel'
    }
    this.remarkSubmit.emit(remarksDialog);
  }

  close() {

  }
}
