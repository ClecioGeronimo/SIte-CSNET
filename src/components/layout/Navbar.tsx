import React from 'react';
import { Menu, X, Wifi, User } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Wifi className="w-8 h-8 text-orange-500" />
            <div className="flex items-center">
              <span className="text-3xl font-bold text-orange-500">
                CSNET
              </span>
              <span className="text-3xl font-bold text-blue-600">
                PRO LINK
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Início</a>
            <a href="/#planos" className="text-gray-600 hover:text-orange-500 transition-colors">Planos</a>
            <a href="/#quem-somos" className="text-gray-600 hover:text-orange-500 transition-colors">Quem Somos</a>
            <a
              href="#"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <User className="w-5 h-5" />
              <span className="font-semibold">Área do Cliente</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2">
              <a href="/" className="block px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors">Início</a>
              <a href="/#planos" className="block px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors">Planos</a>
              <a href="/#quem-somos" className="block px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors">Quem Somos</a>
              <a
                href="#"
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-2 rounded-lg"
              >
                <User className="w-5 h-5" />
                <span className="font-semibold">Área do Cliente</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;