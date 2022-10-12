import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserModel, UserModelForm } from '../../../models/Users';

interface UsersProps {
    isLoading: boolean;
    users: UserModel[];
    searchedUser?: UserModel;
}

const initialState: UsersProps = {
    isLoading: false,
    users: [],
};

type UpdateProps = {
    newData: UserModel;
    id_user: number;
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startLoadingUsers: (state) => {
            state.isLoading = true;
        },
        setUsers: (state, action: PayloadAction<UserModel[]>) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        setNewUser: (state, action: PayloadAction<UserModel>) => {
            state.users = [...state.users, { ...action.payload }];
        },
        deleteUserById: (state, { payload }: PayloadAction<number>) => {
            const filteredUsers = state.users.filter(
                (user) => user.id != payload
            );
            state.users = filteredUsers;
        },
        setNewInformationUser: (
            state,
            { payload: { id_user, newData } }: PayloadAction<UpdateProps>
        ) => {
            const indexOldUser = state.users.findIndex(
                (user) => user.id === id_user
            );
            state.users[indexOldUser] = { ...newData };
        },
        setSearchedUser: (state, action: PayloadAction<UserModel>) => {
            state.searchedUser = action.payload;
        },
        cleanSearchedUser: (state) => {
            delete state.searchedUser;
        },
    },
});

export const {
    setUsers,
    startLoadingUsers,
    cleanSearchedUser,
    deleteUserById,
    setNewInformationUser,
    setNewUser,
    setSearchedUser,
} = usersSlice.actions;
