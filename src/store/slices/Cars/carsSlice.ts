import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CarModel } from '../../../models/Cars';

export interface CarsProps {
    isLoading: boolean;
    cars: CarModel[];
    searchedCar?: CarModel;
}

type UpdateCarProps = {
    newData: CarModel;
    idCar: number;
};

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
        setNewCar: (state, action: PayloadAction<CarModel>) => {
            state.cars = [...state.cars, { ...action.payload }];
        },
        deleteCarById: (state, action: PayloadAction<number>) => {
            const filteredCars = state.cars.filter(
                (car) => car.id !== action.payload
            );
            state.cars = filteredCars;
        },
        setNewInformationCar: (
            state,
            { payload: { idCar, newData } }: PayloadAction<UpdateCarProps>
        ) => {
            const indexOldCar = state.cars.findIndex((car) => car.id === idCar);
            state.cars[indexOldCar] = { ...newData };
        },
        setSearchedCar: (state, action: PayloadAction<CarModel>) => {
            state.searchedCar = action.payload;
        },
        cleanSearchedCar: (state) => {
            state.searchedCar = undefined;
        },
    },
});

export const {
    startLoadingCars,
    setCars,
    setNewCar,
    deleteCarById,
    setSearchedCar,
    cleanSearchedCar,
    setNewInformationCar,
} = carsSlice.actions;
