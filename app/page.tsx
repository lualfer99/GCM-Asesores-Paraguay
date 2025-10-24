import type { Metadata } from "next"
import OptimizedHeader from "@/components/optimized-header"
import HeroSection from "@/components/hero-section"
import TrustpilotTestimonialsSection from "@/components/trustpilot-testimonials-section"
import ParaguayComprehensiveSection from "@/components/paraguay-comprehensive-section"
import WhyWorkWithUsSection from "@/components/why-work-with-us-section"
import BenefitsSection from "@/components/benefits-section"
import FAQSection from "@/components/faq-section"
import { TeamHeroCarousel } from "@/components/team-hero-carousel"
import OptimizedFooter from "@/components/optimized-footer"
import { Poppins } from "next/font/google"
import ConsultationSection from "@/components/consultation-section"
import StatsCTASection from "@/components/stats-cta-section"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gcmasesores.io"),
  title: {
    default: "Optimiza tu fiscalidad desde Paraguay de forma 100% legal",
    template: "%s | GCMAsesores.io",
  },
  description:
    "Especialistas en negocios digitales e internacionales. Optimiza tu fiscalidad desde Paraguay de manera 100% legal con nuestros expertos.",
  keywords: [
    "residencia fiscal Paraguay",
    "optimización fiscal Paraguay",
    "fiscalidad Paraguay",
    "residencia permanente Paraguay",
    "trámites residencia Paraguay",
    "negocios digitales Paraguay",
    "emprendedores digitales Paraguay",
    "nómadas digitales Paraguay",
    "planificación fiscal internacional",
    "asesoría fiscal Paraguay",
    "gestoría fiscal Paraguay",
    "beneficios fiscales Paraguay",
    "impuestos Paraguay",
    "tax planning Paraguay",
    "residencia fiscal digital",
    "optimización tributaria Paraguay",
    "cómo obtener residencia Paraguay",
    "requisitos residencia Paraguay",
    "ventajas fiscales Paraguay",
    "Paraguay para emprendedores",
    "vivir en Paraguay",
    "mudarse a Paraguay",
    "inversión Paraguay",
    "negocios internacionales",
    "asesoría fiscal internacional",
    "planificación patrimonial",
    "protección de activos",
    "fiscalidad territorial Paraguay",
    "cero impuestos Paraguay",
    "libertad financiera Paraguay",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Optimiza tu fiscalidad desde Paraguay de forma 100% legal",
    description: "Especialistas en negocios digitales e internacionales.",
    url: "https://gcmasesores.io",
    siteName: "GCMAsesores.io",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://gcmasesores.io/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "GCMAsesores.io - Optimiza tu fiscalidad desde Paraguay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gcmasesores",
    creator: "@gcmasesores",
    title: "Optimiza tu fiscalidad desde Paraguay de forma 100% legal",
    description: "Especialistas en negocios digitales e internacionales.",
    images: ["https://gcmasesores.io/twitter-home.jpg"],
  },
}

export default function HomePage() {
  return (
    <div className={`${poppins.variable} min-h-screen flex flex-col bg-white text-gray-900`}>
      <OptimizedHeader mode="landing" />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <TrustpilotTestimonialsSection />
        <WhyWorkWithUsSection />
        <TeamHeroCarousel />
        <ParaguayComprehensiveSection />
        <ConsultationSection />
        <FAQSection />
        <StatsCTASection />
      </main>
      <OptimizedFooter />
    </div>
  )
}
