import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Link } from 'react-router-dom';

export const SingleReservation: React.FC = () => {
    const { isLoading, reservation } = useAppSelector(
        (state) => state.reservations
    );

    if (isLoading) return <span>loding...</span>;

    return (
        <div className="container is-max-desktop mt-6 box is-flex is-flex-direction-column is-justify-content-center">
            <h1 className="title">Reservation #{reservation!.id}</h1>
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">ID: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.id}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Start Date: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.date_start}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Finish Date: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.date_end}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Car: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    <Link to={`/cars/edit/${reservation!.fk_car}`}>
                        {reservation!.brand_car} {reservation!.model_car}
                    </Link>
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Unit Price: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.unit_price}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Total Price: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.total_price}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">User: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    <Link to={`/users/edit/${reservation!.fk_user}`}>
                        <span>
                            {reservation!.username} ({reservation!.email})
                        </span>
                    </Link>
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Payment Method:</span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.payment_method}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Payment: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.payment}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">State:</span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.state}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Created:</span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.createdAt}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Updated:</span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {reservation!.updatedAt}
                </div>
            </div>
            <span className="separator mb-3" />
            <Link to={`/reservations/edit/${reservation!.id}`}>
                <button className="button is-info is-outlined">Edit</button>
            </Link>
        </div>
    );
};
