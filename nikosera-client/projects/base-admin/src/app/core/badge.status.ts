export enum Status {
    ACTIVE = 'Y',
    BLOCKED = 'N'
}

export const BadgeStatusOption: { [key: string]: any } = {
    [Status.ACTIVE]: 'success',
    [Status.BLOCKED]: 'danger',
}