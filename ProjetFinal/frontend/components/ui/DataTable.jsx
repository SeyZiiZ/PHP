import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

// eslint-disable-next-line react/prop-types
export default function DataTableComponent({ data, personnalText }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(data || []);
  }, [data]);

  const onRowClick = (rowData) => {
    localStorage.setItem("selectedIncident", JSON.stringify(rowData));
    navigate(`/details/${rowData.code}`);
  };

  const statusBodyTemplate = (rowData) => {
    return rowData.status === false ? "À faire" : "Complété";
  };

  return (
    <div className="mb-12">
      <div>
        <p className="font-bold text-2xl mb-4">{personnalText}</p>
      </div>
      <div className="card">
        <DataTable
          value={products}
          tableStyle={{ minWidth: "50rem" }}
          onRowClick={(e) => onRowClick(e.data)}
          rowClassName={() => "clickable-row"}
        >
          <Column field="code" header="Code"></Column>
          <Column field="title" header="Titre"></Column>
          <Column
            field="status"
            header="Statut"
            body={statusBodyTemplate}
          ></Column>
          <Column field="priority" header="Priorité"></Column>
          <Column field="created_at" header="Créé le"></Column>
        </DataTable>
      </div>
    </div>
  );
}
