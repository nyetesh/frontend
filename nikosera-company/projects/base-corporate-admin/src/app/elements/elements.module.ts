import { NgModule } from '@angular/core';
import { AlertModule } from './alert';
import { HeaderFilterModule } from './header-filter/header-filter.module';
import { NoRecordFoundModule } from './no-record-found/no-record-found.module';
import { PageHeaderModule } from './page-header/page-header.module';
import { PaginationModule } from './pagination';
import { NbIconModule } from '@nebular/theme';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    exports: [
        AlertModule,
        HeaderFilterModule,
        NoRecordFoundModule,
        PageHeaderModule,
        PaginationModule,
        NbIconModule,
        CdkTableModule,
    ]
})
export class ElementsModule { }