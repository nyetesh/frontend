import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stepState',
  standalone: true,
})
export class StepStatePipe implements PipeTransform {
  transform(state: string) {
    switch (state) {
        case 'edit' : return 'completed';
         default  : return null;
    }
  }
}