


import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: 'div [sclSectionLineSeparator]',
  standalone: true,
})
export class SclSectionLineSeparator implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'scl-section-line-separator');
  }
}
