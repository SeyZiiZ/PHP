import { useState } from "react";
import RegisterComponent from "../../components/apiCalls/Register";
import axios from "axios";

const Register = () => {

    const [message, setMessage] = useState("");

    const handleRegisterSubmit = async (formData) => {
        try {
          const response = await axios.post("/api/register", formData);
          setMessage(response.data.Message);
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