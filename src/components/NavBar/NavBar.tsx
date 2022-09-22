import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
    return (
        <nav className="navbar is-danger is-small custom_nav">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h1> Rental a Car</h1>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/users" className="navbar-item">
                        Gestionar Usuarios
                    </Link>
                    <Link to="/user/add" className="navbar-item">
                        Nuevo Usuario
                    </Link>
                    <Link to="/reservations" className="navbar-item">
                        Gestionar Reservas
                    </Link>
                    <Link to="/reservation/add" className="navbar-item">
                        Nueva Reserva
                    </Link>
                    <Link to="/cars" className="navbar-item">
                        Gestionar Auto
                    </Link>
                    <Link to="/cars/add" className="navbar-item">
                        Agregar Auto
                    </Link>
                </div>
            </div>
        </nav>
    );
};
