import { CarModel } from '../../../models/Cars';
import { OptionsModel } from '../../../models/inputModel';

export const carMapper = (listCars: CarModel[]): OptionsModel[] => {
    return listCars
        .filter((c) => c.fk_user === undefined || c.fk_user === null)
        .map((car) => {
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
};
