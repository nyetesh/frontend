import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NbCheckboxModule, NbComponentOrCustomStatus } from '@nebular/theme';
import { Meta, StoryObj } from '@storybook/angular';

@Component({
    selector: 'storybook-checkbox',
    standalone: true,
    imports: [CommonModule, NbCheckboxModule],
    template: `
        <nb-checkbox
            [disabled]="disabled"
            [checked]="checked"
            [indeterminate]="indeterminate"
        >
            Checkbox
        </nb-checkbox>
    `,
})
class StorybookCheckboxComponent {
    @Input() disabled: boolean = false;

    @Input() indeterminate: boolean = false;

    @Input() checked: boolean = false;
}

const meta: Meta<StorybookCheckboxComponent> = {
    title: 'Stimulus/Checkbox',
    component: StorybookCheckboxComponent,
    tags: ['autodocs'],
    render: (args) => ({
        props: {
            ...args,
        },
    }),
};

export default meta;

type Story = StoryObj<StorybookCheckboxComponent>;

export const Unchecked: Story = {
    args: {
        disabled: false,
        indeterminate: false,
        checked: true,
    },
};
