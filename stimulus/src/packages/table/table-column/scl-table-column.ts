import { Directive, HostBinding, Input, Self, TemplateRef } from '@angular/core';

export type TableColumnAlignmnent = 'left' | 'right' | 'center';

@Directive({
  selector: '[sclTableColumn]',
  standalone: true,
  host: {
    class: 'scl-table-column',
},
})
export class SclTableColumn {
  @Input() header!: string;
  @Input() width?: string;
  @Input() columnAlign?: TableColumnAlignmnent;

  constructor(
    @Self()
    public template: TemplateRef<any>
    ) {}
  }