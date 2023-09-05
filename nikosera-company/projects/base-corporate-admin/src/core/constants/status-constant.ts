export class StatusConstants {
    static readonly CREATE_APPROVE = 'CREATE_APPROVE';
    static readonly CREATE_PENDING = 'CREATE_PENDING';
    static readonly EDIT_APPROVE = 'EDIT_APPROVE';
    static readonly EDIT_PENDING = 'EDIT_PENDING';
    static readonly BLOCK_APPROVE = 'BLOCKED_APPROVE';
    static readonly BLOCK_PENDING = 'BLOCK_PENDING';
    static readonly UNBLOCK_PENDING = 'UNBLOCK_PENDING';
    static readonly DELETE_PENDING = 'DELETE_PENDING';
    static readonly DELETE_APPROVE = 'DELETE_APPROVE';
    static readonly ACTIVE = 'ACTIVE';
    static NON_EDITABLE_STATUS: string[] = [
        'CREATE_PENDING',
        'EDIT_PENDING',
        'UNBLOCK_PENDING',
        'BLOCK_APPROVE',
        'BLOCK_PENDING',
        'DELETE_PENDING',
    ];
}
