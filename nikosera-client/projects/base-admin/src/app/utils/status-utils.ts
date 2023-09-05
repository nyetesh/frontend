import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
        {
        name: 'status',
        standalone: true
        }
    )
    
export class StatusPipe implements PipeTransform {
showDangerStatus:string[]= ['Block', 'Delete', 'Reject'];

    transform(eventType: string): string {
        if (this.showDangerStatus.includes(eventType)) {
            return 'danger';
        }
        return 'basic';
    }
}
