"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Shield, Zap, TrendingUp, Download, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import BunnyVideoPlayer from "@/components/bunny-video-player"
import CTAWrapper from "@/components/cta-wrapper"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCTAClick = () => {
    const element = document.querySelector("#consulta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadGuide = () => {
    const link = document.createElement("a")
    link.href = "/guia-residencia-fiscal-paraguay.pdf"
    link.download = "Guia-Residencia-Fiscal-Paraguay-GCM.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 3000)
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
                <BunnyVideoPlayer libraryId="518189" videoId="a7dd0a91-5a34-4841-abb9-eecfe0e6dba2" />
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

          <div className="flex flex-col gap-4 justify-center items-center">
            <CTAWrapper>
              <Button
                className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 w-full max-w-md md:py-6 text-white font-bold rounded-2xl border-2 border-blue-600 hover:scale-105 transition-transform duration-300"
                onClick={handleCTAClick}
              >
                <Calendar className="w-5 md:w-6 h-5 md:h-6 mr-2" />
                Agendar Asesoría Gratuita
              </Button>
            </CTAWrapper>

            <Button
              variant="outline"
              className={`text-lg md:text-xl px-8 md:px-12 py-4 w-full max-w-md md:py-6 rounded-2xl border-2 transition-all duration-300 ${
                downloadSuccess
                  ? "border-green-600 text-green-600 bg-green-50"
                  : "border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 hover:scale-105"
              }`}
              onClick={handleDownloadGuide}
              disabled={downloadSuccess}
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle className="w-5 md:w-6 h-5 md:h-6 mr-2" />
                  ¡Guía Descargada!
                </>
              ) : (
                <>
                  <Download className="w-5 md:w-6 h-5 md:h-6 mr-2" />
                  Descargar Guía Legal
                </>
              )}
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-4">⚡ Respuesta en menos de 24 horas • 🔒 Sin compromiso</p>
        </div>
      </div>
    </section>
  )
}
