import { Users, PiggyBank, Award, Calendar } from "lucide-react"
import Link from "next/link"

export default function StatsCTASection() {
  const stats = [
    {
      icon: Users,
      number: "+1000",
      label: "Clientes activos entre todos nuestros servicios",
    },
    {
      icon: PiggyBank,
      number: "+20M €",
      label: "Ahorrados en impuestos para nuestros clientes",
    },
    {
      icon: Award,
      number: "+15",
      label: "Expertos en fiscalidad en el equipo",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-[#225DF6]">GCM</span> en números
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#225DF6]/10 rounded-xl mb-6">
                  <IconComponent className="h-8 w-8 text-[#225DF6]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{stat.number}</div>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#225DF6] to-[#1e52d9] p-12 text-center shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Reserva una cita GRATIS ahora</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Agenda una consultoría fiscal 1a1 de manera gratuita (valorada en 300€)
            </p>
            <Link
              href="#consulta"
              className="inline-flex items-center gap-2 bg-white text-[#225DF6] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Agendar ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
