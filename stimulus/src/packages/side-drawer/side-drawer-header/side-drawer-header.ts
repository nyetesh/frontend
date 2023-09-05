import { Component, TemplateRef, Input, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SclSideDrawerService } from '../side-drawer.service';
import { NbButtonModule } from '@nebular/theme';
import { ComponentRef } from 'react';

@Directive({
  selector: 'scl-side-drawer-header',
  standalone: true,
  host: {
    class: 'scl-side-drawer-header'
  }

})
export class SclSideDrawerHeader {
  content!: ComponentRef<any>;

  @Input() heading!: string;

  constructor(
    private sclDrawerService: SclSideDrawerService
  ) {

  }

  close() {
    this.sclDrawerService.close();
  }

}
