"use client"

import { Button } from "@/components/ui/button"
import { FileCheck, Building2, FileText, MessageSquare, CheckCircle2, Calendar } from "lucide-react"

export default function ParaguayComprehensiveSection() {
  const includedServices = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Diagnóstico y planificación fiscal",
      description: "Breve análisis personalizado de tu situación, objetivos y conveniencia de Paraguay.",
    },
    {
      number: "02",
      icon: FileCheck,
      title: "Obtención de residencia",
      description: "Coordinamos y gestionamos toda la documentación necesaria para tu residencia legal.",
    },
    {
      number: "03",
      icon: Building2,
      title: "Apertura bancaria internacional",
      description: "Asistencia completa para abrir cuenta en USD o EUR, cumpliendo todos los requisitos.",
    },
    {
      number: "04",
      icon: FileText,
      title: "Registro RUC y mantenimiento",
      description: "Tramitamos tu número fiscal y te guiamos en la conservación de la residencia año a año.",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Sesión estratégica inicial",
      description:
        "Hablamos contigo para conocer tu caso, diseñar tu estrategia fiscal y presentarte un plan detallado con tiempos y pasos.",
      image: "/business-meeting-strategy.png",
    },
    {
      number: "02",
      title: "Viaje express a Asunción",
      description:
        "Te recibimos en el aeropuerto y gestionamos contigo los trámites presenciales (Inmigración, Ministerio del Interior, Policía, etc.). Todo en tres días.",
      image: "/airport-arrival-welcome.jpg",
    },
    {
      number: "03",
      title: "Activación y seguimiento",
      description:
        "Mientras obtienes la residencia, nuestro equipo local mantiene activo tu expediente y gestiona las etapas administrativas sin que tengas que intervenir.",
      image: "/document-processing-office.jpg",
    },
    {
      number: "04",
      title: "Residencia y RUC activos",
      description:
        "Una vez completado el proceso, te ayudamos a registrar tu RUC, abrir tu cuenta y mantener tu estatus fiscal operativo. A partir de aquí, GCM sigue contigo para el mantenimiento anual.",
      image: "/success-celebration-business.jpg",
    },
  ]

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById("consulta")
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* BLOCK 1 - What's Included */}
      <section id="que-incluye" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative">
          {/* Header */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Todo lo que incluye nuestra <span className="text-[#225DF6]">gestión integral en Paraguay</span>
                </h2>
              </div>
              <div className="lg:max-w-md">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Te acompañamos en cada etapa del proceso: desde la planificación fiscal hasta tu residencia activa,
                  asegurando que todo sea claro, legal y sin contratiempos.
                </p>
                <Button
                  onClick={scrollToConsultation}
                  className="bg-[#225DF6] hover:bg-[#1e52d9] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase font-semibold tracking-wide w-full lg:w-auto"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Asesoría Gratuita
                </Button>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#225DF6] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#225DF6] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#225DF6]/10 rounded-xl group-hover:bg-[#225DF6] transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-[#225DF6] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#225DF6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BLOCK 2 - Our Process (Timeline) */}
      <section id="proceso" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#225DF6]/10 text-[#225DF6] px-6 py-3 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Nuestro Proceso
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
              Cuatro pasos para optimizar tu carga fiscal y obtener tu{" "}
              <span className="text-[#225DF6]">residencia en Paraguay</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lo simplificamos al máximo: sin papeleo confuso, sin riesgos, y con un equipo local que te acompaña
              personalmente.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className="relative mb-16 last:mb-0">
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-32 w-1 h-full bg-gradient-to-b from-[#225DF6] to-[#225DF6]/20 -translate-x-1/2 hidden lg:block" />
                  )}

                  {/* Step Content */}
                  <div
                    className={`flex flex-col lg:flex-row gap-8 items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Image */}
                    <div className="flex-1 w-full">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#225DF6] to-[#1e52d9] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                        <img
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl"
                        />
                      </div>
                    </div>

                    {/* Number Badge (Center on desktop) */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#225DF6] to-[#1e52d9] rounded-2xl flex items-center justify-center shadow-2xl">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    {/* Text Card */}
                    <div className="flex-1 w-full">
                      <div className="bg-white border-2 border-[#225DF6]/20 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-[#225DF6] transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                        <div className="mt-6 flex items-center gap-2 text-[#225DF6] font-semibold">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>Paso {step.number} completado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20">
            <div className="inline-block bg-gradient-to-br from-[#225DF6] to-[#1e52d9] rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">¿Listo para dar el siguiente paso?</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Agenda una sesión estratégica gratuita y descubre cómo Paraguay puede transformar tu situación fiscal.
              </p>
              <Button
                onClick={scrollToConsultation}
                className="bg-white text-[#225DF6] hover:bg-gray-100 px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase font-semibold tracking-wide"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Asesoría Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
