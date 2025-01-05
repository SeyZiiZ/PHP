import IncidentComponent from "../../components/apiCalls/Incident";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Incident = () => {

    const [message, setMessage] = useState("");
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleIncidentSubmit = async (formData) => {
        try {
            const token = localStorage.getItem("jwt");

          const response = await axios.post("http://localhost:8000/api/incident", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
          });
          const {Message, Status, Code} = response.data;

            setMessage(Message);
            setCode(Code);

          if (Status) {
            setTimeout(() => {
              navigate("/dashboard")
            }, 5000);
          }

        } catch (error) {
          setMessage(error.message);
        }
      };

    return (
        <div className="container mx-auto px-4 py-10 w-2/4">
            <IncidentComponent onSubmit={handleIncidentSubmit}/>
            <p>{message}</p>
            <p> {code} </p>
        </div>
    )
}

export default Incident;