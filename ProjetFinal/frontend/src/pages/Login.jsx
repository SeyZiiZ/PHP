import LoginComponent from "../../components/apiCalls/Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLoginSubmit = async (formData) => {
        try {
          const response = await axios.post("/api/login", formData);
          const {Message, Status, token} = response.data;

          setMessage(Message);

          if (Status) {
            localStorage.setItem("jwt", token);

            setTimeout(() => {
              navigate("/dashboard");
              window.location.reload();
            }, 1500);
          }

        } catch (error) {
          setMessage(error.message);
        }
      };


    return (
        <div className="container mx-auto px-4 py-10 w-2/4">
            <LoginComponent onSubmit={handleLoginSubmit}/>
            <p>{message}</p>
        </div>
    );
}

export default Login;