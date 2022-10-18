import { ListCars, NewCar } from '../pages/Cars/Components';
import {
    ListReservations,
    NewReservation,
} from '../pages/reservations/Components';
import { ListUsers, NewUser } from '../pages/Users/Components';

export interface RoutesProps {
    path: string;
    Component: React.FC<{}>;
}

export const routes: RoutesProps[] = [
    {
        path: '/',
        Component: ListReservations,
    },
    {
        path: 'reservations/add',
        Component: NewReservation,
    },
    {
        path: 'cars/edit',
        Component: ListCars,
    },
    {
        path: 'cars/edit/:id_car',
        Component: NewCar,
    },
    {
        path: 'cars/add',
        Component: NewCar,
    },
    {
        path: 'users/edit',
        Component: ListUsers,
    },
    {
        path: 'users/edit/:id_user',
        Component: NewUser,
    },
    {
        path: 'users/add',
        Component: NewUser,
    },
];
