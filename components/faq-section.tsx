"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Plus } from "lucide-react"

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
      question: "¿Puedo obtener un certificado oficial de residencia fiscal?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sí. Una vez cumplas cualquiera de los requisitos legales (120 días de permanencia o RUC activo), el gobierno
            paraguayo emite un <strong>Certificado de Residencia Fiscal anual</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Este documento es clave para acreditar ante otros países o bancos tu estatus fiscal paraguayo y evitar la
            doble tributación.
          </p>
        </>
      ),
    },
    {
      question: "¿España (u otro país de origen) podría reclamarme impuestos?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">No necesariamente.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mientras cumplas con las normas de residencia fiscal y cuentes con tu certificado paraguayo vigente, ningún
            país puede gravar tus rentas extranjeras si ya no eres residente fiscal allí.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En casos como España, analizamos tu situación concreta y aplicamos los convenios de doble imposición para
            evitar conflictos o sanciones. Nuestro equipo legal te guía paso a paso para que el cambio sea seguro y
            defendible.
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
      question: "¿Qué ocurre después de obtener la residencia y el RUC?",
      answer: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Una vez que tu residencia y tu RUC están activos, GCM te ofrece un{" "}
            <strong>servicio anual de mantenimiento y cumplimiento</strong>, donde nos encargamos de:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Mantener tu residencia al día ante las autoridades paraguayas.</li>
            <li>Asesorarte en tus declaraciones locales (si aplican).</li>
            <li>
              Revisar cada año tu estructura internacional para asegurar que sigues optimizando tu carga fiscal dentro
              del marco legal.
            </li>
          </ul>
        </>
      ),
    },
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold text-[#225DF6] mb-6">Preguntas frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos todas tus dudas sobre la creación de LLCs y la residencia fiscal en Paraguay
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
                <AccordionTrigger className="px-8 py-6 text-left font-bold text-gray-900 hover:no-underline hover:text-[#225DF6] transition-colors text-lg group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#225DF6]/10 rounded-full flex items-center justify-center group-hover:bg-[#225DF6] transition-colors">
                      <Plus className="w-4 h-4 text-[#225DF6] group-hover:text-white transition-colors" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#225DF6]/10 to-[#1e52d9]/10 rounded-3xl p-8 border border-[#225DF6]/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-600 mb-6">Nuestros expertos están listos para resolver todas tus dudas</p>
            <div className="inline-flex items-center gap-2 bg-[#225DF6]/10 text-[#225DF6] px-4 py-2 rounded-full text-sm font-semibold">
              <HelpCircle className="w-4 h-4" />
              Consulta gratuita disponible
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
