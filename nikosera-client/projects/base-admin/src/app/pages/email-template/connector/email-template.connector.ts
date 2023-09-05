import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailTemplateRequest, EmailTemplateDetail, EmailTemplateService } from "../service/email-template.service";
import { finalize } from "rxjs";
import { Filter } from "../../../core/request";


export interface FilterQueryParams {
    name: string;
    type: string;
    page: number;
    size: number;
}
@Injectable({
    providedIn: 'root'
})
export class EmailTemplateConnector {

    emailTemplateDetail!: EmailTemplateDetail;

    constructor(
        private formBuilder: FormBuilder,
        private emailTemplateService: EmailTemplateService
    ) { }

    buildEmailTemplateCreateForm(): FormGroup {
        return this.formBuilder.group({
            name: [null, [Validators.required]],
            type: [null, [Validators.required]],
            subject: [null, [Validators.required]],
            template: [null, Validators.required],
        })
    }

    create(emailTemplateCreateForm: FormGroup) {
        const { ...request } = emailTemplateCreateForm.value;
        const createRequest: EmailTemplateRequest = {
            ...request,
        }

        return this.emailTemplateService.createEmailTemplate(createRequest).pipe(
            finalize(() =>
                console.log("Loader here")
                //  this.loaderService.hideLoader()
            )
        );
    }

    edit(emailTemplateEditForm: FormGroup, eid: any) {
        const { active, ...request } = emailTemplateEditForm.value;
        const modifyRequest: EmailTemplateRequest = {
            ...request,
            active: active ? 'Y' : 'N',
        }
        return this.emailTemplateService.modifyEmailTemplate(modifyRequest, eid).pipe(
            finalize(() =>
                console.log("Loader here")
                //  this.loaderService.hideLoader()
            )
        );
    }

    loadDetail(id: any): EmailTemplateDetail {
        this.emailTemplateService.detail(id).pipe(
            finalize(() =>
                console.log('Loader'))
        ).subscribe({
            next: (response) => {
                this.emailTemplateDetail = response.data;
            },
            error: (errorResponse) => {
                if (errorResponse.message) {
                    // this.toastrService.danger(errorResponse.message);
                } else {
                    // this.toastrService.danger('Error');
                }
            },
        })
        return this.emailTemplateDetail;
    }

    buildEmailTemplateSearchForm(): FormGroup {
        return this.formBuilder.group({
            name: null,
            type: null,
            page: 0,
            size: 10
        })
    }

    search(filterForm: FormGroup) {
        //this.loaderService.showLoader();
        const { fromDate, toDate, page, size, ...filters } = filterForm.value;
        const formData: Filter = {
            page,
            size,
            fromDate,
            toDate,
            search: Object.keys(filters).filter((key) => !!filters[key])
                .map((key) => ({
                    key,
                    value: filters[key]
                }))
        };

        return this.emailTemplateService.search(formData);
    }
}
