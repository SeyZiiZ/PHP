import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("jwt");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

        const user = response.data.User;
        setUserData(user);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setMessage("Erreur lors de la récupération des données utilisateur.");
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-10">
      {userData ? (
        <div>
            <h1 className="text-2xl font-bold">
                Bienvenue sur votre Dashboard :
                <span className="text-blue-500">{" "} {userData.email}</span>
            </h1>
        </div>
      ) : (
        <p>{message || "Chargement..."}</p>
      )}
    </div>
  );
};

export default Dashboard;