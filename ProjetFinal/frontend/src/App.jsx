import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Home from "./pages/home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Contact from "./pages/contact";


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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  };
  
  export default App;