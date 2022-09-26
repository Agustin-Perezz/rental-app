import { FormCar, ListCars } from '../pages';

export interface RoutesProps {
    path: string;
    Component: React.FC<{}>;
}

export const routes: RoutesProps[] = [
    {
        path: '/',
        Component: FormCar,
    },
    {
        path: 'cars/edit',
        Component: ListCars,
    },
    {
        path: 'cars/edit/:id_car',
        Component: FormCar,
    },
    {
        path: 'cars/add',
        Component: FormCar,
    },
];
