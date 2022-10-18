export interface InputModel {
    type: string;
    label?: string;
    name: string;
    value: string | unknown[];
    placeholder?: string;
    validations: Validation[];
    icon?: string;
    options?: OptionsModel[];
}

export interface OptionsModel {
    value: string;
    label: string;
}

export interface Validation {
    type: string;
}
