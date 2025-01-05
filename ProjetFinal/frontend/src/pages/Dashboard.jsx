import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import DataTableComponent from "../../components/ui/DataTable";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [userIncident, setUserIncident] = useState(null);
  const [userIncidentResolved, setUserIncidentResolved] = useState(null);
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
            Authorization: `Bearer ${token}`,
          },
        });

        const user = response.data.User;
        const incidents = response.data.Incidents;
        const incidentsResolved = response.data.IncidentsResolved;
        setUserData(user);
        setUserIncident(incidents);
        setUserIncidentResolved(incidentsResolved);
        localStorage.removeItem("selectedIncident");
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setMessage("Erreur lors de la récupération des données utilisateur.");
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center">
      {userData ? (
        <div className="text-center py-6">
          <h1 className="text-2xl font-bold mb-8">
            Bienvenue sur votre Dashboard :
            <span className="text-blue-500"> {userData.email}</span>
          </h1>
          <div className="mb-8 flex gap-4 justify-center">
            <NavLink
              to={"/incident"}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Un Incident ?
            </NavLink>
            <button onClick={() => {
                localStorage.removeItem("jwt");
                window.location.reload();
                navigate("/login");
            }}
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Se Déconnecter
            </button>
          </div>
          <DataTableComponent data={userIncident} personnalText={"Votre Tableau d'incidents en cours"}/>
          <DataTableComponent data={userIncidentResolved} personnalText={"Votre Tableau d'incidents terminés"}/>
        </div>
      ) : (
        <div className="h-4/6">
          <p>{message || "Chargement..."}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
