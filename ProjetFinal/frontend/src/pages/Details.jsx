import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BoxInfo from "../../components/ui/BoxInfo";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [incidentData, setIncidentData] = useState(null);

  useEffect(() => {
    const storedIncident = localStorage.getItem("selectedIncident");
    if (storedIncident) {
      setIncidentData(JSON.parse(storedIncident));
    } else {
      setIncidentData("Aucune donnée trouvée pour cet incident.");
    }
  }, []);

  const handleSave = () => {
    // Logique pour sauvegarder les modifications
    console.log("Sauvegarde des modifications...");
    // Rediriger vers la liste après la sauvegarde
    navigate("/incidents");
  };

  const handleDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet incident ?")) {
      // Logique pour supprimer l'incident
      console.log("Suppression de l'incident...");
      // Rediriger vers la liste après la suppression
      navigate("/incidents");
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
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
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
      <BoxInfo id={id} incidentData={incidentData} />
    </div>
  );
};

export default Details;