import { rentalApi } from '../../../api/Cars';
import {
    ReservationModel,
    ReservationModelForm,
} from '../../../models/Reservation';
import { AppDispatch } from '../../store';
import {
    removeReservation,
    setNewDataReservation,
    setNewReservation,
    setReservations,
    startLoadingReservations,
    UpdateReservationsProps,
} from './reservationSlice';

export const getReservations = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingReservations());
        const { data } = await rentalApi.get<ReservationModel[]>('/rental');
        dispatch(setReservations(data));
    };
};

export const createReservation = (dataReservation: ReservationModelForm) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.post<ReservationModel>('/rental/', {
            ...dataReservation,
            state: dataReservation.payment,
        });
        dispatch(setNewReservation(data));
    };
};

export const deleteReservationById = (id: number) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.delete(`/rental/${id}`);
        dispatch(removeReservation(id));
    };
};

export const updateReservation = ({
    id_reservation,
    newData,
}: UpdateReservationsProps) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.put<ReservationModel>('/rental/', {
            ...newData,
            state: newData.payment,
        });
        dispatch(setNewDataReservation({ id_reservation, newData: data }));
    };
};
