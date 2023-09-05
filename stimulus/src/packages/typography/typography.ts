import { Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';
import { NbComponentOrCustomStatus, NbStatusService } from '@nebular/theme';

@Directive({
    selector: '[sclText]',
    standalone: true,
    host: {
        class: 'scl-text'
    }
})
export class SclText {

     constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    @Input()
    textType?: string;

    @Input() weight?: string;
    @HostBinding('class.scl-text--body-large')
    get bodyLarge() {
        return this.textType === 'bodyLarge';
    }

    @HostBinding('class.scl-text--body-small')
    get bodySmall() {
        return this.textType === 'bodySmall';
    }

    @HostBinding('class.scl-text--body-medium')
    get bodyMedium() {
        return this.textType === 'bodyMedium';
    }

    @HostBinding('class.scl-text--display-large')
    get displayLarge() {
        return this.textType === 'displayLarge';
    }

    @HostBinding('class.scl-text--display-medium')
    get displayMedium() {
        return this.textType === 'displayMedium';
    }

    @HostBinding('class.scl-text--display-small')
    get displaySmall() {
        return this.textType === 'displaySmall';
    }

    @HostBinding('class.scl-text--headline-large')
    get headlineLarge() {
        return this.textType === 'headlineLarge';
    }

    @HostBinding('class.scl-text--headline-medium')
    get headlineMedium() {
        return this.textType === 'headlineMedium';
    }

    @HostBinding('class.scl-text--headline-small')
    get headlineSmall() {
        return this.textType === 'headlineSmall';
    }

    @HostBinding('class.scl-text--title-large')
    get titlelarge() {
        return this.textType === 'titlelarge';
    }

    @HostBinding('class.scl-text--title-medium')
    get titleMedium() {
        return this.textType === 'titleMedium';
    }

    @HostBinding('class.scl-text--title-small')
    get titleSmall() {
        return this.textType === 'titleSmall';
    }

    @HostBinding('class.scl-text--button-large')
    get buttonlarge() {
        return this.textType === 'buttonlarge';
    }

    @HostBinding('class.scl-text--button-medium')
    get buttonMedium() {
        return this.textType === 'buttonMedium';
    }

    @HostBinding('class.scl-text--button-small')
    get buttonSmall() {
        return this.textType === 'buttonSmall';
    }

    @HostBinding('class.scl-text--label-large')
    get labellarge() {
        return this.textType === 'labelLarge';
    }

    @HostBinding('class.scl-text--label-medium')
    get labelMedium() {
        return this.textType === 'labelMedium';
    }

    @HostBinding('class.scl-text--label-small')
    get labelSmall() {
        return this.textType === 'labelSmall';
    }   

    ngOnInit() {
    this.applyFontWeightClass();
    }


    private applyFontWeightClass() {
    let fontWeightClass: string;

    switch (this.weight) {
      case 'bold':
        fontWeightClass = 'scl-text--bold';
        break;
      case 'semi-bold':
        fontWeightClass = 'scl-text--semi-bold';
        break;
      case 'light':
        fontWeightClass = 'scl-text--light';
        break;
      case 'medium':
        fontWeightClass = 'scl-text--medium';
        break;
      default:
        fontWeightClass = '';
        break;
    }

    if (fontWeightClass) {
      this.renderer.addClass(this.elementRef.nativeElement, fontWeightClass);
    }
  }
}
