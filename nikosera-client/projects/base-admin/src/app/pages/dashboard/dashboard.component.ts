import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { embedDashboard } from '@superset-ui/embedded-sdk';
import { FormContainerComponent } from 'nikosera-shell/src/packages/form-container/form-container.component';
import { environment } from 'projects/base-admin/src/environment/environment';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { NbLayoutModule } from '@nebular/theme';
import { RoutingConstants } from '../../constant/routing-constants';


@Component({
  selector: 'xpa-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.css'],
  imports: [StimulusModule, FormContainerComponent, NbLayoutModule]
})
export class DashboardComponent implements OnInit {
  webPath = environment.WEB_ENDPOINT;
  token: string | any;

  ngOnInit() {
    const element = document.getElementById('my-superset-container');
    if (element) {
      embedDashboard({
        id: '289c267d-6bf9-4baf-9ea5-55c5d6325b22', // Replace with your Superset dashboard ID
        supersetDomain: 'http://superset.10.13.194.202.nip.io', // Replace with your Superset domain
        mountPoint: element,
        fetchGuestToken: () => this.fetchGuestTokenFromBackend(),
        dashboardUiConfig: {
          hideTitle: true,
          filters: {
            expanded: false,
          },
          hideTab: true,
          hideChartControls: true,
        },
      });
    }
  }

  fetchGuestTokenFromBackend(): Promise<string> {
    debugger;
    this.token = sessionStorage.getItem('AccessToken');
    return fetch(this.webPath + '/' + RoutingConstants.SUPERSET_GUEST_TOKEN, {
      headers: {
        Authorization: this.token,
      },
    })
      .then((response) => response.json())
      .then((data) => data.data.token);
  }
}