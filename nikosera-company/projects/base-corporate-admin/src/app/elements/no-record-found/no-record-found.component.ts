import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { NoRecordFoundData } from '../../../core/model/no-record-found';

@Component({
    standalone: true,
    selector: 'xpc-no-record-found',
    templateUrl: './no-record-found.component.html',
    imports: [StimulusModule],
})
export class NoRecordFoundComponent {
    data!: NoRecordFoundData;

    @Input()
    set config(value: NoRecordFoundData) {
        this.data = value;
    }

    get config() {
        return this.data;
    }
}
