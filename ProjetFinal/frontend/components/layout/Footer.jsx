const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">À propos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Notre histoire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  L`équipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Gestion d`incidents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Support 24/7
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Formation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li> <a href="mailto:contact@entreprise.com" className="hover:text-blue-400 transition-colors"> contact@entreprise.com </a></li>
              <li><a href="tel:+33 1 23 45 67 89" className="hover:text-blue-400 transition-colors">+33 1 23 45 67 89</a></li>
              <li><a href="https://www.google.com/maps?q=Paris" className="hover:text-blue-400 transition-colors">Paris, France</a></li> 
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="" className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="" className="hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="" className="hover:text-blue-400 transition-colors">
                Facebook
              </a>
            </div>
            <p><a className="hover:text-blue-400 transition-colors" href="#">Revenir en haut</a></p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>© 2025 Gestion Incident. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
