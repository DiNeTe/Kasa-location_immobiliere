import "../sass/header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src="../../public/logoKasa.svg" alt="Kasa" className="header-logo" />
      <nav>
        <ul className="header-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            À Propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
