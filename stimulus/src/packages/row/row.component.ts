import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'scl-row',
  templateUrl: './row.component.html',
  host: {
    class: 'scl-row'
  },
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class SclRow {
  @Input() columns?: number;

  @HostBinding('class')
  get getColumnClass(): string {
    if (this.columns) {
      return `scl-row scl-row-${this.columns}`;
    }
    return '';
  }

   @HostBinding('style.--number-of-columns')
  get numberOfColumns() {
    return this.columns;
  }
}
