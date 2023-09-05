import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, Input, ContentChildren, QueryList, AfterContentInit, HostBinding} from '@angular/core';
import { SclTableColumn } from './table-column/scl-table-column';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'scl-table',
  templateUrl: './table.html',
  standalone: true,
  styleUrls: ['./table.scss'],
  imports: [
    CommonModule,
    SclTableColumn,
    CdkTableModule
],
})
export class SclTable implements AfterContentInit {
  @Input() dataset!: any[];
  
  @ContentChildren(SclTableColumn) columnTemplates!: QueryList<SclTableColumn>;

  displayedColumns!: string[];

  @Input()
  unStriped?: string = 'false';

  @HostBinding('class.scl-table-unstriped')
  get removeStripe() {
    return coerceBooleanProperty(this.unStriped);
  }

  ngAfterContentInit() {
    this.displayedColumns = this.columnTemplates.toArray().map((column, index) => `column-${index}`);
  }
}