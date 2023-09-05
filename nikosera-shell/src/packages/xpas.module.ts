import { NgModule } from "@angular/core";
import { XpasAccountCardHeaderComponent } from "./account-card/account-card-header/account-card-header.component";
import { XpasAccountCardComponent } from "./account-card/account-card.component";
import { XpasColumnSeparator } from "./column-seperator/column-separator";
import { XpasDataListComponent } from "./data-list/data-list.component";
import { XpasDialog } from "./dialog/dialog.component";
import { ExtractInitial } from "./extract-inital/extract-initial";
import { FormContainerComponent } from "./form-container/form-container.component";
import { XpasHeroSection } from "./hero-section/hero-section";
import { XpasHeroSectionColumn } from "./hero-section/hero-section-row/hero-section-column/hero-section-column";
import { XpasHeroSectionRow } from "./hero-section/hero-section-row/hero-section-row";
import { XpasHeroSectionTitle } from "./hero-section/hero-section-title/hero-section-title";
import { XpasImageCard } from "./image-card/image-card.component";
import { XpasImageInfo } from "./image-info/image-info.component";
import { XpasPageHeaderComponent } from "./page-header/page-header.component";
import { XpasSectionHeaderComponent } from "./section-header/section-header.component";
import { XpasSectionSeparator } from "./section-separator/section-separator";
import { XpasSectionShellComponent } from "./section-shell/section-shell.component";
import { XpasShellComponent } from "./shell/shell.component";
import { XpasFormFieldWrapper } from "./form/form-field-wrapper";
import { XpasContainer } from "./container/container.component";
import { XpasPageContainer } from "./page-container/page-container.component";
import { XpasPageContainerInfo } from "./page-container/page-container-info/page-container-info.component";

@NgModule({
    imports: [
        XpasShellComponent,
        XpasSectionShellComponent,
        XpasShellComponent,
        XpasPageHeaderComponent,
        FormContainerComponent,
        XpasAccountCardComponent,
        XpasAccountCardHeaderComponent,
        XpasImageCard,
        XpasImageInfo,
        XpasHeroSection,
        XpasHeroSectionTitle,
        XpasHeroSectionRow,
        XpasHeroSectionColumn,
        XpasSectionSeparator,
        XpasColumnSeparator,
        XpasDataListComponent,
        XpasDialog,
        ExtractInitial,
        XpasSectionHeaderComponent,
        XpasFormFieldWrapper,
        XpasContainer,
        XpasPageContainer,
        XpasPageContainerInfo,
    ],
    exports: [
        XpasShellComponent,
        XpasSectionShellComponent,
        XpasShellComponent,
        XpasPageHeaderComponent,
        FormContainerComponent,
        XpasAccountCardComponent,
        XpasAccountCardHeaderComponent,
        XpasImageCard,
        XpasImageInfo,
        XpasHeroSection,
        XpasHeroSectionTitle,
        XpasHeroSectionRow,
        XpasHeroSectionColumn,
        XpasSectionSeparator,
        XpasColumnSeparator,
        XpasDataListComponent,
        XpasDialog,
        ExtractInitial,
        XpasSectionHeaderComponent,
        XpasFormFieldWrapper,
        XpasContainer,
        XpasPageContainer,
        XpasPageContainerInfo,
    ],
})
export class XpasModule { }