import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InputBuilder } from '../../../components/CustomInputs/InputBuilder';
import { filterInputsData } from '../../../helpers';
import { InputModel } from '../../../models/inputModel';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { createCar, findById, updateCar } from '../../../store/slices/Cars';
import { cleanSearchedCar } from '../../../store/slices/Cars/carsSlice';

interface Props {
    groupInputs: InputModel[];
}

export const FormCar: React.FC<Props> = ({ groupInputs }) => {
    const { initialFormValues, validationSchema } = filterInputsData({
        groupInputs,
    });

    const { searchedCar } = useAppSelector((state) => state.cars);

    const dispatch = useAppDispatch();
    const { id_car } = useParams();
    useEffect(() => {
        id_car ? dispatch(findById(id_car)) : dispatch(cleanSearchedCar());
    }, [id_car]);

    return (
        <Formik
            initialValues={searchedCar || initialFormValues}
            onSubmit={(values) => {
                !id_car
                    ? dispatch(createCar({ ...values }))
                    : dispatch(updateCar(values, id_car));
            }}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {() => (
                <Form className="is-flex is-flex-wrap-wrap">
                    <InputBuilder inputFields={groupInputs} />
                    <button
                        type="submit"
                        className="button is-success is-fullwidth mx-auto"
                    >
                        Save
                    </button>
                </Form>
            )}
        </Formik>
    );
};
