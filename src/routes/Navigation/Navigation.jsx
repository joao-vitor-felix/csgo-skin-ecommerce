import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Outlet, Link } from 'react-router-dom';
import { signUserOut } from '../../utils/firebase/firebase.utils';

import Logo from '../../assets/CSGO-LOGO-Server-Hosting.webp';
import './Navigation.scss';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" className="logo-image" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signUserOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/login">
              Sign In
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
