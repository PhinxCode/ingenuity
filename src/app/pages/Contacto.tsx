import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    tipoRequerimiento: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - en producción esto se conectaría a un backend
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1758598306845-8630d064a244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb250YWN0JTIwY29tbXVuaWNhdGlvbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE4NjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contacto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Solicite una propuesta técnica, agende un diagnóstico inicial o comuníquese con nuestro equipo para resolver sus consultas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Solicitar Propuesta o Información
                </h2>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-medium">
                      ✓ Mensaje enviado exitosamente. Nos contactaremos con usted a la brevedad.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa *</Label>
                      <Input
                        id="empresa"
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => handleChange('empresa', e.target.value)}
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input
                        id="cargo"
                        type="text"
                        value={formData.cargo}
                        onChange={(e) => handleChange('cargo', e.target.value)}
                        placeholder="Ej: Gerente HSEQ"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="contacto@empresa.cl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tipoRequerimiento">Tipo de Requerimiento *</Label>
                    <Select
                      value={formData.tipoRequerimiento}
                      onValueChange={(value) => handleChange('tipoRequerimiento', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diagnostico">Diagnóstico Inicial</SelectItem>
                        <SelectItem value="propuesta-consultores">Propuesta - INGENUITY Consultores</SelectItem>
                        <SelectItem value="propuesta-capacitaciones">Propuesta - INGENUITY Capacitaciones</SelectItem>
                        <SelectItem value="propuesta-integrada">Propuesta - Solución Integrada</SelectItem>
                        <SelectItem value="iso">Implementación ISO</SelectItem>
                        <SelectItem value="cursos">Información sobre Cursos</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={(e) => handleChange('mensaje', e.target.value)}
                      placeholder="Cuéntenos sobre sus necesidades, proyecto o consulta..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Solicitud
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Campos obligatorios. Sus datos serán tratados de forma confidencial.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                      <p className="text-gray-600 text-sm">
                        Las Bellotas 199, Oficina 62<br />
                        Providencia, Santiago<br />
                        Chile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                      <p className="text-gray-600 text-sm">
                        <a href="tel:+56912345678" className="hover:text-blue-600">
                          +56 9 1234 5678
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">
                        <a href="mailto:contacto@ingenuity.cl" className="hover:text-blue-600">
                          contacto@ingenuity.cl
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold text-gray-900">Lunes a Viernes:</span> 9:00 - 18:00</p>
                  <p><span className="font-semibold text-gray-900">Sábado:</span> Cerrado</p>
                  <p><span className="font-semibold text-gray-900">Domingo:</span> Cerrado</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900 text-white border-2 border-blue-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Acceso Plataformas
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  ¿Ya es cliente? Acceda a nuestras plataformas de capacitación:
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white/10"
                  >
                    <a href="https://aula.ingenuity.cl" target="_blank" rel="noopener noreferrer">
                      Aula Virtual
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white/10"
                  >
                    <a href="https://academia.ingenuity.cl" target="_blank" rel="noopener noreferrer">
                      Academia Virtual
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Prefiere Contactarnos por WhatsApp?
          </h2>
          <p className="text-gray-600 mb-6">
            Estamos disponibles para resolver sus consultas de forma inmediata.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700"
          >
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}