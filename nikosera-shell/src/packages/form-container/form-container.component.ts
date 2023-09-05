import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'xpas-form-container',
  standalone: true,
  imports: [CommonModule],
 
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  host: {
    class: 'xpas-form-container'
  },
  encapsulation:ViewEncapsulation.None
})
export class FormContainerComponent {

}
