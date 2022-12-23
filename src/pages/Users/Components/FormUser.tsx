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
import { useNavigate, useParams } from 'react-router-dom';
import { cleanSearchedUser } from '../../../store/slices/Users/userSlice';
import { saveAlert } from '../../../components/UI-Alerts';

interface Props {
    groupInputs: InputModel[];
}

export const FormUser: React.FC<Props> = ({ groupInputs }) => {
    const { initialFormValues, validationSchema } = filterInputsData({
        groupInputs,
    });

    const { searchedUser } = useAppSelector((state) => state.users);
    const navigate = useNavigate();

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
                if (!searchedUser) {
                    dispatch(createUser(values));
                    saveAlert('The user has been saved.');
                } else {
                    dispatch(updateUser(values, id_user!));
                    saveAlert('The user has been updated.');
                }
                navigate('/users/edit');
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
