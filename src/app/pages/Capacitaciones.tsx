import { Link } from 'react-router';
import { BookOpen, GraduationCap, Monitor, FileText, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Capacitaciones() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjB0cmFpbmluZyUyMGNsYXNzcm9vbSUyMHdvcmtlcnMlMjBzYWZldHl8ZW58MXx8fHwxNzcxNTM5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Capacitación técnica"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-12 w-12" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                INGENUITY Capacitaciones
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Desarrollo de capacidades profesionales mediante rutas formativas estructuradas, plataforma e-learning propia y cursos a la medida alineados a brechas reales.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              <Link to="/contacto">
                Solicitar Información
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Formación Técnica de Alto Estándar
            </h2>
            <p className="text-lg text-gray-600">
              INGENUITY Capacitaciones se enfoca en fortalecer las capacidades internas de las organizaciones con formación estructurada, medible y alineada a las necesidades operativas y normativas de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Plataformas E-Learning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Plataformas E-Learning Propias
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              INGENUITY dispone de infraestructura tecnológica propia que permite impartir formación técnica de alto estándar con alcance nacional e internacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <Monitor className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  aula.ingenuity.cl
                </h3>
                <p className="text-gray-600 mb-4">
                  Plataforma principal de capacitación e-learning con acceso a cursos técnicos, evaluaciones y certificación online.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <a href="https://aula.ingenuity.cl" target="_blank" rel="noopener noreferrer">
                    Acceder a Aula Virtual
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  academia.ingenuity.cl
                </h3>
                <p className="text-gray-600 mb-4">
                  Plataforma complementaria para formación avanzada, contenidos especializados y subdominios personalizados para clientes corporativos.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <a href="https://academia.ingenuity.cl" target="_blank" rel="noopener noreferrer">
                    Acceder a Academia Virtual
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Subdominios Corporativos Personalizados</h4>
            <p className="text-gray-600">
              Ofrecemos la creación de subdominios de acceso exclusivo para empresas, permitiendo personalizar la experiencia formativa según la identidad corporativa de cada cliente, integrar contenidos específicos y gestionar usuarios de forma independiente.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios de Capacitación
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rutas Formativas */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Rutas Formativas por Cargo
                </h3>
                <p className="text-gray-600 mb-4">
                  Diseño de trayectorias de aprendizaje estructuradas que desarrollan competencias progresivas según roles y responsabilidades.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Identificación de competencias requeridas</li>
                  <li>• Diseño de trayectorias formativas</li>
                  <li>• Evaluación de brechas</li>
                  <li>• Certificación por niveles</li>
                </ul>
              </CardContent>
            </Card>

            {/* Capacitación Presencial */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Capacitación Presencial
                </h3>
                <p className="text-gray-600 mb-4">
                  Formación técnica en terreno o en instalaciones del cliente, con instructores certificados y enfoque práctico.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cursos in-company</li>
                  <li>• Talleres prácticos</li>
                  <li>• Simulaciones y ejercicios</li>
                  <li>• Cobertura nacional</li>
                </ul>
              </CardContent>
            </Card>

            {/* E-Learning */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Plataforma E-Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Capacitación remota a través de nuestras plataformas tecnológicas con contenidos interactivos y evaluación online.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Acceso 24/7</li>
                  <li>• Contenidos multimedia</li>
                  <li>• Evaluaciones automáticas</li>
                  <li>• Certificación digital</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cursos a la Medida */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Cursos a la Medida
                </h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo de contenidos formativos específicamente diseñados según los requerimientos operativos y normativos de cada cliente.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Análisis de necesidades</li>
                  <li>• Diseño instruccional personalizado</li>
                  <li>• Contenidos específicos</li>
                  <li>• Retroalimentación continua</li>
                </ul>
              </CardContent>
            </Card>

            {/* Certificación */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Certificación y Evaluación
                </h3>
                <p className="text-gray-600 mb-4">
                  Procesos de evaluación estandarizados y certificación de competencias bajo criterios técnicos rigurosos.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Evaluaciones estandarizadas</li>
                  <li>• Certificados técnicos</li>
                  <li>• Registro de competencias</li>
                  <li>• Validez nacional</li>
                </ul>
              </CardContent>
            </Card>

            {/* Desarrollo de Trabajadores */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Desarrollo y Calificación
                </h3>
                <p className="text-gray-600 mb-4">
                  Programas de desarrollo profesional que fortalecen competencias técnicas y permiten la progresión de carrera.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Planes de desarrollo individual</li>
                  <li>• Calificación de competencias</li>
                  <li>• Seguimiento de progreso</li>
                  <li>• Planes de carrera</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Más Allá de la Capacitación Tradicional
            </h2>
            <div className="bg-white border-2 border-blue-200 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6">
                INGENUITY Capacitaciones no se limita a la venta puntual de cursos. Nuestro enfoque diferenciador consiste en:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Formación Alineada a Brechas</h4>
                    <p className="text-sm text-gray-600">Capacitación diseñada según necesidades reales identificadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rutas Estructuradas</h4>
                    <p className="text-sm text-gray-600">Trayectorias de aprendizaje progresivas y coherentes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Evaluación Continua</h4>
                    <p className="text-sm text-gray-600">Medición de progreso y efectividad de la formación</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alto Estándar Técnico</h4>
                    <p className="text-sm text-gray-600">Contenidos bajo criterios profesionales rigurosos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita Fortalecer las Capacidades de su Equipo?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Solicite información sobre nuestros programas de capacitación o acceda a nuestras plataformas e-learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              <Link to="/contacto">
                Solicitar Información
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link to="/contacto">Cotizar Programa</Link>
            </Button>
          </div>
          
          <div className="pt-8 border-t border-blue-700">
            <p className="text-blue-100 mb-4">Acceda a nuestras plataformas:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://aula.ingenuity.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 underline"
              >
                Aula Virtual →
              </a>
              <a
                href="https://academia.ingenuity.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 underline"
              >
                Academia Virtual →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}