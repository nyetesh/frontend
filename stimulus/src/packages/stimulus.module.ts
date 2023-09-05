import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbDialogModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbRadioModule,
    NbRouteTabsetModule,
    NbSpinnerModule,
    NbTimepickerModule,
    NbToastrModule,
    NbToggleModule,
    NbTooltipModule,
    NbUserModule
} from '@nebular/theme';
import { SclPagination } from './pagination/pagination';
import { SclTable } from './table/table';
import { SclTableColumn } from './table/table-column/scl-table-column';

import { QuillModule } from 'ngx-quill';

import { ReactiveFormsModule } from '@angular/forms';
import { SclAccordion } from './accordion/accordion';
import { SclAccordionExpandAll } from './accordion/accordion-expand-all/accordion-expand-all';
import { SclAlert } from './alert/alert';
import { SclAlertService } from './alert/alert.service';
import { SclBadge } from './badge/badge';
import { SclButtonGroup } from './button-group/button-group';
import { SclButtonGroupHeader } from './button-group/button-group-header/button-group-header';
import { SclColumnText } from './column-text/column-text';
import { SclContextMenu } from './dropdown/context-menu';
import { SclContextMenuContent } from './dropdown/context-menu-content/context-menu-content';
import { SclContextMenuItem } from './dropdown/context-menu-item';
import { SclContextMenuList } from './dropdown/context-menu-list/context-menu-list';
import { SclFileUploader } from './file-uploader/file-uploader';
import { SclFilter } from './filter/filter';
import { SclFormField } from './form/form-control/form-field';
import { SclFormMessage } from './form/form-message/form-message';
import { SclSelectInputField } from './form/select-input-field/select-input-field';
import { SclValidateAndSubmit } from './form/validate-and-submit';
import { SclInfoColumn } from './info-column/info-column';
import { SclLabel } from './label/label';
import { SclLink } from './link/link';
import { SclRibbon } from './ribbon/ribbon';
import { SclColumn } from './row/column/column.component';
import { SclRow } from './row/row.component';
import { SclSectionLineSeparator } from './section-line-separator/section-line-separator';
import { SclStep } from './stepper/step/step';
import { SclStepper } from './stepper/stepper';
import { SclStepperNext } from './stepper/stepper-button/stepper-next';
import { SclStepperPrevious } from './stepper/stepper-button/stepper-previous';
import { SclTreeview } from './treeview/treeview';
import { SclText } from './typography/typography';

import { SclFormControlAction } from './form/form-control/form-control-action';
import { SclToggleDescription } from './toggle/toggle-description/toggle-description';
import { SclFormControlIcon } from './form/form-control/form-control-icon';

@NgModule({
    imports: [
        RouterModule,
        NbButtonModule,
        NbInputModule,
        NbCardModule,
        NbRadioModule,
        NbToggleModule,
        NbRouteTabsetModule,
        SclPagination,
        ReactiveFormsModule,
        NbFormFieldModule,
        SclTable,
        SclTableColumn,
        SclFormField,
        SclFormMessage,
        SclValidateAndSubmit,
        NbToastrModule.forRoot(),
        NbDialogModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbTimepickerModule.forRoot(),
        NbCheckboxModule,
        QuillModule,
        SclRow,
        SclColumn,
        SclLabel,
        SclButtonGroup,
        SclContextMenu,
        SclContextMenuContent,
        SclContextMenuList,
        SclContextMenuItem,
        SclStepper,
        SclStep,
        SclStepperPrevious,
        SclStepperNext,
        SclAlert,
        SclFilter,
        SclTreeview,
        SclFileUploader,
        SclBadge,
        SclText,
        SclButtonGroupHeader,
        SclAccordion,
        SclInfoColumn,
        SclAccordionExpandAll,
        SclSelectInputField,
        SclColumnText,
        SclRibbon,
        SclInfoColumn,
        SclLink,
        SclFormControlAction,
        SclToggleDescription,
        SclSectionLineSeparator,
        SclFormControlIcon,
    ],

    exports: [

        RouterModule,
        NbButtonModule,
        NbInputModule,
        NbCardModule,
        NbRadioModule,
        NbToggleModule,
        NbRouteTabsetModule,
        SclPagination,
        NbTooltipModule,
        NbSpinnerModule,
        NbIconModule,
        NbDialogModule,
        ReactiveFormsModule,
        NbFormFieldModule,
        NbDatepickerModule,
        NbTimepickerModule,
        NbCheckboxModule,
        NbUserModule,
        SclTable,
        SclTableColumn,
        QuillModule,
        SclFormField,
        SclFormMessage,
        SclValidateAndSubmit,
        SclRow,
        SclColumn,
        SclLabel,
        NbLayoutModule,
        SclButtonGroup,
        SclContextMenu,
        SclContextMenuContent,
        SclContextMenuList,
        SclContextMenuItem,
        SclStepper,
        SclStep,
        SclStepperPrevious,
        SclStepperNext,
        SclFilter,
        SclTreeview,
        SclFileUploader,
        SclBadge,
        SclText,
        SclButtonGroupHeader,
        NbAccordionModule,
        SclAccordion,
        SclInfoColumn,
        SclAccordionExpandAll,
        SclSelectInputField,
        SclColumnText,
        SclRibbon,
        SclInfoColumn,
        SclLink,
        SclFormControlAction,
        SclToggleDescription,
        SclSectionLineSeparator,
        SclFormControlIcon,
    ],
    declarations: [
    ],
    providers: [
        SclAlertService
    ]
})
export class StimulusModule { }
