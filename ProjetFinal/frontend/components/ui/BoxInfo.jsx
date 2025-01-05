/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function BoxInfo ({ id, incidentData }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Informations générales</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">ID :</span> {id}</p>
              <p><span className="font-semibold">Code :</span> {incidentData.code}</p>
              <p><span className="font-semibold">Titre :</span> {incidentData.title}</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">État et priorité</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Statut : </span>
                <span className={`px-2 py-1 rounded text-sm ${
                  incidentData.status 
                  ? "bg-green-100 text-green-800" 
                  : "bg-yellow-100 text-yellow-800"
                }`}>
                  {incidentData.status ? "Complété" : "À faire"}
                </span>
              </p>
              <p>
                <span className="font-semibold">Priorité : </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {incidentData.priority}
                </span>
              </p>
              <p><span className="font-semibold">Créé le :</span> {incidentData.created_at}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };