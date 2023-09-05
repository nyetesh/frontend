import { Injectable } from '@angular/core';
import { Page } from './page';
import { FilterFormGroup } from 'stimulus/src/packages/filter/filter';
import { SearchFilter } from './model/search-filter-request';
import { SearchParam } from './model/filter-request';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class SearchQueryParamMapper {
    getSearchRequest(page: Page, filters: any) {
        const searchParams = Object.keys(filters)
            .filter((key) => !!filters[key])
            .map((key) => ({
                key,
                value: filters[key],
            }));

        const paginationParam = {
            page: page.page - 1,
            size: page.pageSize,
        };

        return {
            paginationParam: { ...paginationParam },
            searchParams: [...searchParams],
        };
    }
}
