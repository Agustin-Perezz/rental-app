import React from 'react';
import { ReservationModel } from '../../../models/Reservation';
import { useAppDispatch } from '../../../store/hooks';
import {
    deleteReservationById,
    getReservation,
} from '../../../store/slices/Reservations';

import trash from '../../../assets/images/trash.png';
import update from '../../../assets/images/edit.png';
import view from '../../../assets/images/find.png';
import { useNavigate } from 'react-router-dom';

interface Props {
    reservation: ReservationModel;
}

export const Reservation: React.FC<Props> = ({ reservation }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleClick() {
        dispatch(getReservation(reservation.id));
        navigate(`/reservations/view/${reservation.id}`);
    }

    return (
        <tr style={{ verticalAlign: 'middle' }}>
            <th>{reservation.id}</th>
            <td>{reservation.date_start_format}</td>
            <td>{reservation.date_end_format}</td>
            <td>{reservation.unit_price}</td>
            <td>{reservation.total_price}</td>
            <td>{reservation.payment_method}</td>
            <td>{reservation.payment}</td>
            <td>{reservation.state}</td>
            <td>
                <div className="is-full">
                    {reservation.brand_car} {reservation.model_car}
                </div>
                <span>ID: {reservation.id}</span>
            </td>
            <td>
                <div className="is-full">{reservation.username}</div>
                {reservation.email}
            </td>
            <td>
                <div className="td_custom">
                    <span className="icon">
                        <img
                            className="test"
                            src={trash}
                            onClick={() =>
                                dispatch(deleteReservationById(reservation.id))
                            }
                        ></img>
                    </span>
                    <span
                        className="icon"
                        onClick={() =>
                            navigate(`reservations/edit/${reservation.id}`)
                        }
                    >
                        <img src={update} alt="update-icon" />
                    </span>
                    <span className="icon" onClick={handleClick}>
                        <img src={view} alt="find-icon" />
                    </span>
                </div>
            </td>
        </tr>
    );
};
