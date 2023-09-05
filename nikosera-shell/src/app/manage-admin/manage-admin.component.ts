
import { Component, OnInit } from '@angular/core';
import { NbButtonModule} from '@nebular/theme';
import { XpasPageHeaderComponent } from 'src/packages';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css'],
  standalone: true,
     imports: [
        NbButtonModule,
        XpasPageHeaderComponent
    ],
})
export class ManageAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
