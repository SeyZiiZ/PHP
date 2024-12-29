import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get('/api/message')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error("Erreur lors de l'appel API :", error);
            });
    }, []);

    return (
        <div>
            <h1>React Frontend</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
