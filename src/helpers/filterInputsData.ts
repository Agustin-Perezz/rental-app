import { InputModel, radioGroupModel, Validation } from '../models/inputModel';
import * as Yup from 'yup';

interface Props {
    groupInputs: InputModel[];
}

interface FieldsProps {
    [key: string]: any;
}

export const filterInputsData = ({ groupInputs }: Props) => {
    const initialValues: FieldsProps = {};
    const requiredFields: FieldsProps = {};

    inputsFieldBuilder(groupInputs, initialValues, requiredFields);

    const validationScheme = Yup.object({ ...requiredFields });

    return { initialValues, validationScheme };
};

const inputsFieldBuilder = (
    inputGroup: InputModel[],
    initialValues: FieldsProps,
    requiredFields: FieldsProps
) => {
    for (const input of inputGroup) {
        initialValues[input.name] = input.value;

        if (!input.validations) continue;

        const schema = schemaBuilder(input.validations);

        requiredFields[input.name] = schema;
    }
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
