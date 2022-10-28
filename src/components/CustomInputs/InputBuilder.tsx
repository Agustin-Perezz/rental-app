import { InputModel } from '../../models/inputModel';
import { InputField, MySelect } from './CustomFields';

interface Props {
    inputFields: InputModel[];
}

export const InputBuilder: React.FC<Props> = ({ inputFields }) => {
    return (
        <>
            {inputFields.map((data) => {
                if (
                    data.type === 'input' ||
                    data.type === 'email' ||
                    data.type === 'datetime-local' ||
                    data.type === 'date'
                ) {
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
                            type={data.type}
                            name={data.name}
                            value={data.value}
                            options={data.options!}
                            key={data.label}
                        />
                    );
                }
            })}
        </>
    );
};
