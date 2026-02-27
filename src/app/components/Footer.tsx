import { Link } from 'react-router';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="INGENUITY" 
              className="h-12 w-auto mb-4"
              // style={{ filter: 'brightness(1.1) invert(1)' }}
            />
            <p className="text-gray-400 text-sm mb-4">
              Servicios de ingeniería, consultoría HSEQ y capacitación técnica con enfoque en cumplimiento normativo y excelencia operacional.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Las Bellotas 199, Of. 62<br />Providencia, Santiago</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Áreas de Servicio</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/consultores" className="hover:text-white transition-colors">
                  INGENUITY Consultores
                </Link>
              </li>
              <li>
                <Link to="/capacitaciones" className="hover:text-white transition-colors">
                  INGENUITY Capacitaciones
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="hover:text-white transition-colors">
                  Clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/quienes-somos" className="hover:text-white transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="https://aula.ingenuity.cl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Aula Virtual
                </a>
              </li>
              <li>
                <a href="https://academia.ingenuity.cl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Academia Virtual
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+56912345678" className="hover:text-white transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contacto@ingenuity.cl" className="hover:text-white transition-colors">
                  contacto@ingenuity.cl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} INGENUITY. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}