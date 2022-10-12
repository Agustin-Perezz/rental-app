import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getUsers } from '../../../store/slices/Users';
import { User } from './User';

interface Props {}

export const ListUsers: React.FC<Props> = ({}) => {
    const dispatch = useAppDispatch();
    const { users, isLoading } = useAppSelector((state) => state.users);

    React.useEffect(() => {
        dispatch(getUsers());
    }, []);

    if (isLoading) return <span>loading...</span>;

    return (
        <div className="container" style={{ maxWidth: 'max-content' }}>
            <table className="table is-striped is-bordered mt-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Type DNI</th>
                        <th>Number DNI </th>
                        <th>Nationality</th>
                        <th>Direction</th>
                        <th>Phone</th>
                        <th>Date of born</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((dataUser, index) => (
                        <User user={dataUser} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
