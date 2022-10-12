import { configureStore } from '@reduxjs/toolkit';
import { carsSlice } from './slices/Cars';
import { usersSlice } from './slices/Users';

export const store = configureStore({
    reducer: {
        cars: carsSlice.reducer,
        users: usersSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
