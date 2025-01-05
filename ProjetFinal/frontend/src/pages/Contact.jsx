import { useState } from "react";
import ContcatComponent from "../../components/apiCalls/Contact";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (formData) => {
    try {
      const response = await axios.post("http://localhost:8000/api/contact", formData);

      const { Message } = response.data;

      setMessage(Message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10 w-2/4">
        <ContcatComponent onSubmit={handleContactSubmit} />
        <p> {message} </p>
      </div>
    </>
  );
};

export default Contact;
