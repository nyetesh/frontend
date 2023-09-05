import { Injectable } from '@angular/core';
import { Status } from '../../core/model/status';
import { StatusConstants } from '@core/constants/status-constant';

@Injectable({
    providedIn: 'root',
})
export class StatusService {
    pendingStatus: string[] = [
        StatusConstants.CREATE_PENDING,
        StatusConstants.EDIT_PENDING,
        StatusConstants.BLOCK_PENDING,
        StatusConstants.DELETE_PENDING,
        StatusConstants.UNBLOCK_PENDING,
    ];

    approveStatus: string[] = [StatusConstants.CREATE_APPROVE, StatusConstants.EDIT_APPROVE, StatusConstants.BLOCK_APPROVE];

    checkStatusPending(status: Status) {
        return this.pendingStatus.includes(status.name);
    }

    checkStatusapproved(status: Status) {
        return this.approveStatus.includes(status.name);
    }
}
