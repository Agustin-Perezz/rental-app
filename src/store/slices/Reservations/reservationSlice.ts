import { createSlice } from '@reduxjs/toolkit';
import { ReservationModel } from '../../../models/Reservation';
import type { PayloadAction } from '@reduxjs/toolkit';

interface initialStateProps {
    reservations: ReservationModel[];
    isLoading: boolean;
}

const initialState: initialStateProps = {
    isLoading: false,
    reservations: [],
};

export type UpdateReservationsProps = {
    id_reservation: number;
    newData: ReservationModel;
};

export const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        startLoadingReservations: (state) => {
            state.isLoading = true;
        },
        setReservations: (state, action: PayloadAction<ReservationModel[]>) => {
            state.reservations = action.payload;
            state.isLoading = false;
        },
        setNewReservation: (state, action: PayloadAction<ReservationModel>) => {
            state.reservations = [...state.reservations, { ...action.payload }];
        },
        removeReservation: (state, { payload }: PayloadAction<number>) => {
            const filteredReservations = state.reservations.filter(
                (user) => user.id != payload
            );
            state.reservations = filteredReservations;
        },
        setNewDataReservation: (
            state,
            {
                payload: { id_reservation, newData },
            }: PayloadAction<UpdateReservationsProps>
        ) => {
            const indexOldRes = state.reservations.findIndex(
                (user) => user.id === id_reservation
            );
            state.reservations[indexOldRes] = { ...newData };
        },
    },
});

export const {
    setReservations,
    startLoadingReservations,
    setNewReservation,
    removeReservation,
    setNewDataReservation,
} = reservationsSlice.actions;
