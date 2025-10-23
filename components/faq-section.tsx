"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Plus, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Cómo puedo obtener la residencia fiscal en Paraguay?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">En Paraguay existen dos vías principales:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Por permanencia física:</strong> residiendo más de 120 días al año en el país.
            </li>
            <li>
              <strong>Por residencia activa (RUC):</strong> obteniendo tu residencia temporal o permanente y activando
              un RUC a tu nombre.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Con esta segunda opción, no necesitas pasar largos periodos en Paraguay: basta con un viaje inicial y
            visitas ocasionales para mantener tu estatus. Es la vía más utilizada por emprendedores digitales e
            inversores internacionales.
          </p>
        </>
      ),
    },
    {
      question: "¿Qué significa tener residencia temporal en Paraguay?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            La residencia temporal te permite establecerte legalmente en el país durante dos años sin obligación de
            residencia permanente.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Durante ese tiempo, puedes desarrollar actividades, abrir cuentas y tramitar tu RUC.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pasados los dos años, puedes renovarla o solicitar la residencia permanente, que solo requiere visitas cada
            3 años para mantenerse activa.
          </p>
        </>
      ),
    },
    {
      question: "¿Cuál es el tipo de impuesto sobre la renta en Paraguay?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Paraguay aplica un sistema de <strong>tributación territorial</strong>, lo que significa que solo grava los
            ingresos de fuente paraguaya.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si tus ingresos proceden del extranjero (negocios digitales, inversiones, consultoría internacional), la
            carga fiscal puede ser <strong>0% real</strong> sobre esos ingresos.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            El impuesto a la renta personal para residentes es del <strong>10%</strong>, pero solo sobre rentas
            generadas dentro del país.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El IVA general es también del <strong>10%</strong>, con algunos bienes esenciales al 5%.
          </p>
        </>
      ),
    },
    {
      question: "¿Con cuánta frecuencia tengo que viajar a Paraguay para mantener la residencia?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Solo necesitas viajar <strong>una vez cada 1 a 3 años</strong>, dependiendo de si tienes residencia temporal
            o permanente.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nosotros te avisamos con antelación de cada renovación y te asistimos en todos los trámites, para que no
            pierdas tu estatus fiscal.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tu residencia sigue siendo válida aunque vivas y trabajes desde cualquier otro país.
          </p>
        </>
      ),
    },
    {
      question: "¿Para qué sirve el Certificado de Residencia Fiscal?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            El <strong>Certificado de Residencia Fiscal</strong> es el documento oficial emitido por la Administración
            Tributaria de Paraguay que <strong>acredita que tu residencia fiscal se encuentra en ese país</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De cara a España (u otros países de origen), este certificado es <strong>fundamental</strong>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              Te permite <strong>demostrar ante Hacienda</strong> que tributas fuera de España, y por tanto,{" "}
              <strong>no estás obligado a declarar tus rentas mundiales allí</strong>.
            </li>
            <li>
              Sirve como <strong>prueba legal</strong> frente a bancos, plataformas y organismos internacionales que
              soliciten acreditar tu residencia fiscal efectiva.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sin este documento, España podría seguir considerándote residente fiscal español y exigirte tributar por
            todos tus ingresos globales.
          </p>
        </>
      ),
    },
    {
      question: "¿Qué es el RUC?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            El <strong>RUC (Registro Único de Contribuyentes)</strong> es el <strong>número fiscal paraguayo</strong>,
            equivalente al NIF español.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Es indispensable para operar legalmente en Paraguay, abrir cuentas bancarias, emitir facturas o declarar
            impuestos (aunque tus ingresos del extranjero tributen al 0 %).
          </p>
          <p className="text-gray-700 leading-relaxed">
            En otras palabras, el RUC <strong>es la base para tener una residencia fiscal activa y reconocida</strong>,
            y forma parte de la estructura que GCM te ayuda a mantener al día.
          </p>
        </>
      ),
    },
    {
      question: "¿Me sirve Paraguay si tengo una LLC?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sí, y de hecho <strong>es una combinación muy favorable</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si ya operas con una <strong>LLC en Estados Unidos</strong>, obtener la residencia fiscal en Paraguay te
            permite:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              Consolidar una estructura <strong>totalmente fuera de España</strong>, reduciendo al mínimo tus nexos
              fiscales.
            </li>
            <li>
              Aprovechar el <strong>sistema territorial paraguayo</strong>, donde los ingresos desde la LLC{" "}
              <strong>no tributan en Paraguay</strong>.
            </li>
            <li>
              Contar con una <strong>residencia fiscal reconocida internacionalmente</strong>, que refuerza la
              legitimidad de tu estructura ante bancos, plataformas y organismos internacionales.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            En conjunto, Paraguay y una LLC forman una de las estrategias más seguras y eficientes para negocios
            digitales internacionales.
          </p>
        </>
      ),
    },
    {
      question: "¿Por qué el Convenio de Doble Imposición con España puede ser peligroso?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            El <strong>Convenio de Doble Imposición (CDI)</strong> entre España y Paraguay se creó para evitar que{" "}
            <strong>una misma renta tribute dos veces</strong>, pero <strong>puede volverse en tu contra</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Paraguay aplica un sistema de <strong>tributación territorial</strong>, lo que significa que{" "}
            <strong>solo grava los ingresos generados dentro del país</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sin embargo, España <strong>tributa por renta mundial</strong>, y si Hacienda considera que{" "}
            <strong>sigues manteniendo vínculos personales o económicos con España</strong>, puede intentar reclamar la
            tributación de tus ingresos extranjeros <strong>pese a tu residencia en Paraguay</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            👉 La clave está en <strong>estructurar correctamente tu cambio de residencia</strong>, asegurando que tu{" "}
            <strong>operativa, residencia y vínculos fiscales estén alineados</strong> con el sistema territorial
            paraguayo y no con el español.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En GCM diseñamos un <strong>protocolo de actuación personalizado</strong> precisamente para evitar que
            España pueda reclamar tus ingresos internacionales.
          </p>
        </>
      ),
    },
  ]

  const handleCTAClick = () => {
    const element = document.querySelector("#consulta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="faq" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#225DF6]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#225DF6]/10 text-[#225DF6] px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Preguntas <span className="text-[#225DF6]">frecuentes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Información básica para que puedas comprender mejor la residencia fiscal en Paraguay
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-modern border-2 border-gray-100 hover:border-[#225DF6]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-8 py-6 text-left font-bold text-gray-900 hover:no-underline hover:text-[#225DF6] transition-colors text-base md:text-lg group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#225DF6]/10 rounded-full flex items-center justify-center group-hover:bg-[#225DF6] transition-colors">
                      <Plus className="w-4 h-4 text-[#225DF6] group-hover:text-white transition-colors" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#225DF6]/10 to-[#1e52d9]/10 rounded-3xl p-8 border border-[#225DF6]/20 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">¿Tienes más preguntas?</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Nuestros expertos están listos para resolver todas tus dudas
            </p>
            <Button
              size="md"
              className="inline-flex items-center gap-2 bg-[#225DF6]/10 text-[#225DF6] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#225DF6]/20 transition-colors"
              onClick={handleCTAClick}
            >
              <Calendar className="w-5 md:w-6 h-5 md:h-6 mr-2" />
              Consulta Gratuita Disponible
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
