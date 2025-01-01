import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const linkStyle = ({ isActive }) =>
    `text-gray-600 hover:text-blue-500 transition-colors ${
      isActive ? "font-bold text-blue-500" : ""
    }`;

  const checkAuthentication = () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      setIsAuthenticated(decoded.exp > currentTime);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthentication();

    const handleStorageChange = () => checkAuthentication();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="container mx-auto px-4 h-16 flex items-center justify-between"
        id="navbar"
      >
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
            <a href="#footer">À propos</a>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>

        {isAuthenticated ? (
          <NavLink
            to="/dashboard"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Mon Compte
          </NavLink>
        ) : (
          <NavLink
            to="/register"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Inscription
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;