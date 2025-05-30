import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  
 
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800">Project Hub</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
            Testimonials
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
        <Button variant="outline" className="w-full text-gray-800 border-gray-300 hover:bg-gray-100" onClick={() => navigate("/auth/sign-in")}>Sign In</Button>  
        <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white" onClick={() => navigate("/auth/sign-up")}>Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full text-gray-800 border-gray-300 hover:bg-gray-100" onClick={() => navigate("/auth/sign-in")}>Sign In</Button>   
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white" onClick={() => navigate("/auth/sign-up")}>Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;