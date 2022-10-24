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
    updateReservation,
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
    }, [id_reservation]);

    useFormatValues({ groupInputs, previusData: reservationForm });

    const { initialFormValues, validationSchema } = filterInputsData({
        groupInputs,
    });

    return (
        <Formik
            initialValues={reservationForm || initialFormValues}
            onSubmit={(values) => {
                id_reservation
                    ? disptach(
                          updateReservation({
                              id_reservation: parseInt(id_reservation),
                              newData: values,
                          })
                      )
                    : disptach(createReservation(values));
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
                            !reservationForm ? 'is-success' : 'is-info'
                        } is-fullwidth mx-auto`}
                    >
                        {reservationForm ? 'Update' : 'Save'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};
