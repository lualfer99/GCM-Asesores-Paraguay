"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const teamMembers = [
  {
    name: "Miguel Navarro",
    position: "Dirección",
    image: "/team/miguel-navarro.avif",
    alternative_image: "/assets/placeholder.svg",
  },
  {
    name: "Vansh Pursnani",
    position: "Dirección",
    image: "/team/vans-pursnani.avif",
    alternative_image: "/assets/placeholder.svg",
  },
  {
    name: "Carlos Gomis",
    position: "Head of Tax Consultancy",
    image: "/team/carlos-gomis.avif",
    alternative_image: "/assets/placeholder.svg",
  },
]

export function TeamHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <section className="w-full pt-20 px-4 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          ¿Quiénes somos?
        </h2>

        <div className="relative mt-20 mb-16">
          {/* Floating Quote Icon - positioned exactly as in reference */}
          <Quote className="absolute -top-5 left-5 h-24 w-24 text-blue-500 z-30" fill="currentColor" />

          {/* Main Content Container - seamless text and image integration */}
          <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden relative">
            {/* Left side - Text content */}
            <div className="lg:w-3/5 py-10 lg:p-16 relative">
              <div className="pt-8 space-y-6 px-4">
                <p className="text-gray-800 leading-relaxed text-md">
                  Somos un <span className="font-bold">despacho especializado en fiscalidad internacional</span> para{" "}
                  <span className="font-bold">negocios digitales</span>, contamos con un{" "}
                  <span className="font-bold">equipo de más de 20 profesionales</span> dispuestos a dar{" "}
                  <span className="font-bold">lo mejor de sí</span> para optimizar tus impuestos de manera segura.
                </p>

                <p className="text-gray-800 leading-relaxed text-md">
                  En <span className="font-bold">GCM</span> compartimos la misión de{" "}
                  <span className="font-bold">liberar a los negocios digitales de la presión fiscal Española</span> de
                  la mano de los mejores del sector, contamos con <span className="font-bold">asesores</span>{" "}
                  especializados en cada <span className="font-bold">área</span> para asegurar una{" "}
                  <span className="font-bold">experiencia de calidad</span> a cada cliente, adentrándonos en los
                  aspectos más relevantes tanto a{" "}
                  <span className="font-bold">nivel empresarial como a nivel personal</span>, asegurando así cubrir
                  todas tus necesidades.
                </p>
              </div>
            </div>

            {/* Right side - Team member image (seamlessly connected) */}
            <div className="lg:w-2/5 relative">
              <div className="relative h-[400px] lg:h-[600px]">
                <Image
                  src={teamMembers[activeIndex].image || teamMembers[activeIndex].alternative_image}
                  alt={`${teamMembers[activeIndex].name} - ${teamMembers[activeIndex].position} en GCM Asesores`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                  style={{ objectPosition: "center top" }}
                  placeholder="blur"
                  quality={85}
                />

                {/* Name and position overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{teamMembers[activeIndex].name}</h3>
                  <p className="text-xl text-white">{teamMembers[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Navigation Buttons - positioned to overlap and extend beyond container */}
          <div className="absolute bottom-0 right-12 transform translate-y-1/2 flex gap-4 z-40">
            <button
              onClick={prevMember}
              className="bg-white hover:bg-gray-50 p-4 rounded-xl shadow-xl border border-gray-200 transition-all transform hover:scale-105"
              aria-label="Miembro anterior"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <button
              onClick={nextMember}
              className="p-4 rounded-xl shadow-xl transition-all transform hover:scale-105"
              style={{ backgroundColor: "#225DF6" }}
              aria-label="Miembro siguiente"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
