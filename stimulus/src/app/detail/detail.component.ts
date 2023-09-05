import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XpasPageHeaderComponent } from 'nikosera-shell/src/packages';
import { SclSideDrawerService } from 'src/packages/side-drawer/side-drawer.service';
import { StimulusModule } from 'src/packages/stimulus.module';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    StimulusModule,
    XpasPageHeaderComponent
  ]
})
export class DetailComponent {
  @Input() data: any;

  constructor(private slideDrawerService: SclSideDrawerService) { }

  close() {
    this.slideDrawerService.close();
  }

}
