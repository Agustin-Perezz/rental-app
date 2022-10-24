import React from 'react';
import { InputModel, OptionsModel } from '../models/inputModel';
import { ReservationModel, ReservationModelForm } from '../models/Reservation';
import { useAppSelector } from '../store/hooks';

type Props = {
    groupInputs: InputModel[];
    previusData?: ReservationModelForm;
};

export const useFormatValues = ({ groupInputs, previusData }: Props) => {
    const { cars } = useAppSelector((state) => state.cars);
    const { users } = useAppSelector((state) => state.users);

    React.useEffect(() => {
        const userPreview: OptionsModel[] = users.map((user) => {
            let str: string = '';
            str += `Name: ${user.name} - Email: ${user.email} - Country: ${user.nationality}`;
            return {
                value: user.id.toString(),
                label: str,
            };
        });
        const carPreview: OptionsModel[] = cars.map((car) => {
            let str: string = '';
            str += `${car.brand} ${car.year} - `;
            str += `Model: ${car.model} - `;
            str += `Price/Day: ${car.unit_price} - `;
            str += `Transmision: ${car.type_tranmision} - `;
            str += `Color: ${car.color}`;
            return {
                value: car.id.toString(),
                label: str,
            };
        });
        groupInputs[2].options = carPreview;
        groupInputs[3].options = userPreview;
    }, []);
};
