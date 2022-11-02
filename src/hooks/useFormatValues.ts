import React from 'react';
import { CarModel } from '../models/Cars';
import { InputModel } from '../models/inputModel';
import { carMapper, userMapper } from '../pages/reservations/Mappers';
import { useAppSelector } from '../store/hooks';

type Props = {
    groupInputs: InputModel[];
    initialFormValues: any;
};

export const useFormatValues = ({ groupInputs, initialFormValues }: Props) => {
    const { cars } = useAppSelector((state) => state.cars);
    const { users } = useAppSelector((state) => state.users);
    const { reservationForm } = useAppSelector((state) => state.reservations);

    const [alternativeCars, setAlternativeCars] = React.useState<
        CarModel[] | undefined
    >();

    React.useEffect(() => {
        if (reservationForm) {
            const car = cars.findIndex((c) => c.id == reservationForm.fk_car);
            const { fk_user, ...filteredCar } = cars[car];
            setAlternativeCars([...cars, { ...filteredCar }]);
        } else {
            setAlternativeCars(undefined);
        }
    }, [reservationForm]);

    React.useEffect(() => {
        const userPreview = userMapper(users);
        groupInputs[3].options = userPreview;

        const carPreview = carMapper(alternativeCars || cars);
        if (carPreview.length > 0) {
            groupInputs[2].options = carPreview;
            initialFormValues.fk_car = carPreview[0].value;
        } else {
            groupInputs[2].options = [
                { value: 'not-cars', label: 'Not cars in stock' },
            ];
            initialFormValues.fk_car = 'not-cars';
        }
    }, [alternativeCars, []]);
};
