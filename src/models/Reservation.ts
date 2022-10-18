export interface ReservationModel {
    id: number;
    fk_user: number;
    fk_car: number;
    unit_price: number;
    total_price: number;
    payment_method: string;
    payment: string;
    state: string;
    brand_car: string;
    model_car: string;
    username: string;
    email: string;
    date_start: string;
    date_end: string;
    date_start_format: string;
    date_end_format: string;
    updatedAt: string;
    createdAt: string;
}

export interface ReservationModelForm {
    id: number;
    fk_user: number;
    fk_car: number;
    total_price: number;
    payment_method: string;
    payment: string;
    state: string;
    date_start: string;
    date_end: string;
    createdAt: string;
    updatedAt: string;
}
