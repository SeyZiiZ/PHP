import { useState } from 'react';
import { Pencil, Save, X } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export default function BoxInfo({ id, incidentData: initialData, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState(initialData);

  const handleChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) {
      onSave(data);
    }
  };

  const getStatusColor = (status) => {
    if (status === "1") return "bg-orange-100 text-orange-800";
    if (status === true) return "bg-green-100 text-green-800";
    return "bg-yellow-100 text-yellow-800";
  };

  const getStatusText = (status) => {
    if (status === "1") return "En cours";
    if (status === true) return "Complété";
    return "À faire";
  };

  const getPriorityColor = (priority) => {
    if (priority === "1") return "bg-orange-100 text-orange-800";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <div className="flex justify-end mb-2">
        {isEditing ? (
          <div className="space-x-2">
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              title="Annuler"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>
            <button
              onClick={handleSave}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              title="Enregistrer"
            >
              <Save className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            title="Modifier"
          >
            <Pencil className="h-4 w-4 text-gray-600" />
          </button>
        )}
      </div>

      {/* Affichage des données */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Informations générales</h2>
          <div className="space-y-2">
            <p><span className="font-semibold">ID :</span> {id}</p>
            <p><span className="font-semibold">Code :</span> {data.code}</p>
            <p>
              <span className="font-semibold">Titre :</span>
              {isEditing ? (
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  className="ml-2 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="ml-2">{data.title}</span>
              )}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">État et priorité</h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Statut : </span>
              {isEditing ? (
                <select
                  value={
                    data.status === true ? "true" : data.status === "1" ? "1" : "false"
                  }
                  onChange={(e) =>
                    handleChange(
                      "status",
                      e.target.value === "true" ? true : e.target.value
                    )
                  }
                  className="ml-2 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="false">À faire</option>
                  <option value="true">Complété</option>
                </select>
              ) : (
                <span
                  className={`px-2 py-1 rounded text-sm ${getStatusColor(data.status)}`}
                >
                  {getStatusText(data.status)}
                </span>
              )}
            </p>
            <p>
              <span className="font-semibold">Priorité : </span>
              {isEditing ? (
                <select
                  value={data.priority}
                  onChange={(e) => handleChange("priority", e.target.value)}
                  className="ml-2 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Basse">Basse</option>
                  <option value="Moyenne">Moyenne</option>
                  <option value="Haute">Haute</option>
                </select>
              ) : (
                <span
                  className={`px-2 py-1 rounded text-sm ${getPriorityColor(data.priority)}`}
                >
                  {data.priority}
                </span>
              )}
            </p>
            <p><span className="font-semibold">Créé le :</span> {data.created_at}</p>
          </div>
        </div>
      </div>
    </div>
  );
}