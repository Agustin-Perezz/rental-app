import { Formik, Form } from 'formik';
import { filterInputsData } from '../../helpers';
import { InputModel, radioGroupModel } from '../../models/inputModel';
import { InputField, MySelect } from './CustomFields';

interface Props {
    groupInputs: InputModel[];
    radioGroup?: radioGroupModel[];
    buttonName: string;
}

export const DinamicForm: React.FC<Props> = ({ groupInputs, buttonName }) => {
    const { initialValues, validationScheme } = filterInputsData({
        groupInputs,
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationScheme}
        >
            {(formik) => (
                <Form className="is-flex is-flex-wrap-wrap">
                    {groupInputs.map((data) => {
                        if (data.type === 'input' || data.type === 'email') {
                            return (
                                <InputField
                                    label={data.label}
                                    name={data.name}
                                    type={data.type as any}
                                    key={data.name}
                                    placeholder={data.placeholder}
                                    icon={data.icon}
                                />
                            );
                        } else if (data.type === 'select') {
                            return (
                                <MySelect
                                    label={data.label!}
                                    name={data.name}
                                    options={data.options!}
                                    key={data.label}
                                />
                            );
                        }
                    })}
                    <button
                        type="submit"
                        className="button is-success is-fullwidth mx-auto"
                    >
                        {buttonName}
                    </button>
                </Form>
            )}
        </Formik>
    );
};
