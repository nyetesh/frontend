export enum AdminStatus {
    ACTIVE = 'Y',
    BLOCKED = 'N'
}

export const AdminStatusOption: { [key: string]: any } = {
    [AdminStatus.ACTIVE]: 'ACTIVE',
    [AdminStatus.BLOCKED]: 'BLOCKED'
}
