import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `text-gray-600 hover:text-blue-500 transition-colors ${
      isActive ? "font-bold text-blue-500" : ""
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" id="navbar">
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-500 hover:text-blue-500 transition-colors"
        >
          Gestion Incident
        </NavLink>
        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/" className={linkStyle}>
              Accueil
            </NavLink>
          </li>
          <li className="text-gray-600">
             <a href="#footer"> À propos </a>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/register"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Inscription
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;