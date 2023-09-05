export class RoutingConstants {
  /**
   * Root
   */
  static readonly ID = ':id';
  static readonly DASHBOARD = 'dashboard';
  static readonly ADMIN_MAIN = 'admin';
  static readonly BRANCH_MAIN = 'branch';
  static readonly ATM_LOCATION_MAIN = 'atm-location';
  static readonly PROVINCE_MAIN = 'province';
  static readonly ACCOUNT_TYPE_SETUP_MAIN = 'account-type';
  static readonly DISTRICT_MAIN = 'district';
  static readonly STATIC_KEYWORD_SETUP_MAIN = 'static-keyword';

  static readonly DATASET_ITEM_MAIN = 'dataset-item';
  static readonly SYSTEM_CONFIG_MASTER_MAIN = 'system-config-master';
  static readonly SYSTEM_CONFIG_MAIN = 'system-config';

  static readonly ADMIN_MESSAGE_FORMAT_MAIN = "admin-message-format";
  static readonly OS_TYPE_MAIN = "os-type";
  static readonly LOGIN_TYPE_MAIN = "login-type";
  static readonly MESSAGE_FORMAT_MAIN = "message-format";
  static readonly FEATURE_MAIN = "feature";
  static readonly CHANNEL_PROVIDER_MAIN = "channel-provider";
  static readonly SERVICE_PROVIDER_MAIN = "service-provider";
  static readonly APPLICATION_PATTERN_MAIN = "application-pattern"

  static readonly HTML_CONTENT_SETUP_MAIN = 'content';
  static readonly MERCHANT_GROUP_MAIN = 'merchant-group';
  static readonly MERCHANT_GROUP_ICON_MAIN = 'merchant-group-icon';
  static readonly PLATFORM_VERSION_TYPE_MAIN = 'application-platform-version';
  static readonly SMS_KEYWORD_MAIN = 'sms-keyword';
  static readonly RESEND_SMS_MAIN = 'resend/sms';
  static readonly KEY_ACCESS_MODE_MAIN = 'key-access-mode';
  static readonly MERCHANT_PARAMETER_INPUT_MAIN = 'merchant-parameter-input';
  static readonly PAYMENT_CODE_PATTERN_MAIN = 'payment-code-pattern';
  static readonly PAYMENT_CODE_TYPE_MAIN = 'payment-code-type';

  static readonly MERCHANT_TYPE_MAIN = 'merchant-type';
  static readonly PAYMENT_TYPE_MAIN = 'payment-type';

  static readonly COMMISSION_SLAB_MAIN = 'commission-slab';
  static readonly COMMISSION_MODE_MAIN = 'commission-mode';
  static readonly COMMISSION_TYPE_MAIN = 'commission-type';
  static readonly MERCHANT_SERVICE_MAIN = 'service';
  static readonly MERCHANT_ICON_MAIN = 'merchant-icon';
  static readonly BLOCKED_API_MAIN = 'blocked-api';
  //admin password
  static readonly CHANGE_ADMIN_PASSWORD = "change-admin-password";
  static readonly TELLER_MAIN = 'teller';
  static readonly ADMIN_USER_ACTIVITY = 'user-activity';
  //charge
  static readonly BULK_CHARGE_MAIN = 'bulk-charge';
  //fcm message
  static readonly FCM_MESSAGE_MAIN = 'fcm-message/compose';

  //offer
  static readonly PRODUCT_SETUP_MAIN = "product-setup";
  static readonly PRODUCT_MAIN = 'product';
  //offer category
  static readonly PRODUCT_CATEGORY_MAIN = "product-category"
  //failed charge
  static readonly FAILED_CHARGE_MAIN = "failed-module-charge";

  //customer
  static readonly CUSTOMER_MAIN = 'customer';
  static readonly BLOCKED_CUSTOMER_MAIN = 'blocked-customer';
  static readonly DEVICE_RESET_MAIN = 'device-reset';

  static readonly COMMISSION_PARTNER_MAIN = 'commission-partner';
  static readonly ADMIN_PROFILE_MAIN = 'admin-profile';
  static readonly CUSTOMER_PROFILE_MAIN = 'customer/profile';

  //renew charge 
  static readonly RENEW_CHARGE_MAIN = 'renew-charge';
  static readonly FAILED_RENEW_CHARGE_MAIN = 'failed';
  static readonly APPROVE_RENEW_CHARGE_MAIN = 'approve';

  //dataset
  static readonly DATA_MAIN = 'dataset'
  //system config
  static readonly SYSTEMCONFIG_MAIN = 'system-config';

  //commission
  static readonly COMMISSION_MAIN = "commission";

  //cbs query
  static readonly CBS_QUERY_MAIN = "cbs-query";

  //cbs connection
  static readonly CBS_CONNECTION_MAIN = "cbs-connection";

  //messaging
  static readonly SMS_MESSAGING_MAIN = "sms-messaging";
  static readonly UNICAST_MESSAGING_MAIN = "unicast";
  static readonly BULK_MESSAGING_MAIN = "bulk";
  static readonly FCM_MESSAGING_MAIN = "fcm-messaging";

  //generic for all crud operations
  static readonly CREATE = 'create';
  static readonly EDIT = 'edit';
  static readonly DETAIL = 'detail';
  static readonly UNBLOCK = 'unblock';
  static readonly UNBLOCK_APPROVE = 'approve/unblock';
  static readonly LIST = 'list';
  static readonly STATUS = 'status';
  static readonly UPLOAD = 'upload';
  static readonly APPROVE = 'approve';
  static readonly CONFIRMATION = 'confirmation'
  static readonly INITIATE = 'initiate';
  static readonly REJECTED_LIST = 'rejected/list';
  static readonly DELETE_APPROVE = 'delete/approve'
  static readonly DELETE = 'delete';
  static readonly SERVICE = 'service';
  static readonly RESET = 'reset';
  static readonly APPROVE_PASSWORD_RESET = 'password/reset/approve';
  static readonly APPROVE_CUSTOMER_MODIFY = 'modify/approve';
  static readonly UNBLOCK_LIST = 'unblock/list';
  static readonly CARD = 'card'
  static readonly PASSWORD_RESET = 'password/reset';
  static readonly PROMOTION = 'promotion';
  static readonly APPROVED_CUSTOMER_REJECTED_LIST = 'approved/rejected/list';
  static readonly ACTIVITY = 'activity';
  static readonly CBS_CONNECTION_TEST = "execute";
  static readonly CBS_QUERY_EXECUTE = "execute";


  static readonly FIXED_DEPOSIT_MAIN = 'fixed-deposit';

  static readonly COMPOSE = 'compose';

  //offer Category
  static readonly PRODUCT_CATEGORY_CREATE = "product-category/create";
  static readonly PRODUCT_CATEGORY_EDIT = "product-category/edit";
  static readonly PRODUCT_CATEGORY_DETAIL = "product-category/detail";
  static readonly PRODUCT_CATEGORY_LIST = "product-category/list";

  //offer SETUP
  static readonly PRODUCT_SETUP_CREATE = "product-setup/create";
  static readonly PRODUCT_SETUP_EDIT = "product-setup/edit";
  static readonly PRODUCT_SETUP_DETAIL = "product-setup/detail";
  static readonly PRODUCT_SETUP_LIST = "product-setup/list";


  //message format
  static readonly MESSAGE_MAIN = "message-format";
  static readonly MESSAGE_FORMAT_CREATE = "message-format/create";
  static readonly MESSAGE_FORMAT_EDIT = "message-format/edit";
  static readonly MESSAGE_FORMAT_DETAIL = "message-format/detail";
  static readonly MESSAGE_FORMAT_LIST = "message-format/list";

  //admin message format
  static readonly ADMIN_MESSAGE_FORMAT_CREATE = "admin-message-format/create";
  static readonly ADMIN_MESSAGE_FORMAT_EDIT = "admin-message-format/edit";
  static readonly ADMIN_MESSAGE_FORMAT_DETAIL = "admin-message-format/detail";
  static readonly ADMIN_MESSAGE_FORMAT_LIST = "admin-message-format/list";


  //data set
  static readonly DATASET_MAIN = "dataset";
  static readonly DATASET_CREATE = "dataset/create";
  static readonly DATASET_EDIT = "dataset/edit";
  static readonly DATASET_DETAIL = "dataset/detail";
  static readonly DATASET_LIST = "dataset/list";

  //data set item
  static readonly DATASET_ITEM_CREATE = "dataset-item/create";
  static readonly DATASET_ITEM_EDIT = "dataset-item/edit";
  static readonly DATASET_ITEM_DETAIL = "dataset-item/detail";
  static readonly DATASET_ITEM_LIST = "dataset-item/list";

  //sysetm config
  static readonly SYSTEM_MAIN = "system-config";
  static readonly SYSTEM_CONFIG_CREATE = 'system-config/create';
  static readonly SYSTEM_CONFIG_EDIT = 'system-config/edit';
  static readonly SYSTEM_CONFIG_DETAIL = 'system-config/detail';
  static readonly SYSTEM_CONFIG_LIST = 'system-config/list';

  //system config master
  static readonly SYSTEM_CONFIG_MASTER_CREATE = 'system-config-master/create';
  static readonly SYSTEM_CONFIG_MASTER_EDIT = 'system-config-master/edit';
  static readonly SYSTEM_CONFIG_MASTER_DETAIL = 'system-config-master/detail';
  static readonly SYSTEM_CONFIG_MASTER_LIST = 'system-config-master/list';

  //commission-type
  static readonly COMMISSIONTYPE_MAIN = 'commission-type'
  static readonly COMMISSION_TYPE_CREATE = 'commission-type/create';
  static readonly COMMISSION_TYPE_EDIT = 'commission-type/edit';
  static readonly COMMISSION_TYPE_DETAIL = 'commission-type/detail';
  static readonly COMMISSION_TYPE_LIST = 'commission-type/list';

  //commission-slab
  static readonly COMMISSION_SLAB_CREATE = 'commission-slab/create';
  static readonly COMMISSION_SLAB_EDIT = 'commission-slab/edit';
  static readonly COMMISSION_SLAB_DETAIL = 'commission-slab/detail';
  static readonly COMMISSION_SLAB_LIST = 'commission-slab/list';

  //commission mode
  static readonly COMMISSION_MODE_CREATE = 'commission-mode/create';
  static readonly COMMISSION_MODE_EDIT = 'commission-mode/edit';
  static readonly COMMISSION_MODE_DETAIL = 'commission-mode/detail';
  static readonly COMMISSION_MODE_LIST = 'commission-mode/list';

  static readonly COMMISSION_PARTNER_CREATE = 'commission-partner/create';
  static readonly COMMISSION_PARTNER_EDIT = 'commission-partner/edit';
  static readonly COMMISSION_PARTNER_DETAIL = 'commission-partner/detail';
  static readonly COMMISSION_PARTNER_LIST = 'commission-partner/list';

  //merchant group
  static readonly MERCHANTGROUP_MAIN = 'merchant-group';
  static readonly MERCHANT_GROUP_CREATE = 'merchant-group/create';
  static readonly MERCHANT_GROUP_EDIT = 'merchant-group/edit';
  static readonly MERCHANT_GROUP_DETAIL = 'merchant-group/detail';
  static readonly MERCHANT_GROUP_LIST = 'merchant-group/list';

  static readonly MERCHANT_MAIN = 'merchant';
  static readonly MERCHANT_CREATE = 'merchant/create';
  static readonly MERCHANT_EDIT = 'merchant/edit';
  static readonly MERCHANT_DETAIL = 'merchant/detail';
  static readonly MERCHANT_LIST = 'merchant/list';

  //merchant group icon 
  static readonly MERCHANT_GROUP_ICON_CREATE = 'merchant-group-icon/create';
  static readonly MERCHANT_GROUP_ICON_EDIT = 'merchant-group-icon/edit';
  static readonly MERCHANT_GROUP_ICON_DETAIL = 'merchant-group-icon/detail';
  static readonly MERCHANT_GROUP_ICON_LIST = 'merchant-group-icon/list';

  //menu-setup
  static readonly MENU_SETUP_MAIN = 'menu';
  //customer-menu-setup
  static readonly CUSTOMER_MENU_SETUP_MAIN = 'customer-menu';

  //PROMOTION
  static readonly PROMOTION_MAIN = 'promotion';

  //charge-setup 
  static readonly CHARGE_SETUP_MAIN = 'charge-setup';

  static readonly EMAIL_TEMPLATE = "email-template";
  static readonly EMAIL_TEMPLATE_RENDER = "render";

  //receipt
  static readonly FUND_TRANSFER_DETAIL = "fund-transfer-detail";
  //counter-payment
  static readonly COUNTER_PAYMENT = "counter-payment";


  //fonepay-ibft-reconcile
  static readonly FONEPAY_IBFT_RECONCILE = "reconcile";

  //remittance 
  static readonly REMITTANCE_MAIN = 'remittance';

  //request
  static readonly REQUEST = 'request';

  //terms and condition
  static readonly TERMS_AND_CONDITIONS_MAIN = 'terms-and-conditions'

  static readonly BASIC_INFORMATION = 'basic-information';
  static readonly ASSIGNED_ROLES = 'assigned-roles';
  static readonly ACTIVITY_DETAILS = 'activity-details';

  static readonly MANUAL = 'manual';
  static readonly RESET_PASSWORD = 'reset-password';
  static readonly PENDING = 'pending';
  static readonly COMPLETE = 'complete';
  static readonly WATCHLIST = 'watchlist';
  static readonly COMPLETED = 'completed'

  static readonly REGISTER_EDIT = 'register/edit';
  static readonly REGISTER_DETAIL = 'register/detail';
  static readonly SUCCESS='success';
  static readonly BULK = 'bulk';
  static readonly BULK_SUCCESS = 'bulk/success';
  static readonly MANAGE ='manage';
  static readonly MAIN_ACCOUNTS = 'main-accounts';
  static readonly LINKED_ACCOUNTS = 'linked-accounts';
  
  
  static readonly SUPERSET_GUEST_TOKEN = 'superset/guest/token';
  static readonly TELLER_QR = 'teller-qr';
  static readonly USER_DETAILS = 'user-details';
  static readonly ADMIN_PASSWORD_RESET = 'admin/password/reset';

  /**
   * Errors
   */
  static readonly SERVER_ERROR = 'server-error';
  static readonly NOT_FOUND = 'page-not-found';


  /**
   * @returns string - path seperated by '/'
   */
  static generatePath(...sections: string[]): string {
    return sections.reduce((path, section) => `${path}/${section}`, '');
  }
}
