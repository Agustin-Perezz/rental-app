import React from 'react';
import { Form, Formik } from 'formik';
import { InputBuilder } from '../../../components/CustomInputs';
import { filterInputsData } from '../../../helpers';
import { InputModel } from '../../../models/inputModel';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
    createUser,
    findUserById,
    updateUser,
} from '../../../store/slices/Users';
import { useParams } from 'react-router-dom';
import { cleanSearchedUser } from '../../../store/slices/Users/userSlice';

interface Props {
    groupInputs: InputModel[];
}

export const FormUser: React.FC<Props> = ({ groupInputs }) => {
    const { initialFormValues, validationSchema } = filterInputsData({
        groupInputs,
    });

    const { searchedUser } = useAppSelector((state) => state.users);

    const dispatch = useAppDispatch();
    const { id_user } = useParams();
    React.useEffect(() => {
        id_user
            ? dispatch(findUserById(id_user))
            : dispatch(cleanSearchedUser());
    }, [id_user]);

    return (
        <Formik
            initialValues={searchedUser || initialFormValues}
            onSubmit={(values) => {
                !searchedUser
                    ? dispatch(createUser(values))
                    : dispatch(updateUser(values, id_user!));
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
                            !searchedUser ? 'is-success' : 'is-info'
                        } is-fullwidth mx-auto`}
                    >
                        {searchedUser ? 'Update' : 'Save'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};
