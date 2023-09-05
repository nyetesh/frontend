import { Directive } from '@angular/core';

@Directive({
  selector: '[formControlAction]',
  standalone: true,
  host: {
     class: 'scl-form-control-action'
  }
})
export class SclFormControlAction {

}