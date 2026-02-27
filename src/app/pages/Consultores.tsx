import { Link } from 'react-router';
import { Shield, FileSearch, Wrench, FileCheck, Eye, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Consultores() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1662309376159-b95fb193d96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwY29uc3VsdGFudCUyMGhhcmRoYXR8ZW58MXx8fHwxNzcxODY2MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Consultoría técnica"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-12 w-12" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                INGENUITY Consultores
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Diagnóstico técnico, consultoría HSEQ e implementación de sistemas de gestión con enfoque en cumplimiento normativo y reducción de exposición legal.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              <Link to="/contacto">
                Solicitar Diagnóstico
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
              Consultoría Técnica Estratégica
            </h2>
            <p className="text-lg text-gray-600">
              INGENUITY Consultores se especializa en reducir la exposición legal, técnica y operativa del empleador mediante control experto, diagnóstico normativo y generación de evidencia documentada trazable.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Diagnóstico y Cumplimiento */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <FileSearch className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Diagnóstico y Cumplimiento Normativo
                </h3>
                <p className="text-gray-600 mb-4">
                  Análisis exhaustivo de brechas normativas, evaluación de riesgos y elaboración de planes de acción para cumplimiento legal.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Auditorías de cumplimiento normativo</li>
                  <li>• Identificación de brechas legales</li>
                  <li>• Planes de acción correctivos</li>
                  <li>• Seguimiento de implementación</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ingeniería Aplicada */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ingeniería Aplicada
                </h3>
                <p className="text-gray-600 mb-4">
                  Soluciones técnicas especializadas para proyectos de infraestructura, procesos industriales y optimización operacional.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Estudios de ingeniería</li>
                  <li>• Diseño de soluciones técnicas</li>
                  <li>• Optimización de procesos</li>
                  <li>• Asesoría técnica especializada</li>
                </ul>
              </CardContent>
            </Card>

            {/* Consultoría HSEQ */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Consultoría HSEQ
                </h3>
                <p className="text-gray-600 mb-4">
                  Asesoría integral en salud, seguridad, medio ambiente y calidad con enfoque preventivo y de mejora continua.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gestión de seguridad y salud ocupacional</li>
                  <li>• Evaluación de riesgos operacionales</li>
                  <li>• Programas de prevención</li>
                  <li>• Auditorías HSEQ</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sistemas de Gestión ISO */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sistemas de Gestión ISO
                </h3>
                <p className="text-gray-600 mb-4">
                  Implementación, certificación y mantenimiento de sistemas de gestión bajo normas internacionales.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ISO 9001 (Calidad)</li>
                  <li>• ISO 14001 (Medio Ambiente)</li>
                  <li>• ISO 45001 (Seguridad y Salud)</li>
                  <li>• Auditorías internas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Inspección Técnica */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Inspección Técnica de Obras
                </h3>
                <p className="text-gray-600 mb-4">
                  Supervisión y control técnico de obras y faenas con generación de evidencia documentada.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Inspección técnica en terreno</li>
                  <li>• Control de calidad de obras</li>
                  <li>• Supervisión de faenas</li>
                  <li>• Informes técnicos trazables</li>
                </ul>
              </CardContent>
            </Card>

            {/* Evidencia y Trazabilidad */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Evidencia Documentada
                </h3>
                <p className="text-gray-600 mb-4">
                  Generación de documentación técnica trazable que respalda decisiones y reduce exposición legal.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Protocolos y procedimientos</li>
                  <li>• Registros trazables</li>
                  <li>• Informes técnicos</li>
                  <li>• Documentación de cumplimiento</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestro Proceso de Trabajo
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diagnóstico Inicial</h3>
              <p className="text-sm text-gray-600">
                Evaluación técnica y normativa de la situación actual
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Propuesta Técnica</h3>
              <p className="text-sm text-gray-600">
                Plan de acción estructurado con alcances y plazos definidos
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementación</h3>
              <p className="text-sm text-gray-600">
                Ejecución del proyecto con generación de evidencia trazable
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Seguimiento</h3>
              <p className="text-sm text-gray-600">
                Evaluación de resultados y mejora continua
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita Reducir su Exposición Legal y Técnica?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Solicite un diagnóstico inicial sin compromiso y reciba una propuesta técnica adaptada a sus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              <Link to="/contacto">
                Solicitar Diagnóstico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link to="/contacto">Agendar Reunión</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}