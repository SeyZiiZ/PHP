import { NavLink } from "react-router-dom";
import landingPageImage from "../assets/images/landingPageImage.png";
import { TimelineComponent } from "../../components/ui/TimeLine";
import AccordionComponent from "../../components/ui/Accordion";
import useAuthentication from "../../composables/checkAuthentication";

const Home = () => {
  const isAuthenticated = useAuthentication();

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-20">
          <div className="w-4/6 pr-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Gérez vos incidents en toute simplicité
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Notre solution offre le meilleur outil de gestion d`incidents du
              marché, conçu pour optimiser votre workflow et améliorer votre
              productivité.
            </p>
            <NavLink
              to={isAuthenticated ? "/dashboard" : "/login"}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Commencer
            </NavLink>
          </div>
          <div className="w-2/4">
            <img
              src={landingPageImage}
              alt="Image de reprensation"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="flex justify-center items-center py-20">
          <TimelineComponent />
        </div>
        <div className="py-20">
          <AccordionComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
