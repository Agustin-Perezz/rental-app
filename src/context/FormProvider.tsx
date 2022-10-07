import { useState } from 'react';
import { filterInputsData } from '../helpers';
import { InputModel } from '../models/inputModel';
import { useAppDispatch } from '../store/hooks';
import { findById } from '../store/slices/Cars';
import { FormContext, FormContextProps } from './FormContext';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const INIT_STATE_FORM: Omit<FormContextProps, 'setInitialDataForm'> = {
    initialFormValues: {},
    validationScheme: [],
};

export const FormProvider: React.FC<Props> = ({ children }) => {
    const [dataForm, setDataForm] = useState(INIT_STATE_FORM);

    const dispatch = useAppDispatch();

    const setInitialDataForm = (groupInputs: InputModel[], id_car?: string) => {
        if (id_car) {
            dispatch(findById(id_car));
        }
        const { initialFormValues, validationScheme } = filterInputsData({
            groupInputs,
        });

        setDataForm({ initialFormValues, validationScheme });
    };

    // const handleSubmit = ({formValues, typeForm}) => {
    // // dispatch actions thunks
    // }

    return (
        <FormContext.Provider value={{ ...dataForm, setInitialDataForm }}>
            {children}
        </FormContext.Provider>
    );
};
