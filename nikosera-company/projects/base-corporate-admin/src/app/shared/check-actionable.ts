import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { StatusService } from './status-service';
import { Status } from '../../core/model/status';

@Directive({ standalone: true, selector: '[isActionable]' })
export class CheckActionableDirective {
    private hasView = false;

    constructor(
        private templateRef: TemplateRef<HTMLElement>,
        private viewContainer: ViewContainerRef,
        private statusService: StatusService
    ) {}

    @Input() set isActionable(status: Status) {
        const value = this.statusService.checkStatusapproved(status);
        if (value && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (!value && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
