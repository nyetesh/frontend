import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { NbDialogModule, NbDialogRef } from "@nebular/theme";
import { StimulusModule } from "stimulus/src/packages/stimulus.module";
import { ButtonGroupPipe } from "../remarks-dialog/button-group.pipe";
import { DialogRemarks } from "../remarks-dialog/dialog-remark";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ResetPassword } from "./reset-password";
import { SclAlertService } from "stimulus/src/packages/alert/alert.service";
import { DynamicMessageConstant } from "../../constant/dynamic-message-constant";
import { Roles } from "../../constant/roles-constant";
import { InitialDataService, SuggestedReplyType, WebMessageDetail } from "../../core/services/initial.data/initial.data.service";
import { DynamicMessageUtil } from "../../utils/dynamic-message";
import { DialogDynamicData } from "../no-remarks-dialog/no-remarks-dialog.component";
import { forkJoin } from "rxjs";

export interface ResetPasswordData {
    title: string;
    headerMessage: string,
    eventType: string;
}
@Component({
    selector: 'xpa-reset-password-dialog',
    templateUrl: './reset-password-dialog.component.html',
    standalone: true,
    imports: [
        NbDialogModule,
        StimulusModule,
        CommonModule,
        ButtonGroupPipe
    ],
    providers: [
        ButtonGroupPipe
    ]
})
export class ResetPasswordDialogComponent {

    @Output() submit: EventEmitter<ResetPassword> = new EventEmitter();

    resetPasswordForm: FormGroup;
    resetPasswordData!: ResetPasswordData;
    suggestedReplies: SuggestedReplyType[] = [];
    suggestedMessages: string[] = [];
    webMessageDetail: WebMessageDetail[] = [];
    webMessage!: WebMessageDetail;
    dialogDynamicData!: DialogDynamicData;

    get f() {
        return this.resetPasswordForm.controls;
    }

    constructor(
        private formBuilder: FormBuilder,
        protected ref: NbDialogRef<ResetPasswordDialogComponent>,
        private alertService: SclAlertService,
        private initialDataService: InitialDataService
    ) {
        this.resetPasswordForm = this.formBuilder.group({
            newPassword: [null, [Validators.required]],
            confirmPassword: [null, [Validators.required]],
        })
        forkJoin(
            [this.initialDataService.getSuggestedReplies,
            this.initialDataService.getWebMessageFormat
            ]
        ).subscribe(([suggestedReplies, webMessageFormat]) => {
            this.suggestedReplies = suggestedReplies.suggestedReply;
            this.webMessageDetail = webMessageFormat.messages;
            for (let message of this.webMessageDetail) {
                if (message.menuCode === Roles.ADMIN_RESET_PASSWORD_MANUAL) {
                    this.webMessage = {
                        menuCode: message.menuCode,
                        eventType: message.eventType,
                        message: DynamicMessageUtil.replaceDynamicParameter(message.message,
                            new Map<string, string>([
                                [DynamicMessageConstant.PARAM, this.dialogDynamicData.param ? this.dialogDynamicData.param : ''],
                            ])),
                        title: message.title,
                    }
                }
            }
            this.resetPasswordData = {
                title: this.webMessage.title,
                headerMessage: this.webMessage.message,
                eventType: this.webMessage.eventType,
            }
        });

    }

    onSubmit() {

        if (this.resetPasswordForm.invalid) {
            return;
        }
        const newPassword = this.resetPasswordForm.controls['newPassword'].value;
        const confirmPassword = this.resetPasswordForm.controls['confirmPassword'].value;

        if (newPassword != confirmPassword) {
            this.alertService.show({
                description: 'New password and confirm password doesnot match',
                type: 'warning',
                heading: 'Password Not Matched',
            });
            return;
        }


        const resetPassword: ResetPassword = {

            newPassword: this.resetPasswordForm.controls['newPassword'].value,
            confirmPassword: this.resetPasswordForm.controls['confirmPassword'].value,
            event: 'submit',

        }
        this.submit.emit(resetPassword);
        this.ref.close();
    }

    cancel() {
        this.ref.close();
    }


} 