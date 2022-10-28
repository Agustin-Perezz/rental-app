import { CarModel } from './Cars';

export interface UserModel {
    id: number;
    name: string;
    surname: string;
    type_document: string;
    number_document: string;
    nationality: string;
    direction: string;
    phone: string;
    email: string;
    date_of_born: string;
}

export interface UserModelForm {
    name: string;
    surname: string;
    type_document: string;
    number_document: string;
    nationality: string;
    direction: string;
    phone: string;
    email: string;
    date_of_born: string;
}

export interface UserWhithCars extends UserModel {
    createdAt: string;
    updatedAt: string;
    cars: CarModel[];
}
