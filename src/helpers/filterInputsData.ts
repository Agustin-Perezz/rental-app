import { InputModel, Validation } from '../models/inputModel';
import * as Yup from 'yup';

export interface FieldsProps {
    [key: string]: any;
}
interface Props {
    groupInputs: InputModel[];
    alternativeInititalValues?: FieldsProps;
}

export const filterInputsData = ({
    groupInputs,
    alternativeInititalValues,
}: Props): FieldsProps => {
    const initialFormValues: FieldsProps = {};
    const requiredFields: FieldsProps = {};

    for (const input of groupInputs) {
        initialFormValues[input.name] = input.value;

        if (!input.validations) continue;

        const schema = schemaBuilder(input.validations);

        requiredFields[input.name] = schema;
    }

    const validationSchema = Yup.object({ ...requiredFields });

    return { initialFormValues, validationSchema };
};

const schemaBuilder = (inputValidations: Validation[]) => {
    let schema = Yup.string();
    for (const rule of inputValidations) {
        if (rule.type === 'required') {
            schema = schema.required('This fileld is required.');
        }
        if (rule.type === 'email') {
            schema = schema.email('Email is not valid.');
        }
    }
    return schema;
};
