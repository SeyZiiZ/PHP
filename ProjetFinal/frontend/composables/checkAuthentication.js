import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  return isAuthenticated;
};

export default useAuthentication;