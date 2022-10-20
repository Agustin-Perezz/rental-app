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
    setReservation,
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

export const getReservation = (id_res: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingReservations());
        const { data } = await rentalApi.get<ReservationModel>(
            `/rental/${id_res}`
        );
        const reservationForm: ReservationModelForm = {
            fk_car: data.fk_car,
            fk_user: data.fk_user,
            date_end: data.date_end.substring(0, 10),
            date_start: data.date_start.substring(0, 10),
            payment: data.payment,
            payment_method: data.payment_method,
            state: data.state,
        };
        dispatch(setReservation({ reservation: data, reservationForm }));
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
