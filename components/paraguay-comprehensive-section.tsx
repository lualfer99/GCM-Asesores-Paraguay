"use client"

import { Button } from "@/components/ui/button"
import { FileCheck, Building2, CheckCircle2, Calendar, ClipboardList, Home, Calculator, Plane } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CTAWrapper from "@/components/cta-wrapper"

export default function ParaguayComprehensiveSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".fade-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineTop = timelineRef.current.offsetTop
      const timelineHeight = timelineRef.current.offsetHeight
      const scrollPosition = window.scrollY + window.innerHeight / 2

      const progress = Math.min(Math.max((scrollPosition - timelineTop) / timelineHeight, 0), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const includedServices = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Planificación fiscal y protocolo de actuación",
      description:
        "Estudio personalizado de tu situación y objetivos, nos ponemos en el lugar de Hacienda para blindar la operativa y corregir los puntos de conexión con España.",
    },
    {
      number: "02",
      icon: FileCheck,
      title: "Obtención de residencia",
      description:
        "Coordinamos y gestionamos toda la documentación necesaria para tu residencia legal, cédula de identidad, RUC, certificado de residencia fiscal, modelo 030 en España...",
    },
    {
      number: "03",
      icon: Building2,
      title: "Apertura de cuenta bancaria sin CRS",
      description:
        "Asistencia completa para abrir cuentas sin CRS y planificación de todo el flujo bancario de tu estructura.",
    },
    {
      number: "04",
      icon: Home,
      title: "Sustancia en Paraguay",
      description:
        "Te aportamos un contrato de alquiler en Paraguay y documentación para blindar tu residencia fiscal.",
    },
    {
      number: "05",
      icon: Calculator,
      title: "Contabilidad anual",
      description: "Hacemos tu contabilidad mensual y anual para mantener tu RUC activo y tu residencia fiscal.",
    },
    {
      number: "06",
      icon: Plane,
      title: "Transfer privado",
      description:
        "Te recogeremos en el Aeropuerto con nuestro transfer privado y te llevaremos siempre para hacer todas las gestiones y procesos necesarios.",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Planificación fiscal estratégica",
      description:
        "Nos reunimos contigo para conocer tu caso, diseñar tu estrategia fiscal y presentarte un plan detallado con tiempos y pasos.",
      image: "/business-meeting-strategy.png",
    },
    {
      number: "02",
      title: "Viaje express a Asunción",
      description:
        "Te recibimos en el aeropuerto y gestionamos contigo los trámites presenciales (Inmigración, Ministerio del Interior, Policía, etc.). Todo en tres días.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Airport-transfers-for-VIP-1-of-1-wHlZsWfLZ698SvjEKYGssgnTdEONw6.webp",
    },
    {
      number: "03",
      title: "Residencia y RUC activos",
      description:
        "Una vez completado el proceso, en un viaje de 1 día, registraremos tu RUC, te ayudaremos a abrir tus cuentas bancarias y mantener tu estatus fiscal operativo. A partir de aquí, GCM sigue contigo para el mantenimiento anual.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/International_Banks_in_UAE-kKvxM7zMcJvTJlVLF9bTQ2s3i8InGM.webp",
    },
    {
      number: "04",
      title: "Baja fiscal de España",
      description:
        "Una vez ya esté la residencia activa, haremos el modelo 030 en España para dar de baja tu residencia fiscal y eliminar tus obligaciones tributarias.",
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
      <section id="que-incluye" className="bg-gray-50 relative overflow-hidden py-8">
        <div className="container mx-auto px-4 lg:px-6 relative">
          {/* Header */}
          <div className="max-w-5xl mx-auto mb-16 fade-on-scroll opacity-0">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Todo lo que incluye nuestra <span className="text-[#225DF6]">gestión integral en Paraguay</span>
                </h2>
              </div>
              <div className="lg:max-w-md">
                <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                  Te acompañamos en cada etapa del proceso, desde la planificación fiscal hasta tu residencia fiscal
                  activa, como el acompañamiento a posteriori para asegurar tu estructura en el largo plazo.
                </p>
                <CTAWrapper showMessage={false}>
                  <Button
                    onClick={scrollToConsultation}
                    className="bg-[#225DF6] hover:bg-[#1e52d9] text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold w-full lg:w-auto hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    Agendar Asesoría Gratuita
                  </Button>
                </CTAWrapper>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="fade-on-scroll opacity-0 group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#225DF6] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#225DF6] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#225DF6]/10 rounded-xl group-hover:bg-[#225DF6] transition-all duration-300 group-hover:scale-110">
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
      <section id="proceso" className="bg-white relative overflow-hidden py-8">
        <div className="container mx-auto px-4 lg:px-6 relative">
          {/* Header */}
          <div className="text-center mb-16 fade-on-scroll opacity-0">
            <div className="inline-flex items-center gap-2 bg-[#225DF6]/10 text-[#225DF6] px-6 py-3 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Nuestro Proceso
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
              4 Pasos para obtener tu <span className="text-[#225DF6]">residencia fiscal en Paraguay</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simplificamos al máximo el proceso y gestionamos todo con nuestro equipo de abogados en Paraguay y en
              España.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto" ref={timelineRef}>
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className="relative mb-16 last:mb-0">
                  {/* Connecting Line with Progress */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-32 w-1 h-full -translate-x-1/2 hidden lg:block">
                      <div className="absolute inset-0 bg-gray-200" />
                      <div
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#225DF6] to-[#1e52d9] transition-all duration-300 ease-out"
                        style={{
                          height: `${Math.max(0, Math.min(100, (scrollProgress - index * 0.25) * 400))}%`,
                        }}
                      />
                    </div>
                  )}

                  {/* Step Content */}
                  <div
                    className={`fade-on-scroll opacity-0 flex flex-col lg:flex-row gap-8 items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Image */}
                    <div className="flex-1 w-full">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#225DF6] to-[#1e52d9] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                        <img
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Number Badge (Center on desktop) */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#225DF6] to-[#1e52d9] rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    {/* Text Card */}
                    <div className="flex-1 w-full">
                      <div className="bg-white border-2 border-[#225DF6]/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-[#225DF6] transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 break-words">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg break-words">
                          {step.description}
                        </p>
                        <div className="mt-4 md:mt-6 inline-flex items-center gap-2 bg-gray-100 text-[#225DF6] font-semibold px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                          <span className="whitespace-nowrap">Paso {step.number} completado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20 fade-on-scroll opacity-0 px-4">
            <div className="w-full md:inline-block bg-gradient-to-br from-[#225DF6] to-[#1e52d9] rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 break-words">
                ¿Listo para Dar el Siguiente Paso?
              </h3>
              <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto break-words leading-relaxed">
                Agenda una sesión estratégica gratuita y descubre cómo Paraguay puede transformar tu situación fiscal.
              </p>
              <CTAWrapper>
                <Button
                  onClick={scrollToConsultation}
                  className="bg-white text-[#225DF6] hover:bg-gray-100 px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold w-full sm:w-auto max-w-full"
                >
                  <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="break-words">Agendar Asesoría Gratuita</span>
                </Button>
              </CTAWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
