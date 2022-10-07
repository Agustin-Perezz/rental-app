import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { routes } from './routes';

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                {/* <Route path="/" element={<h2>all-cars</h2>} />
                <Route path="cars/edit" element={<h2>manage-cars</h2>} />
                <Route
                    path="cars/edit/:id_car"
                    element={<h2>page-car-crud</h2>}
                /> */}
                {/* <Route path="users" />
                <Route path="user/:id_user" />
                <Route path="user/add" element={<h3>add - user</h3>} />
                <Route path="cars" />
                <Route path="reservations" />
                <Route path="reservation/add" />
                <Route path="reservation/:id_reservation" /> */}
                <Route
                    path="/*"
                    element={<Navigate replace to="/cars/edit" />}
                />
            </Routes>
        </BrowserRouter>
    );
};
