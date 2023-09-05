import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
    NbButton,
    NbButtonModule,
    NbIconModule,
    NbComponentOrCustomStatus,
    NbComponentSize,
    NbIcons,
    NbIconLibraries,
} from '@nebular/theme';
import { Meta, StoryObj } from '@storybook/angular';

const SclTestIcons: NbIcons = {
    setting: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.735 1.333a6.68 6.68 0 0 0-1.516.18.5.5 0 0 0-.384.432l-.106.968a1 1 0 0 1-1.396.806h-.001l-.889-.392a.5.5 0 0 0-.566.116 6.654 6.654 0 0 0-1.522 2.624.5.5 0 0 0 .183.548l.788.578a1 1 0 0 1 0 1.614l-.788.577a.5.5 0 0 0-.183.548c.3.996.83 1.888 1.522 2.625a.5.5 0 0 0 .566.115l.889-.391a1 1 0 0 1 1.397.806l.106.968a.5.5 0 0 0 .383.432c.484.113.991.18 1.517.18.526 0 1.032-.067 1.516-.18a.5.5 0 0 0 .384-.432l.106-.968a.999.999 0 0 1 1.396-.806l.89.39a.5.5 0 0 0 .566-.114 6.658 6.658 0 0 0 1.522-2.625.5.5 0 0 0-.183-.548l-.788-.577a.999.999 0 0 1 0-1.614l.788-.577a.5.5 0 0 0 .183-.548 6.657 6.657 0 0 0-1.522-2.625.5.5 0 0 0-.566-.115l-.89.391a1 1 0 0 1-1.396-.806l-.106-.968a.5.5 0 0 0-.383-.432 6.664 6.664 0 0 0-1.517-.18zm0 1c.325 0 .637.059.95.114l.062.574a2.002 2.002 0 0 0 2.793 1.614l.529-.233c.406.488.727 1.038.952 1.642l-.469.343a2.001 2.001 0 0 0 0 3.226l.469.343a5.622 5.622 0 0 1-.952 1.642l-.529-.233a2.001 2.001 0 0 0-2.793 1.614l-.063.574c-.312.055-.624.114-.95.114-.324 0-.636-.059-.948-.114l-.063-.575a2.002 2.002 0 0 0-2.793-1.613l-.53.233a5.616 5.616 0 0 1-.95-1.642l.468-.343a2.001 2.001 0 0 0 0-3.226l-.469-.344a5.617 5.617 0 0 1 .953-1.641l.528.232a2 2 0 0 0 2.793-1.613l.063-.574c.312-.055.624-.114.949-.114zm0 3A2.674 2.674 0 0 0 5.068 8c0 1.467 1.2 2.667 2.667 2.667 1.467 0 2.667-1.2 2.667-2.667 0-1.467-1.2-2.667-2.667-2.667zm0 1c.926 0 1.667.74 1.667 1.667a1.66 1.66 0 0 1-1.667 1.667A1.66 1.66 0 0 1 6.068 8c0-.926.74-1.667 1.667-1.667z" 
    fill="currentColor"/>
</svg>`,
};
@Component({
    selector: 'storybook-button',
    standalone: true,
    imports: [CommonModule, NbButtonModule, NbIconModule],
    template: `
        <button
            type="button"
            nbButton
            [status]="status"
            [ghost]="ghost"
            [outline]="outline"
            [size]="size"
        >
            <nb-icon icon="setting" pack="scl-button" *ngIf="isLeft"></nb-icon>
            <ng-container *ngIf="!iconOnly"> Button </ng-container>
            <nb-icon icon="setting" pack="scl-button" *ngIf="isRight"></nb-icon>
        </button>
    `,
})
class StorybookButtonComponent {
    /**
     * Status of NbButton
     */
    @Input()
    status!: NbComponentOrCustomStatus;

    @Input()
    ghost: boolean = false;

    @Input()
    outline: boolean = false;

    /**
     * Sizes of NbButton
     */
    @Input()
    size!: NbComponentSize;

    @Input()
    icon: boolean = false;

    isLeft = false;
    isRight = false;

    @Input()
    set iconPosition(position: 'left' | 'right' | 'both') {
        this.isLeft = position === 'left' || position === 'both';
        this.isRight = position === 'right' || position === 'both';
    }

    @Input()
    iconOnly: boolean = false;

    constructor(private iconLibraries: NbIconLibraries) {
        this.iconLibraries.registerSvgPack('scl-button', SclTestIcons);
    }
}

const meta: Meta<StorybookButtonComponent> = {
    title: 'Stimulus/Button',
    component: StorybookButtonComponent,
    // tags: ['autodocs'],
    render: (args) => ({
        props: {
            ...args,
        },
    }),
    argTypes: {
        iconPosition: {
            options: ['left', 'right', 'both', 'none'],
            control: { type: 'radio' },
        },
        status: {
            options: ['basic', 'primary', 'danger'],
            control: { type: 'select' },
            defaultValue: 'basic',
        },
        size: {
            options: ['small', 'medium', 'tiny'],
            control: { type: 'select' },
            defaultValue: 'medium',
        },
        iconOnly: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

type Story = StoryObj<StorybookButtonComponent>;

export const Fill: Story = {
    args: {
        status: 'primary',
        size: 'small',
        iconOnly: false,
    },
};

export const Outline: Story = {
    args: {
        outline: true,
        status: 'basic',
        size: 'small',
        iconOnly: false,
    },
};

export const Link: Story = {
    args: {
        ghost: true,
        status: 'basic',
        size: 'small',
        iconOnly: false,
    },
};

export const Icon: Story = {
    args: {
        iconPosition: 'both',
        status: 'basic',
        size: 'small',
    },
};
