import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="INGENUITY" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/quienes-somos"
              className={`text-sm hover:text-blue-600 transition-colors ${
                isActive('/quienes-somos') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Quiénes Somos
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                Áreas de Servicio
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg py-2 z-50">
                  <Link
                    to="/consultores"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-medium">INGENUITY Consultores</div>
                    <div className="text-xs text-gray-500 mt-1">Diagnóstico, ingeniería y consultoría HSEQ</div>
                  </Link>
                  <Link
                    to="/capacitaciones"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-medium">INGENUITY Capacitaciones</div>
                    <div className="text-xs text-gray-500 mt-1">Formación técnica y desarrollo de competencias</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/proyectos"
              className={`text-sm hover:text-blue-600 transition-colors ${
                isActive('/proyectos') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Proyectos
            </Link>

            <Link
              to="/clientes"
              className={`text-sm hover:text-blue-600 transition-colors ${
                isActive('/clientes') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Clientes
            </Link>

            <Link
              to="/contacto"
              className={`text-sm hover:text-blue-600 transition-colors ${
                isActive('/contacto') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Contacto
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <a href="https://aula.ingenuity.cl" target="_blank" rel="noopener noreferrer">
                Aula Virtual
              </a>
            </Button>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link to="/contacto">Solicitar Propuesta</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/quienes-somos"
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quiénes Somos
              </Link>
              <Link
                to="/consultores"
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                INGENUITY Consultores
              </Link>
              <Link
                to="/capacitaciones"
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                INGENUITY Capacitaciones
              </Link>
              <Link
                to="/proyectos"
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                to="/clientes"
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clientes
              </Link>
              <Link
                to="/contacto"
                className="text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <a href="https://aula.ingenuity.cl" target="_blank" rel="noopener noreferrer">
                    Aula Virtual
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                    Solicitar Propuesta
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}