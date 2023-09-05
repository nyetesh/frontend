import { Directive} from '@angular/core';

@Directive({
  selector: '[sclToggleDescription]',
  standalone: true,
  host: {
    class: 'scl-toggle-description'
  }
})
export class SclToggleDescription  {

}
