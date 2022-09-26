export interface CarModel {
    id: number;
    brand: string;
    model: string;
    year: number;
    kilometers: number;
    color: string;
    air_conditioning: boolean;
    passengers: number;
    type_tranmision: string;
    fk_user: number;
    createdAt: string;
    updatedAt: string;
}
