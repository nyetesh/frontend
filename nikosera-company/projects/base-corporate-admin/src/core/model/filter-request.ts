export interface SearchParam {
    key: string;
    value: string;
}

export interface PaginationParam {
    page: string;
    size: string;
}

export interface FilterRequest {
    searchParams: SearchParam[];
    paginationParam: PaginationParam;
}

export class StatusFilter {
    static readonly CREATE_APPROVE = { value: 'CREATE_APPROVE', label: 'CREATED' };
    static readonly CREATE_PENDING = { value: 'CREATE_PENDING', label: 'CREATE PENDING' };
    static readonly EDIT_APPROVE = { value: 'EDIT_APPROVE', label: 'EDITED' };
    static readonly EDIT_PENDING = { value: 'EDIT_PENDING', label: 'EDIT PENDING' };
    static readonly BLOCK_APPROVE = { value: 'BLOCKED_APPROVE', label: 'BLOCKED' };
    static readonly BLOCK_PENDING = { value: 'BLOCK_PENDING', label: 'BLOCK PENDING' };
    static readonly UNBLOCK_PENDING = { value: 'UNBLOCK_PENDING', label: 'UNBLOCK PENDING' };
    static readonly DELETE_PENDING = { value: 'DELETE_PENDING', label: 'DELETE PENDING' };
}

export const ALL_STATUS_FILTER: StatusFilter[] = [
    StatusFilter.CREATE_APPROVE,
    StatusFilter.CREATE_PENDING,
    StatusFilter.EDIT_APPROVE,
    StatusFilter.EDIT_PENDING,
    StatusFilter.BLOCK_APPROVE,
    StatusFilter.BLOCK_PENDING,
    StatusFilter.UNBLOCK_PENDING,
    StatusFilter.DELETE_PENDING,
];
