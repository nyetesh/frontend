import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NbBadgeModule, NbMenuItem } from '@nebular/theme';
import { AuthService } from 'oauth/src/app/services/auth.service';
import { SclSideDrawerService } from 'stimulus/src/packages/side-drawer/side-drawer.service';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { UserInfo } from '../../core/services/authentication.service';
import { UserService } from '../../core/services/user.service';
import { NotificationComponent } from '../../pages/notification/notification.component';
import { NotificationResponse, NotificationService, NotificationStatusRequest } from '../notification.service';

@Component({
  selector: 'xpa-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  standalone: true,
  imports: [StimulusModule, CommonModule, NbBadgeModule, NotificationComponent],
  providers: [NotificationService],
  host: {
    class: 'xpa-actions'
  },
  encapsulation: ViewEncapsulation.None
})
export class ActionsComponent {
    authorizedMenu: NbMenuItem[] = [];
    userInfo!: UserInfo;

    get name() {
        if (this.userInfo.name) {
            return this.userInfo.name;
        }
        return '';
    }

    get userType() {
        if (this.userInfo.userType) {
            return this.userInfo.userType;
        }
        return '';
    }

  notificationList!: NotificationResponse[];
  showBadge!: boolean;
  unseenNotificationId: number[] = [];
  notificationRequest!: NotificationStatusRequest;
  badgeText!: string;
  pageToLoad = 1;
  pageSize = 10;


  constructor(
    private notificationService: NotificationService,
    private sclDrawerService: SclSideDrawerService,
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    // this.notificationService.notifications
    //   .pipe()
    //   .subscribe((response) => {
    //     console.log("response", response);
    //     this.notificationList = response.responses;
    //     this.notificationList.forEach((notification) => {
    //       if (notification.seen === 'N') {
    //         this.showBadge = true;
    //         this.unseenNotificationId.push(notification.id);
    //       } else {
    //         this.showBadge = false;
    //       }
    //       this.badgeText = this.unseenNotificationId.length.toString();
    //     })
    //   })
    //   if (this.userService.info) {
    //       this.userInfo = this.userService.info;
    //   }
  }

  showNotifications() {
    console.log("unseen notification id", this.unseenNotificationId);
    const ref = this.sclDrawerService.open(NotificationComponent, {
      notificationList: this.notificationList,
      unseenNotification: this.unseenNotificationId
    });
  }

  close() {
    this.sclDrawerService.close();
  }

  logOut() {
      this.clearSessionData();
      this.authService.logOut();
  }

  clearSessionData() {
      this.userService.clearUserInfo();
      sessionStorage.removeItem('AccessToken');
      sessionStorage.removeItem('initialData');
  }
}
