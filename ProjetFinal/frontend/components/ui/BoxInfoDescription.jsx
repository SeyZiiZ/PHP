import { useState } from 'react';
import { Pencil } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export default function DescriptionBox({ description: initialDescription, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(initialDescription);

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) {
      onSave(description);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <div className="bg-gray-50 p-4 rounded">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Description</h2>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <Pencil className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        
        <div className="space-y-2">
          {isEditing ? (
            <div className="space-y-2">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          ) : (
            <div 
              className="text-gray-700 whitespace-pre-wrap cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors"
              onClick={() => setIsEditing(true)}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
