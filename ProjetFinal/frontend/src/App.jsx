import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Home from "./pages/home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Contact from "./pages/contact";
import Dashboard from "./pages/Dashboard";
import Incident from "./pages/Incident";
import Details from "./pages/Details";
import ProtectedRoute from "../components/security/ProtectedRoute";

const App = () => {
    const location = useLocation();
    
    const protectedPaths = ['/dashboard', '/incident', '/details'];
    
    const isProtectedRoute = protectedPaths.some(path => 
        location.pathname.startsWith(path)
    );

    return (
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/incident"
              element={
                <ProtectedRoute>
                  <Incident />
                </ProtectedRoute>
              }
            />
            <Route
              path="/details/:id"
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {!isProtectedRoute && <Footer />}
      </div>
    );
};

export default App;