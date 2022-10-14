import React from 'react';
import { Form, Formik } from 'formik';
import { InputBuilder } from '../../../components/CustomInputs';
import { filterInputsData } from '../../../helpers';
import { InputModel } from '../../../models/inputModel';
import { useFormatValues } from '../../../hooks';

interface Props {
    groupInputs: InputModel[];
}

export const FormReservation: React.FC<Props> = ({ groupInputs }) => {
    useFormatValues({ groupInputs });

    const { initialFormValues, validationSchema } = filterInputsData({
        groupInputs,
    });

    return (
        <Formik
            initialValues={initialFormValues}
            onSubmit={(values) => {
                // !id_car
                //     ? dispatch(createCar({ ...values }))
                //     : dispatch(updateCar(values, id_car));
                console.log(values);
            }}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {() => (
                <Form className="is-flex is-flex-wrap-wrap">
                    <InputBuilder inputFields={groupInputs} />
                    {/* <span> {carsPreviewValues[0].label} </span> */}
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
