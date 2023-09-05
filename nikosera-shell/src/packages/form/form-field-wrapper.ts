import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xpasFormFieldWrapper]',
  standalone: true,
  host : {
    class: "xpas-form-field-wrapper"
  }
})
export class XpasFormFieldWrapper {}
