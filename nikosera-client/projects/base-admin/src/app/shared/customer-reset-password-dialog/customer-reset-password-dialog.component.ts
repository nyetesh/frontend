import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { NbDialogModule, NbDialogRef } from "@nebular/theme";
import { StimulusModule } from "stimulus/src/packages/stimulus.module";
import { ButtonGroupPipe } from "../remarks-dialog/button-group.pipe";
import { DialogRemarks } from "../remarks-dialog/dialog-remark";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomerResetPassword } from "./customer-reset-password";
import { SclAlertService } from "stimulus/src/packages/alert/alert.service";
import { forkJoin } from "rxjs";
import { DynamicMessageConstant } from "../../constant/dynamic-message-constant";
import { InitialDataService, WebMessageDetail } from "../../core/services/initial.data/initial.data.service";
import { DynamicMessageUtil } from "../../utils/dynamic-message";
import { DialogDynamicData } from "../no-remarks-dialog/no-remarks-dialog.component";
import { Roles } from "../../constant/roles-constant";

export interface CustomerResetPasswordData {
    title: string;
    headerMessage: string,
    eventType?: string;
}
@Component({
    selector: 'xpa-customer-reset-password-dialog',
    templateUrl: './customer-reset-password-dialog.component.html',
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
export class ResetCustomerPasswordDialogComponent {

    @Output() submit: EventEmitter<CustomerResetPassword> = new EventEmitter();

    resetPasswordForm: FormGroup;
    resetPasswordData!: CustomerResetPasswordData;
    webMessageDetail: WebMessageDetail[] = [];
    webMessage!: WebMessageDetail;
    dialogDynamicData!: DialogDynamicData;

    get f() {
        return this.resetPasswordForm.controls;
    }

    constructor(
        private formBuilder: FormBuilder,
        protected ref: NbDialogRef<ResetCustomerPasswordDialogComponent>,
        private initialDataService: InitialDataService
    ) {
        this.resetPasswordForm = this.formBuilder.group({
            password: [{ value: null, disabled: true }, [Validators.required]],
        })
        this.initializeDialogBox();
    }

    initializeDialogBox() {
        forkJoin(
            [
                this.initialDataService.getWebMessageFormat
            ]
        ).subscribe(([webMessageFormat]) => {
            this.webMessageDetail = webMessageFormat.messages;

            for (let message of this.webMessageDetail) {
                if (message.menuCode === Roles.CUSTOMER_RESET_PASSWORD) {
                    this.webMessage = {
                        menuCode: message.menuCode,
                        eventType: message.eventType,
                        message: DynamicMessageUtil.replaceDynamicParameter(message.message,
                            new Map<string, string>([
                                [DynamicMessageConstant.PARAM, this.dialogDynamicData.param ? this.dialogDynamicData.param : ''],
                                [DynamicMessageConstant.PARAM1, this.dialogDynamicData.param1 ? this.dialogDynamicData.param1 : '']
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

        const resetPassword: CustomerResetPassword = {
            password: this.resetPasswordForm.controls['password'].value,
            event: 'submit',

        }
        this.submit.emit(resetPassword);
        this.ref.close();
    }

    cancel() {
        this.ref.close();
    }

    valueChange(event: any) {
        if (event === true) {
            this.resetPasswordForm.get('password')?.enable();
            this.resetPasswordForm.get('password')?.setValidators(Validators.required);
        } else {
            this.resetPasswordForm.get('password')?.disable();
            this.resetPasswordForm.get('password')?.clearValidators();
        }
        console.log('Event value: ', event);
    }


} 