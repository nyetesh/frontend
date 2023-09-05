import { environment } from '../../environments/environment';

export class ApiConstants {
    private static apiEndpoint = environment.apiEndpoint;

    static readonly ADMINS = 'admins';
    static readonly AUTH = 'auth';
    static readonly CHECK = 'check';

    static readonly BRANCHES = 'branches';
    static readonly CORPORATE_HOUSES = 'corporate-houses';
    static readonly CORPORATE_USERS = 'corporate-users';
    static readonly TRANSACTION_AUTHORIZATION_LIMIT = 'txn-authorization-limit';

    static readonly CONFIGS = 'configs';
    static readonly FEATURE_CONFIGURATION = 'feature-configs';
    static readonly MESSAGE_CONFIGURATION = 'message-templates/corporateuser';
    static readonly ADMIN_MESSAGE_CONFIGURATION = 'message-templates/admin';
    static readonly CORPORATE_USER_MESSAGE_CONFIGURATION =
        'message-templates/corporateuser';
    static readonly RELATION_MANAGERS_MESSAGE_CONFIGURATION =
        'message-templates/relationmanager';

    static readonly PASSWORD_DELIVERY = 'password-delivery';
    static readonly PAGE = 'page';
    static readonly DELETE = 'delete';
    static readonly EDIT = 'edit';
    static readonly BLOCK = 'block';
    static readonly UNBLOCK = 'unblock';
    static readonly CREATE = 'create';
    static readonly APPROVE = 'approve';
    static readonly DISAPPROVE = 'disapprove';
    static readonly RECENT_HISTORY = 'recent-history';
    static readonly HISTORY = 'history';

    static readonly NAVIGATION = 'navigation';

    static readonly CORPORATE_TYPES = 'corporate-types';
    static readonly CORPORATE_USER_TYPES = 'corporate-user-types';

    static readonly CORPORATE_PROFILES = 'corporate-profiles';
    static readonly CBS = 'cbs';
    static readonly CUSTOMER = 'customers';
    static readonly ACCOUNT = 'accounts';

    static readonly TXN_LIMITS = 'txn-limits';
    static readonly CORPORATE_FEATURES = 'corporate-features';
    static readonly ADMIN_PROFILES = 'admin-profiles';
    static readonly ADMIN_SCHEMES = 'admin-schemes';
    static readonly ADMIN_ROLE = 'admins/role';
    static readonly ROLE = 'admin-roles';
    static readonly ACCOUNT_SCHEMES = 'account-schemes';
    static readonly CHANGE_PASSWORD = 'change-password';
    static readonly ADMIN_DETAIL = 'detail';
    static readonly PASSWORD_POLICY = 'password-policies';
    static readonly ACTIVATION = 'activation';
    static readonly CORPORATE_GROUPS = 'corporate-groups';
    static readonly VALUE = 'value';
    static readonly CORPORATE_ACCOUNTS = 'corporate-accounts';
    static readonly RELATION_MANAGERS = 'relation-managers';

    static readonly ACCOUNT_SCHEME_FEATURE = 'account-scheme-features';
    static readonly LINK = 'link-accounts';

    static readonly DETAIL = 'detail';
    // query params
    static readonly CBS_ID = 'cbs-id';
    static readonly ACCOUNT_NUMBER = 'account-number';

    static generateWebPath(...sections: string[]) {
        return sections.reduce(
            (path, section) => `${path}/${section}`,
            this.apiEndpoint
        );
    }
}
