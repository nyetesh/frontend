import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { CorporateFeatureRole, ROLES, Role } from '@shared/corporate-feature-role';

@Component({
    standalone: true,
    selector: 'xpc-role-treeview',
    templateUrl: './role-treeview.component.html',
    imports: [StimulusModule],
})
export class RoleTreeViewComponent implements OnInit {
    @Output()
    selectionChange: EventEmitter<Role[]> = new EventEmitter<Role[]>();
    allRoles: CorporateFeatureRole[] = ROLES;

    constructor() {}
    ngOnInit(): void {}

    onSelectionChange(event: any) {
        const selectedRoles: Role[] = [];
        event.treeViewItems.forEach((item: CorporateFeatureRole) => {
            item.children.forEach((roles) => {
                selectedRoles.push(roles);
            });
        });
        this.selectionChange.emit(selectedRoles);
    }
}
