import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';

@Directive({
  selector: 'scl-form-message',
  host: {
    class: 'caption scl-caption',
    '[class.status-basic]': 'type === "basic"',
    '[class.status-primary]': 'type === "primary"',
    '[class.status-success]': 'type === "success"',
    '[class.status-warning]': 'type === "warning"',
    '[class.status-danger]': 'type === "danger"',
    '[class.status-info]': 'type === "info"',
    '[class.status-control]': 'type === "control"',
  },
  standalone: true,
})
export class SclFormMessage {
  @Input()
  type: NbComponentStatus = 'basic';

  get message(): string  {
    return (this.elRef.nativeElement as HTMLElement).textContent || '';
  }
  
  set message(text: string) {
    const content = this.renderer.createText(text);
    while (this.elRef.nativeElement.firstChild) {
      this.renderer.removeChild(this.elRef.nativeElement, this.elRef.nativeElement.firstChild);
    }
    this.renderer.appendChild(this.elRef.nativeElement, content);
  }

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
  ) { }
}