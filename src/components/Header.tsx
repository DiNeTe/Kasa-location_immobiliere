// variante de <Link> permet de naviguer entre les composants en réagissant à l'itinéraire actif
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink
            to="/">
      <img src="../../public/logoKasa.svg" alt="Kasa" className="header-logo" />
      </NavLink>
      <nav>
        <ul className="header-nav">
          <NavLink
            to="/"
            // isActive = booléen, indique si le lien correspond à la route active
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
