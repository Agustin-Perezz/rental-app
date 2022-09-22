import { Link } from 'react-router-dom';
import { navRoutes } from './NavBarRoutes';

export const NavBar: React.FC = () => {
    return (
        <nav className="navbar is-danger is-small custom_nav">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item title is-6">
                    Rent a Car
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    {navRoutes.map(({ to, name }) => (
                        <Link to={to} key={to} className="navbar-item">
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
