import { Outlet, Link } from 'react-router-dom';
import newLogoo from '../../assets/CSGO-LOGO-Server-Hosting.webp';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src={newLogoo} alt="logo" className="logo-image" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
