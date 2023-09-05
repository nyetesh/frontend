import { XpasImageInfo } from '../image-info/image-info.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XpasIllustrationPipe } from './illustration.pipe';

@Component({
  selector: 'xpas-image-card',
  templateUrl: './image-card.component.html',
  standalone: true,
  host : {
    class: "xpas-image-card"
  },
  imports: [
    CommonModule, 
    XpasImageInfo, 
    XpasIllustrationPipe,
],
})
export class XpasImageCard {
  @Input('heading') title!: string;
  @Input() type!: string;
}