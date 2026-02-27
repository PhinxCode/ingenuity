import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export default function QuienesSomos() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1564518534518-e79657852a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxODY2MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Equipo profesional"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Quiénes Somos
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Una organización técnica dedicada al cumplimiento normativo, la excelencia operacional y el desarrollo de capacidades profesionales.
          </p>
        </div>
      </section>

      {/* Descripción Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                INGENUITY: Rigor Técnico y Profesionalismo
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  INGENUITY es una empresa chilena dedicada a la prestación de servicios de ingeniería, capacitación técnica (OTEC), consultoría HSEQ, implementación de sistemas de gestión ISO e inspección técnica de obras y faenas.
                </p>
                <p>
                  Nuestro enfoque integral se centra en la seguridad, el cumplimiento normativo y el desempeño operacional, actuando con rigor técnico, criterio profesional y apego estricto a la normativa vigente.
                </p>
                <p>
                  Con presencia a nivel nacional y capacidad de movilización a lo largo del país, nuestra propuesta de valor se fundamenta en blindar al empleador mediante el cumplimiento riguroso de las exigencias legales y técnicas, la generación de evidencia documentada trazable y la aplicación sistemática de la mejora continua.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjB0cmFpbmluZyUyMGNsYXNzcm9vbSUyMHdvcmtlcnMlMjBzYWZldHl8ZW58MXx8fHwxNzcxNTM5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="INGENUITY equipo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Valores y Atributos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Rigor Técnico
                </h3>
                <p className="text-gray-600">
                  Actuamos con criterio experto y dominio normativo comprobable en cada proyecto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Profesionalismo Corporativo
                </h3>
                <p className="text-gray-600">
                  Mantenemos los más altos estándares de servicio y comunicación con nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Solidez Normativa
                </h3>
                <p className="text-gray-600">
                  Respaldo técnico basado en normativas nacionales e internacionales vigentes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mejora Continua
                </h3>
                <p className="text-gray-600">
                  Enfoque preventivo con evaluación y optimización permanente de procesos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Claridad Metodológica
                </h3>
                <p className="text-gray-600">
                  Procesos estructurados y comunicación directa sin ambigüedades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Adaptabilidad
                </h3>
                <p className="text-gray-600">
                  Capacidad de ajustar nuestros servicios a la realidad operativa de cada cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Nuestra Propuesta de Valor
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
              <p className="text-lg text-gray-700 mb-4">
                Más allá de la venta puntual de servicios, INGENUITY se enfoca en ofrecer un valor diferenciador estructurando soluciones integrales que permitan:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Reducir la exposición legal, técnica y operativa del empleador</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Desarrollar, calificar y certificar trabajadores bajo altos estándares</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Fortalecer capacidades internas con formación estructurada y medible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Generar evidencia documentada y trazable que respalde cada decisión</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Implementar sistemas de gestión verificables y sostenibles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cobertura Nacional
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contamos con presencia a nivel nacional y capacidad de movilización a lo largo de todo el país, permitiéndonos atender proyectos en cualquier región de Chile con el mismo nivel de rigor técnico y profesionalismo.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">16</div>
                <p className="text-gray-600">Regiones de cobertura</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Disponibilidad</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">+50</div>
                <p className="text-gray-600">Profesionales en red</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}