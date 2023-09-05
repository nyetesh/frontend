import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'scl-button-group',
  templateUrl: './button-group.html',
  host: {
     class: 'scl-button-group'
  },
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class SclButtonGroup {

}
