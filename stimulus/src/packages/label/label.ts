import { Directive } from '@angular/core';

@Directive({
  selector: '[sclLabel]',
  standalone: true,
  host: {
     class: 'scl-label'
  }
})
export class SclLabel {

}