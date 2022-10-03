import { useField } from 'formik';
import { OptionsModel } from '../../../models/inputModel';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    options: OptionsModel[];
    [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
    const [field, meta] = useField(props);

    return (
        <div className="is-flex is-justify-content-center ml-3 mr-4 mb-3">
            <h5 className="subtitle is-5 mb-0 pt-1 pr-2">{label}</h5>
            <div className="select is-rounded">
                <select {...field} {...props}>
                    {props.options?.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
            {meta.touched && meta.error && (
                <span className="help is-danger"> {meta.error} </span>
            )}
        </div>
    );
};
