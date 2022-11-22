import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/csgo-icon-42838.png";
import newLogo from "../../assets/counter-strike-global-offensive-2.svg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" className="logo-image" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link">Sign In</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
