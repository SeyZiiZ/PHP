import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Material Tailwind
import { ThemeProvider } from "@material-tailwind/react";

// PrimeReact
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Thème PrimeReact
import "primereact/resources/primereact.min.css"; // Composants de base

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
