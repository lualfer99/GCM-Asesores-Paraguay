"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Shield, Zap, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import VideoPlayer from "@/components/video-player"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCTAClick = () => {
    const element = document.querySelector("#consulta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      data-cta-section="hero"
      className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative w-full">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 hover:scale-105 transition-transform duration-300">
            <Shield className="w-4 h-4" />
            100% Legal y Seguro
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Optimiza tu fiscalidad desde <span className="text-blue-600 relative">Paraguay</span> de forma{" "}
            <span className="text-blue-600 relative">100% legal</span>
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-blue-600 font-bold mb-6">Si vendes servicios digitales</h2>

          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            En GCM, hemos ayudado a cientos de empresarios digitales como tú a{" "}
            <span className="text-blue-600 font-semibold">optimizar su fiscalidad</span> de manera segura y legal.
          </p>
          {/* Video Section */}
          <div className="mb-12 w-full max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <div className="absolute inset-0">
                <VideoPlayer
                  source="dailymotion"
                  videoId="k5UwAMFEaaUzFADifdI"
                  title="Video estrategia fiscal Paraguay"
                  autoplay={false}
                  controls={true}
                  mute={false}
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <Zap className="w-4 h-4 text-green-500" />
              <span className="font-medium text-gray-700 text-xs md:text-sm">Proceso ágil</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="font-medium text-gray-700 text-xs md:text-sm">0% de impuestos en Paraguay</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="font-medium text-gray-700 text-xs md:text-sm">1 día al año</span>
            </div>
          </div>

          <div>
            <Button
              size="lg"
              className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300"
              onClick={handleCTAClick}
            >
              <Calendar className="w-5 md:w-6 h-5 md:h-6 mr-2" />
              Agendar Asesoría Gratuita
            </Button>
            <p className="text-sm text-gray-500 mt-4">⚡ Respuesta en menos de 24 horas • 🔒 Sin compromiso</p>
          </div>
        </div>
      </div>
    </section>
  )
}
