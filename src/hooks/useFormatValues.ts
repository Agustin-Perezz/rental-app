import React from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { InputModel, OptionsModel } from '../models/inputModel';
import { useAppSelector } from '../store/hooks';

type Props = {
    groupInputs: InputModel[];
    initialFormValues: any;
};

export const useFormatValues = ({ groupInputs, initialFormValues }: Props) => {
    let { cars } = useAppSelector((state) => state.cars);
    const { users } = useAppSelector((state) => state.users);

    const match = useMatch('/reservations/add');

    React.useEffect(() => {
        const userPreview: OptionsModel[] = users.map((user) => {
            let str: string = '';
            str += `Name: ${user.name} - Email: ${user.email} - Country: ${user.nationality}`;
            return {
                value: user.id.toString(),
                label: str,
            };
        });

        if (match) {
            cars = cars.filter(
                (c) => c.fk_user === undefined || c.fk_user === null
            );
        }
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

        if (carPreview.length > 0) {
            groupInputs[2].options = carPreview;
            initialFormValues.fk_car = carPreview[0].value;
        } else {
            initialFormValues.fK_car = 'not-cars';
        }
        groupInputs[3].options = userPreview;
    }, []);
};
