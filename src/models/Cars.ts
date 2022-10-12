export interface CarModel {
    id: number;
    brand: string;
    model: string;
    year: string;
    kilometers: string;
    color: string;
    unit_price: string;
    air_conditioning: string;
    passengers: string;
    type_tranmision: string;
    fk_user: number;
}

export interface CarFormModel {
    brand: string;
    model: string;
    year: string;
    kilometers: string;
    color: string;
    air_conditioning: string;
    passengers: string;
    type_tranmision: string;
    fk_user: number;
}
