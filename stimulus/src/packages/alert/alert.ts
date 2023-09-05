import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { AlertData, defaultAlertConfig } from './alert-config';
import { AlertRef } from './alert-ref';
import { alertAnimations, AlertAnimationState } from './alert-animation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SclButtonGroup } from '../button-group/button-group';
import { NbButtonModule, NbIconLibraries, NbIconModule } from '@nebular/theme';
import { ALERT_ICON } from './alert-icon';


@Component({
  selector: 'scl-alert',
  templateUrl: './alert.html',
  standalone: true,
  animations: [alertAnimations.fadeAlert],
  imports: [
    CommonModule,
    RouterModule,
    SclButtonGroup,
    NbButtonModule,
    NbIconModule
  ]
})
export class SclAlert implements OnInit, OnDestroy {
  animationState: AlertAnimationState = 'default';

  private intervalId!: any;
  alertConfig = defaultAlertConfig;

  constructor(
    readonly data: AlertData,
    readonly ref: AlertRef,
    private iconLibraries: NbIconLibraries
  ) {
    this.iconLibraries.registerSvgPack('alert-icon', ALERT_ICON);
  }

  ngOnInit() {
    this.intervalId = setTimeout(() => this.animationState = 'closing', 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  close() {
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as AlertAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
}
