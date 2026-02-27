import { Link } from 'react-router';
import { ArrowRight, Shield, FileCheck, TrendingUp, Globe, BookOpen, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1770822662903-aa69f6aa9b03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBpbnNwZWN0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTUzOTU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Ingeniería profesional"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Cumplimiento Normativo Sin Improvisaciones
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Blindamos a su organización mediante rigor técnico, evidencia documentada trazable y sistemas de gestión verificables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8"
              >
                <Link to="/contacto">
                  Solicitar Propuesta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
              >
                <Link to="/contacto">Agendar Diagnóstico</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marca Matriz Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              INGENUITY: Organización Técnica Integral
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              INGENUITY opera como una marca matriz que integra áreas especializadas en ingeniería, consultoría HSEQ y capacitación técnica. No somos una OTEC tradicional: somos una estructura técnica con capacidad consultiva, formativa y de control operacional.
            </p>
            <p className="text-lg text-gray-600">
              Cada área puede operar de forma independiente o integrada, adaptándose al nivel de madurez y necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas Especializadas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Áreas Especializadas
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* INGENUITY Consultores */}
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  INGENUITY Consultores
                </h3>
                <p className="text-gray-600 mb-6">
                  Diagnóstico técnico y normativo, consultoría HSEQ, implementación de sistemas de gestión ISO, inspección técnica de obras y generación de evidencia documentada trazable.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-gray-700">
                    <FileCheck className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Diagnóstico y cumplimiento normativo</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <FileCheck className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Ingeniería aplicada y consultoría HSEQ</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <FileCheck className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Sistemas de gestión ISO</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <FileCheck className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Inspección técnica de obras y faenas</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/consultores">
                    Conocer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* INGENUITY Capacitaciones */}
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  INGENUITY Capacitaciones
                </h3>
                <p className="text-gray-600 mb-6">
                  Diseño de rutas formativas por cargo, desarrollo y calificación de trabajadores, capacitación presencial y e-learning, y cursos a la medida alineados a brechas reales.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-gray-700">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Rutas formativas estructuradas por cargo</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Plataforma e-learning propia</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Cursos a la medida personalizados</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Certificación y evaluación continua</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/capacitaciones">
                    Conocer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modelo de Integración Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Modelo de Integración Estratégica
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cuando su organización lo requiere, integramos nuestras áreas en un modelo completo adaptable a su nivel de madurez operacional.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diagnóstico</h3>
              <p className="text-sm text-gray-600">
                Análisis técnico y normativo de brechas operacionales
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Intervención</h3>
              <p className="text-sm text-gray-600">
                Implementación técnica y sistemas de gestión
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Formación</h3>
              <p className="text-sm text-gray-600">
                Capacitación estratégica alineada a necesidades reales
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Evidencia</h3>
              <p className="text-sm text-gray-600">
                Documentación trazable y mejora continua
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciadores Clave Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Por Qué Elegir INGENUITY
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Rigor Técnico Comprobable</h3>
              <p className="text-blue-100">
                Actuamos con criterio profesional y apego estricto a la normativa vigente
              </p>
            </div>

            <div className="text-center">
              <FileCheck className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Evidencia Documentada</h3>
              <p className="text-blue-100">
                Generamos documentación trazable que respalda cada decisión técnica
              </p>
            </div>

            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Mejora Continua</h3>
              <p className="text-blue-100">
                Aplicamos sistemáticamente procesos de evaluación y optimización
              </p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Integración Estratégica</h3>
              <p className="text-blue-100">
                Combinamos consultoría y capacitación cuando su organización lo requiere
              </p>
            </div>

            <div className="text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Cobertura Nacional</h3>
              <p className="text-blue-100">
                Capacidad de movilización a lo largo de todo el país
              </p>
            </div>

            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Plataforma E-Learning</h3>
              <p className="text-blue-100">
                Tecnología propia para formación remota de alto estándar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Respaldo y Confianza Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Respaldo y Experiencia Demostrable
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabajamos bajo los más altos estándares normativos, respaldando a organizaciones en diversos sectores industriales a nivel nacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">+15</div>
                <p className="text-gray-600">Años de experiencia</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">+200</div>
                <p className="text-gray-600">Proyectos ejecutados</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">+5000</div>
                <p className="text-gray-600">Profesionales capacitados</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Normativas y Estándares
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
              <div>ISO 9001</div>
              <div>ISO 14001</div>
              <div>ISO 45001</div>
              <div>Ley 16.744</div>
              <div>DS 594</div>
              <div>DS 40</div>
              <div>NCh 2728</div>
              <div>SENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para Fortalecer su Cumplimiento Normativo?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Solicite una propuesta técnica o agende un diagnóstico inicial sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8"
            >
              <Link to="/contacto">
                Solicitar Propuesta Técnica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              <Link to="/contacto">Agendar Diagnóstico</Link>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-700">
            <p className="text-blue-100 mb-4">¿Ya es cliente? Acceda a nuestras plataformas:</p>
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