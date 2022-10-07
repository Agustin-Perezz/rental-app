import { createContext } from 'react';
import { OptionalObjectSchema, TypeOfShape } from 'yup/lib/object';
import { AnyObject } from 'yup/lib/types';
import { FieldsProps } from '../helpers/filterInputsData';
import { InputModel } from '../models/inputModel';

export interface FormContextProps {
    initialFormValues: FieldsProps[] | {};
    // typeForm: 'carForm' | 'userForm' | 'reservationForm';
    validationScheme:
        | OptionalObjectSchema<
              {
                  [x: string]: any;
              },
              AnyObject,
              TypeOfShape<{
                  [x: string]: any;
              }>
          >
        | [];
    // Methods
    setInitialDataForm: (groupInputs: InputModel[], id_car?: string) => void;
}

export const FormContext = createContext<FormContextProps>(
    {} as FormContextProps
);
