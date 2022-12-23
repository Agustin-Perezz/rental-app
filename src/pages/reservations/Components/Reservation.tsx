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
import { updateOwnerCar } from '../../../store/slices/Cars';
import Swal from 'sweetalert2';

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

    function handleRemove(idRental: number, idCar: number) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteReservationById(idRental));
                dispatch(updateOwnerCar({ idCar }));
                Swal.fire('Saved!', '', 'success');
            }
        });
    }

    return (
        <tr style={{ verticalAlign: 'middle' }}>
            <th>{reservation.id}</th>
            <td>{reservation.date_start}</td>
            <td>{reservation.date_end}</td>
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
                                handleRemove(reservation.id, reservation.fk_car)
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
