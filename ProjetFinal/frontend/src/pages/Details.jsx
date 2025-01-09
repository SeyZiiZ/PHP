import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxInfo from "../../components/ui/BoxInfo";
import DescriptionBox from "../../components/ui/BoxInfoDescription";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [incidentData, setIncidentData] = useState(null);
  const [message, setMessage] = useState("");
  const [pendingChanges, setPendingChanges] = useState({});

  useEffect(() => {
    const storedIncident = localStorage.getItem("selectedIncident");
    if (storedIncident) {
      setIncidentData(JSON.parse(storedIncident));
    } else {
      setIncidentData("Aucune donnée trouvée pour cet incident.");
    }
  }, []);

  const handleBoxInfoChange = (updatedData) => {
    setPendingChanges(prev => ({
      ...prev,
      ...updatedData
    }));
  };

  const handleDescriptionChange = (newDescription) => {
    setPendingChanges(prev => ({
      ...prev,
      description: newDescription
    }));
  };

  const handleUpdate = async () => {
    try {
      const updatedData = {
        ...incidentData,
        ...pendingChanges
      };
      
      console.log(updatedData);

      const token = localStorage.getItem("jwt");
      
      const response = await axios.put(
        "http://localhost:8000/api/updateIncident",
        { ...updatedData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { Message, Error } = response.data;
      console.log(Error);
      setMessage(Message);
      setIncidentData(updatedData);
      setPendingChanges({});
      
    } catch (error) {
      setMessage("Erreur lors de la mise à jour : " + error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const task = JSON.parse(localStorage.getItem("selectedIncident"));

      const response = await axios.delete(
        "http://localhost:8000/api/deleteIncident",
        {
          data: { code: task.code },
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { Message, Status } = response.data;
      setMessage(Message);

      if (Status) {
        setTimeout(() => {
          navigate("/dashboard");
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (!incidentData) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold">Détails de l&apos;incident</h1>
        <p>Chargement des détails...</p>
      </div>
    );
  }

    return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Détails de l&apos;incident</h1>
        <div className="space-x-4">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            disabled={Object.keys(pendingChanges).length === 0}
          >
            Enregistrer les modifications
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Supprimer
          </button>
        </div>
      </div>
      <BoxInfo 
        id={id} 
        incidentData={incidentData} 
        onSave={handleBoxInfoChange}
      />
      <DescriptionBox
        description={incidentData.description}
        onSave={handleDescriptionChange}
      />
      <p>{message}</p>
    </div>
  );
};

export default Details;
