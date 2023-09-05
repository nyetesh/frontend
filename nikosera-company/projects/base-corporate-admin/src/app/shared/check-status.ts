import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Status } from '@core/model/status';

export enum TYPE {
    SHOW = 'show',
    HIDE = 'hide',
}

@Directive({ standalone: true, selector: '[hasStatus]' })
export class CheckStatusDirective {
    @Input() set hasStatus(status: Status) {
        if (status) {
            this.currentStatus = status.name;
            this.checkStatus();
        }
    }

    @Input() set hasStatusName(status: string) {
        if (status) {
            this.activeStatus = status;
            this.checkStatus();
        }
    }

    @Input() set hasStatusType(type: string) {
        if (type) {
            this.type = type;
            this.checkStatus();
        }
    }

    private currentStatus!: string;
    private activeStatus!: string;
    private hasView = false;
    private type: string = TYPE.SHOW;

    constructor(private templateRef: TemplateRef<HTMLElement>, private viewContainer: ViewContainerRef) {}

    checkStatus() {
        if (this.currentStatus && this.activeStatus) {
            const isStatusMatch = this.currentStatus === this.activeStatus;
            if (
                (isStatusMatch && !this.hasView && this.type === TYPE.SHOW) ||
                (!isStatusMatch && !this.hasView && this.type === TYPE.HIDE)
            ) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            } else {
                this.viewContainer.clear();
                this.hasView = false;
            }
        }
    }
}
