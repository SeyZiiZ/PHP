import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [message, setMessage] = useState("");
    const [secondMessage, setsecondMessage] = useState("");

    useEffect(() => {
        axios.get('/api/message')
            .then(response => {
                setMessage(response.data.message);
                setsecondMessage(response.data.other);
            })
            .catch(error => {
                setMessage("Erreur lors de l'appel API");
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>React Frontend</h1>
            <p>{message}</p>
            <p>{secondMessage}</p>
        </div>
    );
};

export default App;