import { ListCars } from '../pages/Cars/Components/ListCars';
import { NewCar } from '../pages/Cars/Components/NewCar';

export interface RoutesProps {
    path: string;
    Component: React.FC<{}>;
}

export const routes: RoutesProps[] = [
    {
        path: 'cars/edit',
        Component: ListCars,
    },
    // {
    //     path: 'cars/edit',
    //     Component: ListCars,
    // },
    {
        path: 'cars/edit/:id_car',
        Component: NewCar,
    },
    {
        path: 'cars/add',
        Component: NewCar,
    },
];
