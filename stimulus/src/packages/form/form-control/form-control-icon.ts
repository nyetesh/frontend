import { Directive } from '@angular/core';

@Directive({
  selector: '[formControlIcon]',
  standalone: true,
  host: {
     class: 'scl-form-control-icon'
  }
})
export class SclFormControlIcon {

}