import {
    deleteCarById,
    setCars,
    setNewCar,
    setNewInformationCar,
    setSearchedCar,
    startLoadingCars,
} from './carsSlice';
import { AppDispatch } from '../../store';
import { rentalApi } from '../../../api/Cars';
import { CarFormModel, CarModel } from '../../../models/Cars';

export const getCars = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingCars());
        const { data } = await rentalApi.get('/cars');
        dispatch(setCars(data));
    };
};

export const createCar = (dataCar: CarFormModel) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.post('/cars', {
            ...dataCar,
        });
        dispatch(setNewCar(data));
    };
};

export const deleteCar = (idCar: number) => {
    return async (dispatch: AppDispatch) => {
        await rentalApi.delete(`/cars/${idCar}`);
        dispatch(deleteCarById(idCar));
    };
};

export const findById = (idCar: string) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.get<CarModel>(`/cars/${idCar}`);
        dispatch(setSearchedCar({ ...data }));
    };
};

export const updateCar = (dataCar: CarModel, id_car: string) => {
    return async (dispatch: AppDispatch) => {
        const { data } = await rentalApi.put(`/cars/${id_car}`, {
            ...dataCar,
        });
        const idCar = parseInt(id_car);
        dispatch(setNewInformationCar({ newData: data, idCar }));
    };
};
