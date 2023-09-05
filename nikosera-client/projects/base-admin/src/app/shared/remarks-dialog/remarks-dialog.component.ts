import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogRemarks } from "./dialog-remark";
import { NbDialogModule, NbDialogRef } from "@nebular/theme";
import { StimulusModule } from "stimulus/src/packages/stimulus.module";
import { CommonModule } from "@angular/common";
import { ButtonGroupPipe } from "./button-group.pipe";
import { XpasDialogHeader } from 'nikosera-shell/src/packages/dialog/dialog-header/dialog-header.component'
import { XpasDialogBody } from 'nikosera-shell/src/packages/dialog/dialog-body/dialog-body.component'
import { XpasDialogFooter } from 'nikosera-shell/src/packages/dialog/dialog-footer/dialog-footer.component'
import { XpasDialog } from 'nikosera-shell/src/packages/dialog/dialog.component'
import { XpasImageInfo } from 'nikosera-shell/src/packages/image-info/image-info.component'
import { XpasPageHeaderComponent, XpasSectionSeparator } from 'nikosera-shell/src/packages';
import { StatusPipe } from "../../utils/status-utils";
import { forkJoin } from "rxjs";
import { InitialDataService, SuggestedReplyType, WebMessageDetail } from "../../core/services/initial.data/initial.data.service";
import { DynamicMessageConstant } from "../../constant/dynamic-message-constant";
import { DynamicMessageUtil } from "../../utils/dynamic-message";
import { DialogDynamicData } from "../no-remarks-dialog/no-remarks-dialog.component";

export interface DialogData {
    title: string;
    headerMessage: string,
    suggestionMessages: string[],
    eventType: string;
}

@Component({
    selector: 'remarks-dialog',
    templateUrl: './remarks-dialog.component.html',
    standalone: true,
    imports: [
        NbDialogModule,
        StimulusModule,
        CommonModule,
        ButtonGroupPipe,
        XpasDialog,
        XpasDialogHeader,
        XpasDialogBody,
        XpasDialogFooter,
        XpasImageInfo,
        XpasSectionSeparator,
        StatusPipe,
        XpasPageHeaderComponent
    ],
    providers: [
        ButtonGroupPipe
    ]
})
export class RemarksDialogComponent {

    dialogData!: DialogData
    dialogServiceForm: FormGroup;
    suggestedReplies: SuggestedReplyType[] = [];
    suggestedMessages: string[] = [];
    webMessageDetail: WebMessageDetail[] = [];
    webMessage!: WebMessageDetail;
    dialogDynamicData!: DialogDynamicData;

    @Output() submit: EventEmitter<DialogRemarks> = new EventEmitter();

    get f() {
        return this.dialogServiceForm.controls;
    }

    constructor(
        private formBuilder: FormBuilder,
        protected ref: NbDialogRef<RemarksDialogComponent>,
        private initialDataService: InitialDataService
    ) {
        this.dialogServiceForm = this.formBuilder.group({
            remarks: [null, [Validators.required]],
        });
        forkJoin(
            [this.initialDataService.getSuggestedReplies,
            this.initialDataService.getWebMessageFormat
            ]
        ).subscribe(([suggestedReplies, webMessageFormat]) => {
            this.suggestedReplies = suggestedReplies.suggestedReply;
            this.webMessageDetail = webMessageFormat.messages;

            for (let reply of this.suggestedReplies) {
                if (reply.menuCode === this.dialogDynamicData.menuCode) {
                    for (let message of reply.suggestedReplies) {
                        this.suggestedMessages.push(message.message)
                    }
                }
            }

            for (let message of this.webMessageDetail) {
                if (message.menuCode === this.dialogDynamicData.menuCode) {
                    this.webMessage = {
                        menuCode: message.menuCode,
                        eventType: message.eventType,
                        message: DynamicMessageUtil.replaceDynamicParameter(message.message,
                            new Map<string, string>([
                                [DynamicMessageConstant.PARAM, this.dialogDynamicData.param ? this.dialogDynamicData.param : ''],
                                [DynamicMessageConstant.PARAM1, this.dialogDynamicData.param1 ? this.dialogDynamicData.param1 : ''],
                            ])), title: message.title,
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
        if (this.dialogServiceForm.invalid) {
            return;
        }
        const remarksDialog: DialogRemarks = {
            remarks: this.dialogServiceForm.controls['remarks'].value,
            event: 'submit',

        }
        this.submit.emit(remarksDialog);
        this.ref.close();
    }

    cancel() {
        this.ref.close();
    }

    selectMessage(message: string) {
        this.dialogServiceForm.reset({
            remarks: message
        });

    }
}