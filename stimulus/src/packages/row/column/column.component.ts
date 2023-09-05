import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SclRow } from '../row.component';

@Component({
  selector: 'scl-column',
  standalone: true,
  templateUrl: './column.component.html',
  host: {
     class: 'scl-column'
  },
  imports: [
    CommonModule
  ]
})
export class SclColumn {
   constructor(
     private sclRow: SclRow
   ){}
}
