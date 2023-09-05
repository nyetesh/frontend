import { Meta, StoryObj } from '@storybook/angular';
import { SclPagination } from './pagination';

const meta: Meta<SclPagination> = {
    title: 'Stimulus/Pagination',
    component: SclPagination,
    tags: ['autodocs'],
    argTypes: {
        total: {
            control: 'number',
            description: 'Total number of items',
        },
        pageSize: {
            control: 'number',
            description: 'Total number of items per page',
        },
        maxPages:{
            control: 'number',
            description: 'Maximum number of pages',
        },
        showRecords: {
            control: 'boolean',
            description: 'Determines whether to show total number of record or not'
        },
        page: {
            control: 'number',
            description: 'Shows the  active page'
        },
        pageSizeOptions: {
            control: 'array',
            description: 'Paze size options'
        },
        changePage: {
            action: 'Change Page',
            description: 'Page change event - outputs `PageChangeEvent: {page: number; pageSize: number;}`'
        },
    },
    args: {
        total: 100,
        pageSize: 10,
        pageSizeOptions: [5, 10, 15, 20]
    },
    
};

export default meta;

type Story = StoryObj<SclPagination>;

export const Default: Story = { }