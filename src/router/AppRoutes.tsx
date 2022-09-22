import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

interface Props {}

export const AppRoutes: React.FC<Props> = ({}) => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<h2>a</h2>} />
                <Route path="users" />
                <Route path="user/:id_user" />
                <Route path="user/add" element={<h3>add - user</h3>} />
                <Route path="cars" />
                <Route path="cars/add" />
                <Route path="cars/:id_car" />
                <Route path="reservations" />
                <Route path="reservation/add" />
                <Route path="reservation/:id_reservation" />
                <Route path="/*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};
