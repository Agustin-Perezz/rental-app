import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CarModel } from '../../../models/Cars';

export interface CarsProps {
    isLoading: boolean;
    cars: CarModel[] | [];
}

const initialState: CarsProps = {
    cars: [],
    isLoading: false,
};

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        startLoadingCars: (state) => {
            state.isLoading = true;
        },
        setCars: (state, action: PayloadAction<CarModel[]>) => {
            state.isLoading = false;
            state.cars = action.payload;
        },
    },
});

export const { startLoadingCars, setCars } = carsSlice.actions;
