import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonGroup',
  standalone:true
})
export class ButtonGroupPipe implements PipeTransform {
  transform(items: any[], eventType: string): any[] {
    return items.filter(item => item.eventType === eventType);
  }
}