import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'XpasExtractInitial',
    standalone: true
})
export class ExtractInitial implements PipeTransform {
    transform(name: string): string {
        if (name) {
            return name.charAt(0).toUpperCase();
        } 
        return '';
    }
}