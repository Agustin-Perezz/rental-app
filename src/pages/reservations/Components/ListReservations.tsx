import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getReservations } from '../../../store/slices/Reservations';
import { Reservation } from './Reservation';

interface Props {}

export const ListReservations: React.FC<Props> = ({}) => {
    const { isLoading, reservations } = useAppSelector(
        (state) => state.reservations
    );

    const disptach = useAppDispatch();
    React.useEffect(() => {
        disptach(getReservations());
    }, []);

    if (isLoading) return <span>loading...</span>;

    return (
        <div className="container" style={{ maxWidth: 'max-content' }}>
            <table className="table is-striped is-bordered mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Init-Date</th>
                        <th>Finish-Date</th>
                        <th>P.U</th>
                        <th>P.T</th>
                        <th>Payment-Method</th>
                        <th>Payment</th>
                        <th>State</th>
                        <th>Car</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <Reservation
                            reservation={reservation}
                            key={reservation.id}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
