import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Implementación Sistema ISO 45001",
      cliente: "Empresa Minera - Región de Antofagasta",
      descripcion: "Implementación completa de sistema de gestión de seguridad y salud ocupacional, incluyendo diagnóstico inicial, diseño de procesos, capacitación del equipo y auditoría de certificación.",
      area: "Consultores",
      resultados: ["Certificación ISO 45001 lograda", "Reducción de 40% en incidentes", "120 trabajadores capacitados"]
    },
    {
      titulo: "Programa de Capacitación Integral",
      cliente: "Empresa de Construcción - Santiago",
      descripcion: "Diseño e implementación de rutas formativas para operadores de maquinaria pesada, supervisores y prevencionistas de riesgo con modalidad mixta presencial y e-learning.",
      area: "Capacitaciones",
      resultados: ["200+ trabajadores certificados", "Subdominio corporativo implementado", "95% de aprobación"]
    },
    {
      titulo: "Auditoría y Cumplimiento Normativo",
      cliente: "Planta Industrial - Región del Biobío",
      descripcion: "Auditoría exhaustiva de cumplimiento normativo, identificación de brechas legales, elaboración de plan de acción y seguimiento de implementación.",
      area: "Consultores",
      resultados: ["28 brechas identificadas", "Plan de acción implementado", "Cumplimiento normativo 100%"]
    },
    {
      titulo: "Inspección Técnica de Obras",
      cliente: "Proyecto de Infraestructura - Valparaíso",
      descripcion: "Supervisión técnica continua de obras civiles con generación de informes semanales, control de calidad y evidencia documentada trazable.",
      area: "Consultores",
      resultados: ["18 meses de supervisión", "520 informes técnicos", "Cero observaciones de fiscalización"]
    },
    {
      titulo: "Cursos a la Medida en Seguridad",
      cliente: "Empresa de Servicios - Cobertura Nacional",
      descripcion: "Desarrollo de contenidos formativos personalizados en seguridad operacional, evaluación de riesgos y procedimientos de trabajo seguro.",
      area: "Capacitaciones",
      resultados: ["15 cursos desarrollados", "350 trabajadores capacitados", "Contenidos integrados a LMS corporativo"]
    },
    {
      titulo: "Implementación Sistema ISO 9001",
      cliente: "Empresa de Servicios Técnicos - Región Metropolitana",
      descripcion: "Diseño e implementación de sistema de gestión de calidad con enfoque en procesos, documentación y mejora continua.",
      area: "Consultores",
      resultados: ["Certificación ISO 9001 lograda", "24 procesos documentados", "Equipo interno capacitado"]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1769247178312-664ae1262cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0cyUyMGVuZ2luZWVyaW5nJTIwc2l0ZXxlbnwxfHx8fDE3NzE4NjYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Proyectos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Proyectos y Experiencia
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Casos de éxito que demuestran nuestro compromiso con el cumplimiento normativo, la evidencia trazable y la excelencia operacional.
          </p>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">+200</div>
              <p className="text-gray-600">Proyectos Ejecutados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">+80</div>
              <p className="text-gray-600">Clientes Activos</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">+5000</div>
              <p className="text-gray-600">Profesionales Capacitados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">16</div>
              <p className="text-gray-600">Regiones de Cobertura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Proyectos Destacados
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {proyectos.map((proyecto, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-blue-300 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">
                      {proyecto.titulo}
                    </h3>
                    <Badge 
                      variant={proyecto.area === "Consultores" ? "default" : "secondary"}
                      className={proyecto.area === "Consultores" ? "bg-blue-600" : "bg-green-600"}
                    >
                      {proyecto.area}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-blue-600 mb-4">{proyecto.cliente}</p>
                  
                  <p className="text-gray-600 mb-6">
                    {proyecto.descripcion}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Resultados:</h4>
                    <ul className="space-y-2">
                      {proyecto.resultados.map((resultado, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-blue-600 font-bold mt-1">✓</span>
                          <span>{resultado}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sectores de Experiencia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hemos trabajado con organizaciones de diversos sectores industriales a lo largo de Chile.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Minería",
              "Construcción",
              "Energía",
              "Manufactura",
              "Transporte",
              "Servicios",
              "Infraestructura",
              "Agroindustria"
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:border-blue-300 transition-all"
              >
                <p className="font-semibold text-gray-900">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lo que Dicen Nuestros Clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "El equipo de INGENUITY nos ayudó a obtener la certificación ISO 45001 en tiempo récord. Su rigor técnico y profesionalismo fueron clave para el éxito del proyecto."
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Gerente HSEQ</p>
                  <p className="text-sm text-gray-500">Empresa Minera</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "La plataforma e-learning y los cursos a la medida nos permitieron capacitar a más de 200 trabajadores distribuidos en distintas regiones. Excelente servicio."
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jefe de Capacitación</p>
                  <p className="text-sm text-gray-500">Empresa de Construcción</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Contar con evidencia documentada trazable ha sido fundamental para nuestras auditorías. INGENUITY entiende perfectamente las necesidades del sector industrial."
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Gerente de Operaciones</p>
                  <p className="text-sm text-gray-500">Planta Industrial</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}