import { setCars, startLoadingCars } from './carsSlice';
import { AppDispatch } from '../../store';
import { rentalApi } from '../../../api/Cars';

export const getCars = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingCars());
        const { data } = await rentalApi.get('/cars');
        dispatch(setCars(data));
    };
};
