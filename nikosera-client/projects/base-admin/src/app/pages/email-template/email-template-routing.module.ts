import { RouterModule, Routes } from "@angular/router";
import { RoutingConstants } from "../../constant/routing-constants";
import { EmailTemplateComponent } from "./email-template.component";
import { EmailTemplateListComponent } from "./email-template-list/email-template-list.component";
import { EmailTemplateCreateComponent } from "./email-template-create/email-template-create.component";
import { EmailTemplateEditComponent } from "./email-template-edit/email-template-edit.component";
import { NgModule } from "@angular/core";
import { EmailTemplateDetailComponent } from "./email-template-detail/email-template-detail.component";

const routes: Routes = [
    {
        path: '',
        component: EmailTemplateComponent,
    },
    {
        path: RoutingConstants.LIST,
        component: EmailTemplateListComponent,

    },
    {
        path: RoutingConstants.CREATE,
        component: EmailTemplateCreateComponent,
    },
    {
        path: RoutingConstants.EDIT,
        component: EmailTemplateEditComponent,
    },
    {
        path: RoutingConstants.DETAIL,
        component: EmailTemplateDetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EmailTemplateRoutingModule { }