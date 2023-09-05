import { Injectable, Injector, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { SclAlert } from './alert';
import { AlertData, defaultAlertConfig, AlertDataDefault, AlertDataWithLink} from './alert-config';
import { AlertRef } from './alert-ref';

@Injectable()
export class SclAlertService {
  private lastAlert!: AlertRef;
  private renderer: Renderer2;

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    rendererFactory: RendererFactory2
    ) 
    { this.renderer = rendererFactory.createRenderer(null, null);
    }

  show(data: AlertData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const alertRef = new AlertRef(overlayRef);
    
    this.lastAlert = alertRef;
    
    const injector = this.getInjector(data, alertRef, this.parentInjector);
    const alertPortal = new ComponentPortal(SclAlert, null, injector);
    
    overlayRef.attach(alertPortal);

    const alertBox = document.getElementById('alertBox');
    this.renderer.addClass(alertBox, `alert-${data.type}`);

    return alertRef;
  }

  // Warning Alert
  warning(data: AlertDataDefault) {
    data.type = data.type || 'warning'
    this.show(data);
  }

  // Warning Alert with Link
  warningWithLink(data: AlertDataWithLink) {
    data.type = data.type || 'warning';
    this.show(data);
    data.link?.type === data.link?.type ? data.link?.type : 'outline'
  }

  // Success Alert
  success(data: AlertDataDefault) {
    data.type = data.type || 'success';
    this.show(data);
  }
  // Success Alert with Link
  successWithLink(data: AlertDataWithLink) {
    data.type = data.type || 'success';
    this.show(data);
    data.link?.type === data.link?.type ? data.link?.type : 'outline'
  }

  // Info Alert
  info(data: AlertDataDefault) {
    data.type = data.type || 'info';
    this.show(data);
  }
  
  // Info Alert with Link
  infoWithLink(data: AlertDataWithLink) {
    data.type = data.type || 'info';
    this.show(data);
    data.link?.type === data.link?.type ? data.link?.type : 'outline'
  }

  // Danger Alert
  danger(data: AlertDataDefault) {
    data.type = data.type || 'danger';
    this.show(data);
  }

  // Danger Alert with Link
  dangerWithLink(data: AlertDataWithLink) {
    data.type = data.type || 'danger';
    this.show(data);
    data.link?.type === data.link?.type ? data.link?.type : 'outline'
  }

  getPositionStrategy() {
    return this.overlay.position()
      .global()
      .bottom(this.getPosition())
      .right((defaultAlertConfig.position?.right || 0) + 'px');
  }

  getPosition() {
    const lastAlertIsVisible = this.lastAlert && this.lastAlert.isVisible();
    const position = lastAlertIsVisible
      ? this.lastAlert.getPosition().top
      : (defaultAlertConfig.position?.bottom || 0);
  
    return position + 'px';
  }

  getInjector(data: AlertData, alertRef: AlertRef, parentInjector: Injector) {
    const tokens = new WeakMap();

    tokens.set(AlertData, data);
    tokens.set(AlertRef, alertRef);

    return new PortalInjector(parentInjector, tokens);
  }
}