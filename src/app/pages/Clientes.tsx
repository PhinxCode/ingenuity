import { Card, CardContent } from '../components/ui/card';

export default function Clientes() {
  const logos = [
    { nombre: "Empresa Minera S.A." },
    { nombre: "Constructora Nacional" },
    { nombre: "Planta Industrial" },
    { nombre: "Energía Chile" },
    { nombre: "Transportes Integrales" },
    { nombre: "Servicios Técnicos" },
    { nombre: "Manufactura Avanzada" },
    { nombre: "Infraestructura y Obras" },
    { nombre: "Agroindustria del Sur" },
    { nombre: "Logística Nacional" },
    { nombre: "Procesadora de Alimentos" },
    { nombre: "Grupo Industrial" }
  ];

  const alianzas = [
    { nombre: "SENCE", tipo: "Organización Técnica de Capacitación (OTEC)" },
    { nombre: "Mutual de Seguridad", tipo: "Alianza estratégica en prevención de riesgos" },
    { nombre: "Instituto de Normalización", tipo: "Certificación ISO" },
    { nombre: "Cámara Chilena de la Construcción", tipo: "Asociación sectorial" }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNsaWVudHMlMjBoYW5kc2hha2UlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NzE4NjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Clientes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Clientes y Alianzas
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Trabajamos con organizaciones líderes de diversos sectores industriales en Chile, generando valor a través de cumplimiento normativo y desarrollo de capacidades.
          </p>
        </div>
      </section>

      {/* Confianza */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Confían en Nosotros
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Más de 80 organizaciones han confiado en INGENUITY para fortalecer su cumplimiento normativo, implementar sistemas de gestión y desarrollar a sus equipos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">+80</div>
              <p className="text-gray-600">Clientes Activos</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">+200</div>
              <p className="text-gray-600">Proyectos Ejecutados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">+5000</div>
              <p className="text-gray-600">Profesionales Capacitados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Satisfacción</p>
            </div>
          </div>

          {/* Logo Grid Simulado */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 flex items-center justify-center hover:border-blue-300 transition-all"
              >
                <div className="text-center">
                  <div className="h-12 w-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {logo.nombre.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{logo.nombre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sectores que Atendemos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestra experiencia abarca múltiples industrias, adaptando nuestros servicios a las necesidades específicas de cada sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                sector: "Minería",
                descripcion: "Implementación de sistemas HSEQ y capacitación técnica"
              },
              {
                sector: "Construcción",
                descripcion: "Inspección técnica y formación de personal"
              },
              {
                sector: "Energía",
                descripcion: "Consultoría normativa y certificación ISO"
              },
              {
                sector: "Manufactura",
                descripcion: "Sistemas de gestión de calidad y capacitación"
              },
              {
                sector: "Transporte",
                descripcion: "Seguridad operacional y desarrollo de competencias"
              },
              {
                sector: "Servicios",
                descripcion: "Cumplimiento normativo y formación técnica"
              },
              {
                sector: "Infraestructura",
                descripcion: "Supervisión de obras y control de calidad"
              },
              {
                sector: "Agroindustria",
                descripcion: "Sistemas de gestión y capacitación especializada"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.sector}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alianzas Estratégicas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alianzas Estratégicas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mantenemos alianzas con organismos clave que respaldan nuestra capacidad técnica y certifican la calidad de nuestros servicios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {alianzas.map((alianza, index) => (
              <Card key={index} className="border-2 border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="h-20 w-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">
                      {alianza.nombre.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {alianza.nombre}
                  </h3>
                  <p className="text-gray-600">
                    {alianza.tipo}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acreditaciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Acreditaciones y Certificaciones
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con las acreditaciones necesarias para operar con los más altos estándares de calidad y cumplimiento normativo.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">OTEC Acreditada</div>
                <p className="text-sm text-gray-600">Organización Técnica de Capacitación registrada en SENCE</p>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">ISO Certified</div>
                <p className="text-sm text-gray-600">Consultores certificados en implementación ISO 9001, 14001 y 45001</p>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">Registro Nacional</div>
                <p className="text-sm text-gray-600">Registro de prestadores de servicios de capacitación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Breve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                "Trabajar con INGENUITY ha sido fundamental para fortalecer nuestro cumplimiento normativo. Su enfoque técnico, la calidad de su equipo y la evidencia documentada que generan nos han permitido reducir significativamente nuestra exposición legal."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Gerente General</p>
                <p className="text-sm text-gray-600">Empresa del Sector Industrial</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}