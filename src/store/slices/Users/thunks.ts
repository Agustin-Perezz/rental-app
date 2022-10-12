import { AppDispatch } from '../../store';
import { rentalApi } from '../../../api/Cars';
import {
    deleteUserById,
    setNewInformationUser,
    setNewUser,
    setSearchedUser,
    setUsers,
    startLoadingUsers,
} from './userSlice';
import { UserModel } from '../../../models/Users';

export const getUsers = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingUsers());
        const { data } = await rentalApi.get('/users');
        dispatch(setUsers(data));
    };
};

export const createUser = (dataUser: UserModel) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.post('/users', {
            ...dataUser,
        });
        dispatch(setNewUser(data));
    };
};

export const deleteUser = (idUser: number) => {
    return async (dispatch: AppDispatch) => {
        await rentalApi.delete(`/users/${idUser}`);
        dispatch(deleteUserById(idUser));
    };
};

export const findUserById = (idUser: string) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.get<UserModel>(`/users/${idUser}`);
        dispatch(setSearchedUser({ ...data }));
    };
};

export const updateUser = (dataUser: UserModel, idUser: string) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.put(`/users/${idUser}`, {
            ...dataUser,
        });
        const id_user = parseInt(idUser);
        dispatch(setNewInformationUser({ id_user, ...data }));
    };
};
