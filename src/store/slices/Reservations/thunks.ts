import dateFormat from 'dateformat';
import { rentalApi } from '../../../api/Cars';
import { AppDispatch } from '../../store';
import {
    ReservationModel,
    ReservationModelForm,
} from '../../../models/Reservation';
import {
    removeReservation,
    setNewDataReservation,
    setNewReservation,
    setReservation,
    setReservations,
    startLoadingReservations,
} from './reservationSlice';
import { updateOwnerCar } from '../Cars';

export type UpdateReservationsForm = {
    id_reservation: number;
    newData: ReservationModelForm;
};

export const getReservations = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingReservations());
        const { data } = await rentalApi.get<ReservationModel[]>('/rental/');
        data.forEach((rental) => {
            rental.date_start = dateFormat(
                rental.date_start,
                'UTC:m/d/yy h:MM TT'
            );
            rental.date_end = dateFormat(rental.date_end, 'UTC:m/d/yy h:MM TT');
        });
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
            date_start: data.date_start.substring(0, 16),
            date_end: data.date_end.substring(0, 16),
            payment: data.payment,
            payment_method: data.payment_method,
            state: data.state,
        };
        data.createdAt = dateFormat(
            data.createdAt,
            'dddd, mmmm dS, yyyy, h:MM:ss TT'
        );
        data.updatedAt = dateFormat(
            data.updatedAt,
            'dddd, mmmm dS, yyyy, h:MM:ss TT'
        );
        data.date_start = dateFormat(data.date_start, 'm/d/yy h:MM TT');
        data.date_end = dateFormat(data.date_end, 'm/d/yy h:MM TT');

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
        dispatch(
            updateOwnerCar({ idCar: data.fk_car, idRental: data.fk_user })
        );
    };
};

export const deleteReservationById = (id: number) => {
    return async (dispatch: AppDispatch) => {
        await rentalApi.delete(`/rental/${id}`);
        dispatch(removeReservation(id));
    };
};

export const updateReservation = ({
    id_reservation,
    newData,
}: UpdateReservationsForm) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.put<ReservationModel>(
            `/rental/${id_reservation}`,
            {
                ...newData,
                state: newData.payment,
            }
        );
        dispatch(setNewDataReservation({ id_reservation, newData: data }));
    };
};
