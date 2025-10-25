"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock, Shield, CheckCircle, MessageCircle, Phone, Mail, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useVideoProgress } from "@/contexts/video-progress-context"

export default function ConsultationSection() {
  const [calendlyReady, setCalendlyReady] = useState(false)
  const pathname = usePathname()
  const { hasWatched90Percent } = useVideoProgress()

  const baseCalendlyUrl = pathname.includes("gestoria-para-llcs")
    ? "https://calendly.com/d/cndt-ytb-8j3/consulta-fiscal-para-optimizar-una-llc"
    : "https://calendly.com/d/cncj-m4f-7xt/consulta-fiscal-para-crear-una-llc"

  const [finalCalendlyUrl, setFinalCalendlyUrl] = useState(baseCalendlyUrl)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const utmParams = new URLSearchParams()
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]

    utmKeys.forEach((key) => {
      const value = urlParams.get(key)
      if (value) utmParams.append(key, value)
    })

    if (utmParams.toString()) {
      setFinalCalendlyUrl(`${baseCalendlyUrl}?${utmParams.toString()}`)
    }
  }, [baseCalendlyUrl])

  useEffect(() => {
    if (!hasWatched90Percent) return
    if (window.Calendly) return setCalendlyReady(true)

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => setCalendlyReady(true)
    script.onerror = () => setCalendlyReady(false)

    document.head.appendChild(script)
  }, [hasWatched90Percent])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, me gustaría agendar una asesoría fiscal gratuita para crear una LLC.")
    window.open(`https://wa.me/13526080344?text=${message}`, "_blank")
  }

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Solicitud de Asesoría Fiscal - LLC")
    const body = encodeURIComponent(`Hola,
Me gustaría agendar una asesoría para crear una LLC.
Gracias,`)
    window.open(`mailto:info@gcmasesores.io?subject=${subject}&body=${body}`, "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+13526080344", "_blank")
  }

  return (
    <section id="consulta" className="py-10 md:py-16 lg:py-20 gradient-bg relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="md:text-4xl font-bold text-white mb-6">Agenda tu consulta inicial gratuita</h2>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto">
            Asesoría personal con nuestro equipo.
          </p>

          {!hasWatched90Percent && (
            <div className="mb-8 flex items-center justify-center gap-3 bg-amber-50 border-2 border-amber-200 text-amber-800 px-6 py-4 rounded-xl">
              <AlertCircle className="w-5 h-5" />
              Debes ver el 90% del vídeo para agendar.
            </div>
          )}

          {(hasWatched90Percent && calendlyReady) ? (
            <iframe
              src={finalCalendlyUrl}
              width="100%"
              height="800"
              style={{
                border: "none",
                borderRadius: "16px",
                boxShadow: "0px 12px 40px rgba(0,0,0,0.15)"
              }}
            />
          ) : hasWatched90Percent ? (
            <div className="flex items-center justify-center h-96 bg-gray-50 rounded-2xl">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : null}

          {/* botones de contacto debajo */}
        </div>
      </div>
    </section>
  )
}
