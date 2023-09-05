import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XpasPageContainerInfo } from './page-container-info/page-container-info.component';

@Component({
    selector: 'xpas-page-container',
    templateUrl: './page-container.component.html',
    standalone: true,
    imports: [CommonModule, XpasPageContainerInfo],
    host: {
        class: 'xpas-page-container',
    },
})
export class XpasPageContainer {
    @ContentChildren(XpasPageContainerInfo, { descendants: true })
    containerInfo!: QueryList<XpasPageContainerInfo>;

    showDefaultContent: boolean = true;
    private contentType: string = 'default';

    @Input('contentType')
    set show(value: string) {
        let isMessageVisible = false;
        this.contentType = value;
        this.containerInfo?.forEach((item) => {
            if (value === item.type) {
                this.showDefaultContent = false;
                item.showMessage = true;
            } else {
                item.showMessage = false;
            }
            isMessageVisible = item.showMessage || isMessageVisible;
        });
        if (!isMessageVisible) {
            this.showDefaultContent = true;
        }
    }

    get show() {
        return this.contentType;
    }

    ngAfterContentInit() {
        let isMessageVisible = false;
        this.containerInfo?.forEach((item) => {
            if (this.show === item.type) {
                this.showDefaultContent = false;
                item.showMessage = true;
            } else {
                item.showMessage = false;
            }
            isMessageVisible = item.showMessage || isMessageVisible;
        });
        if (!isMessageVisible) {
            this.showDefaultContent = true;
        }
    }
}