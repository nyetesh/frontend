import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NbDialogModule, NbDialogRef } from "@nebular/theme";
import { StimulusModule } from "stimulus/src/packages/stimulus.module";
import { ButtonGroupPipe } from "../remarks-dialog/button-group.pipe";
import { InitialDataService, WebMessageDetail } from "../../core/services/initial.data/initial.data.service";
import { forkJoin } from "rxjs";
import { DynamicMessageUtil } from "../../utils/dynamic-message";
import { DynamicMessageConstant } from "../../constant/dynamic-message-constant";

export interface NoRemarksData {
    title: string;
    headerMessage: string,
}
export interface DialogDynamicData {
    menuCode: string;
    param?: string;
    param1?: string;
}
@Component({
    selector: 'xpa-remarks-dialog',
    templateUrl: './no-remarks-dialog.component.html',
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
export class NoRemarksDialogComponent {

    noRemarksData!: NoRemarksData;
    webMessageDetail: WebMessageDetail[] = [];
    webMessage!: WebMessageDetail;
    dialogDynamicData!: DialogDynamicData;

    @Output() submit: EventEmitter<string> = new EventEmitter();

    constructor(
        protected ref: NbDialogRef<NoRemarksDialogComponent>,
        private initialDataService: InitialDataService
    ) {
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
                if (message.menuCode === this.dialogDynamicData.menuCode) {
                    this.webMessage = {
                        menuCode: message.menuCode,
                        eventType: message.eventType,
                        message: DynamicMessageUtil.replaceDynamicParameter(message.message,
                            new Map<string, string>([
                                [DynamicMessageConstant.PARAM, this.dialogDynamicData.param ? this.dialogDynamicData.param : ''],
                                [DynamicMessageConstant.PARAM1, this.dialogDynamicData.param1 ? this.dialogDynamicData.param1 : ''],
                            ])),
                        title: message.title,
                    }
                }
            }

            this.noRemarksData = {
                title: this.webMessage.title,
                headerMessage: this.webMessage.message,
            }
        });
    }

    onSubmit() {
        this.submit.emit('submit');
        this.ref.close();
    }
    cancel() {
        this.ref.close();
    }
}