import React from 'react';
import { UserModel } from '../../../models/Users';
import { useAppDispatch } from '../../../store/hooks';
import { deleteUser, findCarsFromUser } from '../../../store/slices/Users';
import { useNavigate } from 'react-router-dom';

import updateIcon from '../../../assets/images/edit.png';
import trash from '../../../assets/images/trash.png';
import view from '../../../assets/images/find.png';

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
                            onClick={() => dispatch(deleteUser(user.id))}
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
