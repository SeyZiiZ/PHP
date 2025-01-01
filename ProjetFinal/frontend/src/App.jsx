import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Home from "./pages/home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Contact from "./pages/contact";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "../components/security/ProtectedRoute";

const App = () => {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
};

export default App;