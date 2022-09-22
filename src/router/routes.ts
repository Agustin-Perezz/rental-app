import { ListCars, ManageCars, FormCar } from '../components/Cars';

export interface RoutesProps {
    path: string;
    Component: React.FC<{}>;
}

export const routes: RoutesProps[] = [
    {
        path: '/',
        Component: ListCars,
    },
    {
        path: 'cars/edit',
        Component: ManageCars,
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
