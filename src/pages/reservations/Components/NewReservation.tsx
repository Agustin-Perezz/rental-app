import React from 'react';
import { inputsReservationFields } from '../../../data';
import { FormReservation } from './FormReservation';

interface Props {}

export const NewReservation: React.FC<Props> = ({}) => {
    return (
        <div className="container is-max-desktop mt-6">
            <div className="box">
                <h1 className="title has-text-grey-darker">New Reservation.</h1>
                <hr className="has-background-link" />
                <div className="columns is-flex is-flex-wrap-wrap">
                    <FormReservation groupInputs={inputsReservationFields} />
                </div>
            </div>
        </div>
    );
};
