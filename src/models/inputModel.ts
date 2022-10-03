export interface InputModel {
    type: string;
    label?: string;
    name: string;
    value?: string;
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

export interface radioGroupModel {
    label: string;
    name: string;
    type: string;
    options: Option[];
}

interface Option {
    name: string;
    type: string;
}
