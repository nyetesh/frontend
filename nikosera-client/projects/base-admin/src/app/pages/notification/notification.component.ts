import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NotificationResponse, NotificationService, NotificationStatusRequest } from '../../elements/notification.service';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { XpasPageHeaderComponent } from 'nikosera-shell/src/packages';
import { CommonModule } from '@angular/common';
import { NbListModule } from '@nebular/theme';
import { forkJoin } from 'rxjs';
import * as moment from 'moment';
import { SclSideDrawerService } from 'stimulus/src/packages/side-drawer/side-drawer.service';

const REQUEST_DATE_FORMAT = 'YYYY-MM-DD';
const TOTAL_PAGES = 7;
@Component({
  selector: 'xpa-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone: true,
  imports: [StimulusModule, CommonModule, XpasPageHeaderComponent, NbListModule],
  providers: [NotificationService]
})
export class NotificationComponent implements OnInit {
  notificationList!: NotificationResponse[];
  pageSize = 9;
  pageToLoadNext = 1;
  newNotificationList!: NotificationResponse[];
  displayNotificationList: NotificationResponse[] = [];
  totalNotification!: number;
  limitReached = false;
  isLoading = false;
  unseenNotification: number[] = [];
  totalSeenNotificationIds = new Set<number>();

  @Input()
  set data(data: any) {
    this.notificationList = data.notificationList;
    this.totalNotification = this.notificationList.length;
  }

  constructor(
    private notificationService: NotificationService
  ) {

  }

  ngOnInit(): void {
    this.loadNext();
  }

  loadNext() {
    // check if any unseen notification is present in unseenNotification array, if present send request to mark notification seen.
    if (this.unseenNotification.length > 0) {
      const notificationRequest: NotificationStatusRequest = {
        notificationId: this.unseenNotification,
        date: moment(new Date()).format(REQUEST_DATE_FORMAT)
      }
      this.unseenNotification = [];
      forkJoin([this.notificationService.markAsSeen(notificationRequest)
      ]).subscribe(([response]) => {
        console.log('these notification were marked as seen', this.unseenNotification);
      });
    }

    if (this.displayNotificationList.length === this.totalNotification) {
      this.limitReached = true;
    }
    if (this.limitReached || this.isLoading) {
      return;
    }
    // load notification from the original notification list specifying the start index and end index.
    const newNotificationList = this.notificationService.loadNotifications(this.notificationList, this.pageToLoadNext, this.pageSize)
    this.displayNotificationList.push(...newNotificationList);
    this.unseenNotification = [];
    newNotificationList.forEach((notification) => {
      if (notification.seen === 'N' && !this.totalSeenNotificationIds.has(notification.id)) {
        this.unseenNotification.push(notification.id);
        this.totalSeenNotificationIds.add(notification.id);
      }
    })
    this.pageToLoadNext++;
    this.isLoading = false;
  }
}
