import React from 'react';
import { Form, Formik } from 'formik';
import { InputBuilder } from '../../../components/CustomInputs';
import { filterInputsData } from '../../../helpers';
import { InputModel } from '../../../models/inputModel';
import { useFormatValues } from '../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
    createReservation,
    getReservation,
} from '../../../store/slices/Reservations';
import { useParams } from 'react-router-dom';
import { cleanReservation } from '../../../store/slices/Reservations/reservationSlice';

interface Props {
    groupInputs: InputModel[];
}

export const FormReservation: React.FC<Props> = ({ groupInputs }) => {
    const { reservationForm } = useAppSelector((state) => state.reservations);

    const disptach = useAppDispatch();
    const { id_reservation } = useParams();
    React.useEffect(() => {
        id_reservation
            ? disptach(getReservation(parseInt(id_reservation)))
            : disptach(cleanReservation());
    }, []);

    useFormatValues({ groupInputs, previusData: reservationForm });

    const { initialFormValues, validationSchema } = filterInputsData({
        groupInputs,
    });

    return (
        <Formik
            initialValues={reservationForm || initialFormValues}
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
