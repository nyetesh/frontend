export interface FormField {
    label: string;
    placeholder: string;
    formControlName: string;
    type: string;
    options?: any[];
    dropdownFormControlName?: string;
    value?:any;
}
