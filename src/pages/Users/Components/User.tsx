import React from 'react';
import { UserModel } from '../../../models/Users';
import { useAppDispatch } from '../../../store/hooks';
import { deleteUser, findCarsFromUser } from '../../../store/slices/Users';
import { useNavigate } from 'react-router-dom';

import updateIcon from '../../../assets/images/edit.png';
import trash from '../../../assets/images/trash.png';
import view from '../../../assets/images/find.png';
import Swal from 'sweetalert2';

interface Props {
    user: UserModel;
}

export const User: React.FC<Props> = ({ user }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleNavigate(userId: number) {
        dispatch(findCarsFromUser(userId));
        navigate(`/users/${userId}/cars`);
    }

    function onDelete(userId: number) {
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
                Swal.fire('Saved!', '', 'success');
                dispatch(deleteUser(userId));
            }
        });
    }

    return (
        <tr>
            <th>{user.id}</th>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>{user.type_document}</td>
            <td>{user.number_document}</td>
            <td>{user.nationality}</td>
            <td>{user.direction}</td>
            <td>{user.phone}</td>
            <td>{user.date_of_born}</td>
            <td>
                <div className="td_custom">
                    <span className="icon">
                        <img
                            src={trash}
                            onClick={() => onDelete(user.id)}
                        ></img>
                    </span>
                    <span
                        className="icon"
                        onClick={() => navigate(`/users/edit/${user.id}`)}
                    >
                        <img src={updateIcon} alt="update-icon" />
                    </span>
                    <span
                        className="icon"
                        onClick={() => handleNavigate(user.id)}
                    >
                        <img src={view} alt="find-icon" />
                    </span>
                </div>
            </td>
        </tr>
    );
};
