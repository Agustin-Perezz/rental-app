import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Car } from '../../Cars/Components/Car';
import { PreviewUserCar } from '../../Cars/Components/PreviewUserCar';

export const SingleUser: React.FC = () => {
    const { user, isLoading } = useAppSelector((state) => state.users);

    if (isLoading) return <span>loding...</span>;

    return (
        <div className="container is-max-desktop mt-6 box is-flex is-flex-direction-column is-justify-content-center">
            <h1 className="title">Reservation #{user?.id}</h1>
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">ID: </span>
                </div>
                <div className="column subtitle is-5 pb-0">{user?.id}</div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Name: </span>
                </div>
                <div className="column subtitle is-5 pb-0">{user?.name}</div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Surname: </span>
                </div>
                <div className="column subtitle is-5 pb-0">{user?.surname}</div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Email: </span>
                </div>
                <div className="column subtitle is-5 pb-0">{user?.email}</div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Nationality: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {user?.nationality}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Direction: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {user?.direction}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Phone: </span>
                </div>
                <div className="column subtitle is-5 pb-0">{user?.phone}</div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Type Document: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {user?.type_document}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">
                        Number Document:
                    </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {user?.number_document}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">Date Of Born: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {user?.date_of_born}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">CreatedAt: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {user?.createdAt}
                </div>
            </div>
            <span className="separator mb-3" />
            <div className="columns">
                <div className="column is-3 pb-0">
                    <span className="subtitle black is-5">UpdatedAt: </span>
                </div>
                <div className="column subtitle is-5 pb-0">
                    {user?.updatedAt}
                </div>
            </div>
            <span className="separator mb-3" />
            <h4 className="title is-4 mb-0 mt-2 ml-3">List cars from user.</h4>
            <table className="table is-striped is-bordered mt-5 mx-3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Kilometers</th>
                        <th>Color</th>
                        <th>Unit.P</th>
                        <th>Air Cond.</th>
                        <th>Passangers</th>
                        <th>Type Transmision</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.cars.map((dataCar, index) => (
                        <PreviewUserCar car={dataCar} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
