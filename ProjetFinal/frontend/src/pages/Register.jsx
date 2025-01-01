import RegisterComponent from "../../components/apiCalls/Register";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegisterSubmit = async (formData) => {
        try {
          const response = await axios.post("/api/register", formData);
          const {Message, Status} = response.data;

          setMessage(Message);

          if (Status) {
            setTimeout(() => {
              navigate("/login")
            }, 1500);
          }
        } catch (error) {
          setMessage(error.message);
        }
      };

    return (
    <>
        <div className="container mx-auto px-4 py-10 w-2/4">
            <RegisterComponent onSubmit={handleRegisterSubmit}/>
            <p>{message}</p>
        </div>
    </>
    );
}

export default Register;