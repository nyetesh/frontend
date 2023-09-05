import { Injectable, ComponentRef, Renderer2, RendererFactory2, Type } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
    providedIn: 'root'
})
export class SclSideDrawerService {
    private overlayRef: OverlayRef | null = null;
    private compRef: ComponentRef<any> | null = null;
    private renderer: Renderer2;

    constructor(private overlay: Overlay, rendererFactory: RendererFactory2) {
      this.renderer = rendererFactory.createRenderer(null, null);
    }
  
    open<T>(component: Type<T>, data: any): ComponentRef<T> | null {
      const positionStrategy = this.overlay.position()
      .global()
      .right()
      .top();

      this.overlayRef = this.overlay.create({
        positionStrategy,
        hasBackdrop: true,
        panelClass: 'scl-side-drawer',
      });
  
      const componentPortal = new ComponentPortal(component);
      this.compRef = this.overlayRef.attach(componentPortal);
      this.compRef.instance.data = data;
      
      const el = this.compRef.location.nativeElement;
      this.renderer.addClass(el, 'scl-side-drawer__content');
      this.renderer.addClass(document.body, 'scl-side-drawer-open');

      return this.compRef;
    }
  
    close(): void {
      if(this.overlayRef) {
        this.overlayRef.detach();
        this.overlayRef = null;
        this.compRef = null;
        this.renderer.removeClass(document.body, 'scl-side-drawer-open');
      }
    }
}