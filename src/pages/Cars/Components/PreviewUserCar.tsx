import React from 'react';
import { CarModel } from '../../../models/Cars';

interface Props {
    car: CarModel;
}

export const PreviewUserCar: React.FC<Props> = ({ car }) => {
    return (
        <tr>
            <th>{car.id}</th>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.kilometers}</td>
            <td>{car.color}</td>
            <td>{car.unit_price}</td>
            <td>{car.passengers}</td>
            <td>{car.type_tranmision}</td>
            <td>{car.air_conditioning ? 'True' : 'False'}</td>
        </tr>
    );
};
