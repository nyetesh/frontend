import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormContainerComponent } from 'nikosera-shell/src/packages/form-container/form-container.component';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { EmailTemplateConnector, FilterQueryParams } from '../connector/email-template.connector';
import { EmailTemplateDetail, EmailTemplateService } from '../service/email-template.service';
import { FormGroup } from '@angular/forms';
import { finalize } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SclSideDrawerService } from 'stimulus/src/packages/side-drawer/side-drawer.service';
import { RoutingConstants } from '../../../constant/routing-constants';
import { NbLayoutModule, NbTabsetModule } from '@nebular/theme';
import { XpasPageHeaderComponent, XpasSectionSeparator } from 'nikosera-shell/src/packages';
import { AdminStatusOption } from '../../../core/admin.status';
import { FormField } from 'stimulus/src/app/search/form-field';
import { PageChangeEvent, SclSectionLineSeparator } from 'stimulus/src/packages';
import { Page } from '../../../core/page';
import { SclTableText } from 'stimulus/src/packages/table/table-text/scl-table-text';

@Component({
  selector: 'xpa-email-template-list',
  templateUrl: './email-template-list.component.html',
  standalone: true,
  imports: [StimulusModule, CommonModule, FormContainerComponent, XpasPageHeaderComponent, NbLayoutModule, XpasSectionSeparator,
    NbTabsetModule,
    SclTableText,
    SclSectionLineSeparator],
  providers: [EmailTemplateConnector, EmailTemplateService, SclSideDrawerService]
})
export class EmailTemplateListComponent implements OnInit {
  emailTemplateList: EmailTemplateDetail[] = [];
  total = 0;
  filterForm!: FormGroup;
  adminStatusOption = AdminStatusOption;
  filter: any = {};
  page = new Page();
  formFields: FormField[] = [
    {
      label: 'Template Name',
      type: 'text',
      formControlName: 'name',
      placeholder: 'Template Name',
    },
    {
      label: 'Template Type',
      type: 'text',
      formControlName: 'type',
      placeholder: 'Template Type',
    }
  ]
  filterData = {
    name: null,
    type: null
  }

  constructor(
    private emailTemplateConnector: EmailTemplateConnector,
    private router: Router,
    private route: ActivatedRoute,
    private drawerService: SclSideDrawerService
  ) {
    this.filterForm = this.emailTemplateConnector.buildEmailTemplateSearchForm();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      if (!Object.keys(queryParam).length) {
        const { size, ...filters } = this.filterForm.value;
        this.applyFilterToRoute(filters);
      } else {
        this.updateFilters(queryParam as FilterQueryParams);
      }
    })
  }

  applyFilterToRoute(queryParams: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      replaceUrl: true,
      queryParams,
      queryParamsHandling: Object.keys(queryParams).length ? 'merge' : ''
    });
  }

  updateFilters(queryParams: FilterQueryParams) {
    this.filterForm.patchValue(queryParams);
    this.search();
  }

  search() {
    //this.loaderService.showLoader();
    this.emailTemplateConnector.search(this.filterForm).pipe(
      finalize(() =>
        // this.loaderService.hideLoader()
        console.log("Loader Here")
      )
    ).subscribe({
      next: (response) => {
        this.emailTemplateList = response.data.request.object;
        this.total = response.data.request.totalCount;
      },
      error: (errorResponse) => {
        if (errorResponse.message) {
          //this.toastrService.danger(errorResponse.message);
        } else {
          //this.toastrService.danger('Error');
        }
      },
    });
  }

  reset() {
    this.filterForm.reset({
      page: 0,
      size: 10
    });
    this.router.navigate([], {
      relativeTo: this.route,
      replaceUrl: true,
      queryParams: {
        page: 0,
        size: 10
      }
    })
  }

  edit(id: string) {
    this.router.navigate([RoutingConstants.EMAIL_TEMPLATE, RoutingConstants.EDIT], {
      state: { id: id },
    });
  }

  viewDetail(id: string) {
    this.router.navigate([RoutingConstants.EMAIL_TEMPLATE, RoutingConstants.DETAIL], {
      state: { id: id },
    });
  }
  handleSearchFormValues(formValues: any) {
    this.filterData = {
      ...formValues
    };
    this.page.page = 1;
    this.page.pageSize = 10;
    this.filter = this.filterData;
    this.applyFilterToRoute({ ...this.filterData, page: this.page.page, pageSize: this.page.pageSize });
    this.search();
  }
  onPageChange(page: PageChangeEvent) {
    if (this.page.page === page.page && this.page.pageSize === page.pageSize) {
      return;
    };
    this.page.page = page.page;
    this.page.pageSize = page.pageSize;
    this.applyFilterToRoute(page);
    this.search();
  }
}
