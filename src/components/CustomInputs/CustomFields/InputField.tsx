import { useField } from 'formik';

interface Props {
    label?: string;
    name: string;
    placeholder?: string;
    icon?: string;
    type: 'text' | 'email' | 'password' | 'input';
    [x: string]: any;
}

export const InputField: React.FC<Props> = ({ label, icon, ...props }) => {
    const [field, meta] = useField({ ...props });

    return (
        <div
            className={`column field ${
                field.name === 'passengers' ? 'is-full' : 'is-half'
            }`}
        >
            <label className="label"> {label} </label>
            <div
                className={`control  has-icons-right ${
                    icon && 'has-icons-left'
                }`}
            >
                <input
                    className={`input ${
                        meta.touched && meta.error && 'is-danger'
                    }`}
                    {...field}
                    {...props}
                />
                <span className="icon is-small is-left">
                    <i className={icon}></i>
                </span>
                {meta.touched && meta.error && (
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                )}
            </div>
            {meta.touched && meta.error && (
                <p className="help is-danger">
                    The {field.name} field is required.
                </p>
            )}
        </div>
    );
};
