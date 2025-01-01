import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("jwt");
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return false;
    }
  };

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
