import { Globe, Shield, Zap, Lock, TrendingUp, MapPin, Calendar } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: MapPin,
      title: "Tributación territorial",
      description: "Todos los ingresos que provengan y se generen fuera de Paraguay tributarán a 0%",
      highlight: "0% Impuestos",
    },
    {
      icon: Lock,
      title: "Privacidad bancaria",
      description:
        "Paraguay, al igual que EEUU, no tiene CRS, por lo que tus cuentas bancarias serán totalmente anónimas.",
      highlight: "Sin CRS",
    },
    {
      icon: Calendar,
      title: "1 Día al año",
      description:
        "Con tan solo pisar Paraguay 1 día al año, podrás mantener tu residencia fiscal, el tiempo restante lo puedes dedicar a viajar o vivir en el países que más te guste menos de 6 meses al año.",
      highlight: "1 Día",
    },
    {
      icon: TrendingUp,
      title: "Proceso cómodo y ágil",
      description:
        "Con solo 2 viajes podrás completar todo el proceso de residencia. Te recibiremos con transfer privado desde el aeropuerto, te acompañaremos personalmente en todos los trámites y te guiaremos en cada paso hasta obtener tu residencia",
      highlight: "2 Viajes",
    },
    {
      icon: Shield,
      title: "País seguro",
      description:
        "A diferencia de gran parte de Latinoamérica, Paraguay es uno de los países más seguros de la región. Su capital, Asunción, ofrece tranquilidad, estabilidad y calidad de vida. Podrás moverte con confianza durante todo el proceso.",
      highlight: "Seguridad",
    },
    {
      icon: Globe,
      title: "Seguridad fiscal",
      description:
        "Paraguay mantiene un Convenio de Doble Imposición con España, lo que significa que tu certificado de residencia fiscal es plenamente válido ante la AEAT y otras administraciones. Tu estructura quedará respaldada por un marco legal sólido y reconocido internacionalmente, aportando legitimidad y tranquilidad a toda tu estrategia fiscal.",
      highlight: "Legal",
    },
  ]

  return (
    <section id="beneficios" className="bg-gray-50 relative overflow-hidden py-0">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#225DF6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#225DF6]/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative py-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#225DF6]/10 text-[#225DF6] px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Nuestras ventajas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué <span className="text-[#225DF6]">Paraguay</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Siendo uno de los países con mejores condiciones fiscales de todo el mundo, si eres nómada digital podrás
            disfrutar de todas estas ventajas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="card-modern p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#225DF6] to-[#1e52d9] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-primary">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-[#225DF6] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
