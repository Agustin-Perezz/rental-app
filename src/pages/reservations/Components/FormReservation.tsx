import React from 'react';
import { Form, Formik } from 'formik';
import { InputBuilder } from '../../../components/CustomInputs';
import { filterInputsData } from '../../../helpers';
import { InputModel } from '../../../models/inputModel';
import { useFormatValues } from '../../../hooks';
import { useAppDispatch } from '../../../store/hooks';
import { createReservation } from '../../../store/slices/Reservations';

interface Props {
    groupInputs: InputModel[];
}

export const FormReservation: React.FC<Props> = ({ groupInputs }) => {
    useFormatValues({ groupInputs });
    const { initialFormValues, validationSchema } = filterInputsData({
        groupInputs,
    });

    const disptach = useAppDispatch();

    return (
        <Formik
            initialValues={initialFormValues}
            onSubmit={(values) => {
                // !id_car
                //     ? dispatch(createCar({ ...values }))
                disptach(createReservation(values));
            }}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {() => (
                <Form className="is-flex is-flex-wrap-wrap">
                    <InputBuilder inputFields={groupInputs} />
                    <button
                        type="submit"
                        className={`button ${
                            true ? 'is-success' : 'is-info'
                        } is-fullwidth mx-auto`}
                    >
                        Save
                    </button>
                </Form>
            )}
        </Formik>
    );
};
