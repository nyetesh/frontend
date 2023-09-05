import { Injectable } from "@angular/core";
import { Roles } from "../constant/roles-constant";
import { UserService } from "../core/services/user.service";

export interface Role {
    name: string;
    code: Roles;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class RolesService {

    private storedRoles: Roles[] = [];

    constructor(
        private userService: UserService,
    ) { }

    hasRole(code: Roles): boolean {
        return this.roles.some((roles) => code === roles);
    }

    get roles(): Roles[] {
        this.storedRoles = this.userService.info?.roles?.map((role: { code: any; }) => role.code) || [];
        // console.log("Roles",this.storedRoles)
        return this.storedRoles;
    }
}