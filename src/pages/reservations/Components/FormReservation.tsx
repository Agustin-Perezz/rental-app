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

    const { initialFormValues, validationSchema } = filterInputsData({
        groupInputs,
    });

    useFormatValues({ groupInputs, initialFormValues });

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
                id_reservation && cleanReservation();
            }}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {({ isValid, dirty, values }) => (
                <Form className="is-flex is-flex-wrap-wrap">
                    <InputBuilder inputFields={groupInputs} />
                    <button
                        type="submit"
                        disabled={!isValid || !dirty}
                        className={`button ${
                            initialFormValues.fk_car === 'not-cars'
                                ? 'is-warning'
                                : !id_reservation
                                ? 'is-success'
                                : 'is-info'
                        } is-fullwidth mx-auto`}
                    >
                        {initialFormValues.fk_car === 'not-cars'
                            ? 'No cars in stock'
                            : id_reservation
                            ? 'Update'
                            : 'Save'}
                    </button>
                    {JSON.stringify(values, null, '')}
                </Form>
            )}
        </Formik>
    );
};
