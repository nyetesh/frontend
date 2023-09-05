import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbIconLibraries } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { SclPaginationIcons } from './pagination.icon';
import { NbIconModule } from '@nebular/theme';
export interface PageChangeEvent {
    page: number;
    pageSize: number;
}

@Component({
    selector: 'scl-pagination',
    templateUrl: './pagination.html',
    host: {
        class: 'scl-pagination'
    },
    standalone: true,
    imports: [
        NbButtonModule,
        NgSelectModule,
        FormsModule,
        CommonModule,
        NbIconModule,
    ]
})

export class SclPagination implements OnInit {
    totalData!: number;
    currentPageSize: number = 10;
    @Output() changePage = new EventEmitter<PageChangeEvent>();
    @Input() page = 1;
    @Input() maxPages!: number;
    @Input()
    pageSizeOptions = [5, 10, 20, 50];
    @Input() showRecords = true;

    pager: {
        totalItems: number,
        currentPage: number,
        pageSize: number,
        totalPages: number,
        startPage: number,
        endPage: number,
        startIndex: number,
        endIndex: number,
        pages: number[]
    } = {
            totalItems: 0,
            currentPage: 1,
            pageSize: 10,
            totalPages: 9999,
            startPage: 1,
            endPage: 9999,
            startIndex: 1,
            endIndex: 9999,
            pages: this.pageSizeOptions
        };

    get currentRecords() {
        let from = 0;
        let to = 0;
        if (this.pager.totalPages) {
            from = (this.pager.currentPage - 1) * this.pager.pageSize + 1,
                to = (from - 1) + this.pager.pageSize;
        }
        if (to > this.pager.totalItems) {
            to = this.pager.totalItems;
        }
        return {
            from,
            to
        };
    }

        constructor(
        private iconLibraries: NbIconLibraries
    ) {
        this.iconLibraries.registerSvgPack('scl-pagination',SclPaginationIcons );
    }

    ngOnInit() {
        // set page if items array isn't empty
        if (this.total) {
            this.setPage(this.page, false);
        }
    }

    @Input()
    set total(value: number) {
        if (this.totalData !== value) {
            this.totalData = value;
            this.pager = this.paginate(this.total, this.page, this.pageSize, this.maxPages);
        }
    }

    get total() {
        return this.totalData;
    }

    @Input()
    set pageSize(value: number) {
        if (this.pageSize !== value) {
            this.currentPageSize = value;
        }
    }

    get pageSize() {
        return this.currentPageSize;
    }

    setPage(page: number, emitEvent = true) {
        // get new pager object for specified page
        this.pager = this.paginate(this.total, page, this.pageSize, this.maxPages);

        // call change page function in parent component
        this.changePage.emit({ page: this.pager.currentPage, pageSize: this.pager.pageSize });
    }

    itemChange(event: number) {
        this.pageSize = event;
        this.setPage(this.page);
    }

    pageChange(event: number) {
        this.pager.currentPage = event;
        this.setPage(this.pager.currentPage);
    }

    private paginate(
        totalItems: number,
        currentPage: number = 1,
        pageSize: number = 20,
        maxPages: number = 3
    ) {
        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        let startPage: number;
        let endPage: number;
        if (totalPages <= maxPages) {
            // total pages less than max so show all pages
            startPage = 1;
            endPage = totalPages;
        } else {
            // total pages more than max so calculate start and end pages
            const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
            const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                startPage = 1;
                endPage = maxPages;
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                // current page near the end
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            } else {
                // current page somewhere in the middle
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map((i) => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }

}
