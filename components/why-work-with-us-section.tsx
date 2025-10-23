"use client"

import { Check, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhyWorkWithUsSection() {
  const yesItems = [
    "Tienes un negocio digital o internacional",
    "Buscas optimizar tu carga fiscal de forma legal y segura",
    "Quieres seguridad, transparencia y acompañamiento experto",
    "Estás dispuesto a invertir en una estructura sólida",
    "Has escuchado que en Paraguay se paga un 0% pero no estás seguro porque cada asesor dice una cosa y se contradicen",
    "Quieres tener conocimiento y entender bien lo que estás haciendo",
  ]

  const noItems = [
    "Tienes un negocio físico o local",
    "Te conformas con la carga fiscal actual en España",
    "Buscas atajos o esquemas dudosos",
    "Priorizas el precio antes que la seguridad de tu operativa",
    "Prefieres hacerlo por tu cuenta sin asesoramiento",
    "Facturas menos de 3.000€/mes",
    "Quieres vivir +6 meses en España",
  ]

  const differentials = [
    "Analizamos tu situación real antes de recomendarte Paraguay. (Nos ponemos en el lugar de Hacienda para extraer y corregir todos los puntos de conexión con España)",
    "Solo trabajamos con estructuras 100 % legales y defendibles.",
    "Te acompañamos durante y después del proceso, no solo en el papeleo.",
    "Nos especializamos en negocios digitales e internacionales, no en soluciones genéricas.",
    "Nuestra prioridad no es venderte un servicio, sino proteger tu libertad y optimizar tu carga fiscal.",
  ]

  const handleCTAClick = () => {
    const element = document.querySelector("#consulta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#225DF6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#225DF6]/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué trabajar con <span className="text-[#225DF6]">nuestro despacho</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 italic">
            "Lamentablemente, en este sector la mayoría que ofrecen este tipo de servicios son agencias que solo buscan
            tu dinero."
          </p>
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">En GCM hacemos las cosas distintas:</h3>
            <ul className="space-y-4">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#225DF6] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Sí es para ti */}
          <div className="bg-gradient-to-br from-[#225DF6] to-[#1e52d9] rounded-2xl shadow-lg p-8 text-white hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Sí es para ti</h3>
            </div>
            <ul className="space-y-4">
              {yesItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No es para ti */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">No es para ti</h3>
            </div>
            <ul className="space-y-4">
              {noItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                  <span className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300"
            onClick={handleCTAClick}
          >
            <Calendar className="w-5 md:w-6 h-5 md:h-6 mr-2" />
            Agendar Asesoría Gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
