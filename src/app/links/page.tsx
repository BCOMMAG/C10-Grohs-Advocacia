import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO, LAWYER_PROFILE } from "@/lib/data";
import { MessageSquare, Globe, MapPin, ShieldCheck, ArrowUpRight, Scale, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Canais Oficiais & Links | Grohs Sociedade de Advogados",
  description:
    "Acesse rapidamente o WhatsApp oficial do Dr. João Rodrigo Grohs, Instagram, localização no Bom Retiro em Curitiba/PR e website institucional.",
  alternates: {
    canonical: "https://grohs.adv.br/links",
  },
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento WhatsApp Direto",
      subtitle: `${OFFICE_INFO.whatsappFormatted} • Fale diretamente com o Dr. João Rodrigo`,
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "phone",
      title: "Telefone do Escritório",
      subtitle: `${OFFICE_INFO.phone} • Atendimento presencial e agendamentos`,
      href: `tel:4130408725`,
      icon: Phone,
      highlight: false,
    },
    {
      id: "website",
      title: "Website Oficial Institucional",
      subtitle: "Conheça nossas áreas de atuação trabalhista e previdenciária",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Siga-nos no Instagram",
      subtitle: "@grohsadvocacia • Grohs Advocacia Trabalhista",
      href: OFFICE_INFO.social.instagram,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "maps",
      title: "Como Chegar / Rota no GPS (Google Maps)",
      subtitle: OFFICE_INFO.address,
      href: OFFICE_INFO.mapsDirectionsUrl,
      icon: MapPin,
      highlight: false,
    },
    {
      id: "linkedin",
      title: "Conectar no LinkedIn",
      subtitle: "Perfil profissional do Dr. João Rodrigo Pimentel Grohs",
      href: OFFICE_INFO.social.linkedin,
      icon: LinkedinIcon,
      highlight: false,
    },
  ];

  const specialties = [
    "Rescisão Contratual & Verbas",
    "Horas Extras & Banco de Horas",
    "Reconhecimento CLT & Falsa PJ",
    "Assédio & Rescisão Indireta",
    "Acidentes de Trabalho & Doenças",
    "Direito Previdenciário & INSS",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#1A1D20]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo e Identidade Visual */}
        <div className="relative bg-[#121518] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-white/10">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#A0A5A9" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#A0A5A9" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-heading tracking-wider text-[#D1D5D8] uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A0A5A9]" />
              <span>{OFFICE_INFO.oab}</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#A0A5A9]">
              Curitiba - PR • Bom Retiro
            </span>
          </div>

          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <div className="relative w-full max-w-[560px] xl:max-w-[650px] h-60 xl:h-72 mb-4">
              <Image
                src="/Logosemfundo_escritaescura_usarnomodoescuro.png"
                alt="Grohs Sociedade de Advogados"
                fill
                priority
                className="object-contain object-center drop-shadow-md"
                sizes="(min-width: 1280px) 650px, 560px"
              />
            </div>

            <div className="h-0.5 w-16 bg-[#4A3221] mb-4" />

            <h1 className="font-heading text-xl xl:text-2xl font-semibold max-w-sm leading-snug text-white uppercase">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-gray-300 max-w-xs mt-3 leading-relaxed">
              13 anos de sólida atuação em Direito do Trabalho e Direito Previdenciário. Dr. João Rodrigo Pimentel Grohs.
            </p>
          </div>

          <div className="relative z-10 text-[0.6875rem] font-body text-gray-400 flex items-center justify-between border-t border-white/10 pt-3">
            <span>Sede: Bom Retiro, Curitiba/PR</span>
            <span>© {new Date().getFullYear()} Grohs Sociedade de Advogados</span>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Ações e Especialidades */}
        <div className="bg-[#FAFAFA] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-3 xl:space-y-3.5 py-4">
            
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full max-w-[460px] xl:max-w-[520px] h-36 xl:h-44 mb-2">
                <Image
                  src="/Logosemfundo_escritaescura_usarnomodoclaro.png"
                  alt="Grohs Sociedade de Advogados"
                  fill
                  priority
                  className="object-contain object-center drop-shadow-xs"
                  sizes="(min-width: 1280px) 520px, 460px"
                />
              </div>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#4A3221] block mb-0.5 font-bold">
                Acesso Rápido
              </span>
              <h2 className="font-heading text-2xl xl:text-3xl font-bold text-[#121518] uppercase">
                Canais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-500 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com nosso escritório.
              </p>
            </div>

            <div className="space-y-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-3 xl:p-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#4A3221] text-white border-[#4A3221] hover:bg-[#372417] shadow-sm hover:shadow-md"
                    : "bg-[#FFFFFF] text-[#121518] border-gray-200 hover:border-[#4A3221] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/15 text-white" : "bg-[#F0F2F4] text-[#4A3221]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-sm font-bold block leading-snug uppercase">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block ${
                            item.highlight ? "text-white/85" : "text-gray-500"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white/85" : "text-[#4A3221]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl border border-gray-200 bg-white shadow-2xs">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#4A3221] font-bold mb-1.5">
                <Scale className="w-3.5 h-3.5" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-gray-50 text-gray-700 border border-gray-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-gray-200">
            {OFFICE_INFO.address}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between min-h-[100dvh] w-full px-5 py-6 overflow-y-auto bg-[#FAFAFA]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#4A3221]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#4E5357]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Cabeçalho Mobile */}
        <div className="relative z-10 flex flex-col items-center text-center pt-5 pb-2">
          <div className="relative w-[92vw] max-w-[380px] h-32 sm:h-36 mb-3">
            <Image
              src="/Logosemfundo_escritaescura_usarnomodoclaro.png"
              alt="Grohs Sociedade de Advogados"
              fill
              priority
              className="object-contain object-center drop-shadow-xs"
              sizes="(max-width: 768px) 380px, 320px"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-300 bg-white/90 backdrop-blur-xs text-[0.6875rem] font-heading text-[#4A3221] font-bold shadow-2xs uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A3221]" />
            <span>{LAWYER_PROFILE.name} • {OFFICE_INFO.oab}</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-sm mx-auto space-y-2.5 my-auto py-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isInternal = item.href.startsWith("/");
            const buttonClasses = `w-full py-2.5 px-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border backdrop-blur-xs ${
              item.highlight
                ? "bg-[#4A3221] text-white border-[#4A3221] shadow-sm hover:bg-[#372417]"
                : "bg-white/95 text-[#121518] border-gray-200 shadow-2xs hover:border-[#4A3221]"
            }`;

            const content = (
              <>
                <div className="flex items-center gap-3 text-left">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/20 text-white" : "bg-[#F0F2F4] text-[#4A3221]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-heading text-xs font-bold block leading-tight uppercase">
                      {item.title}
                    </span>
                    <span
                      className={`font-body text-[0.5625rem] block leading-tight ${
                        item.highlight ? "text-white/85" : "text-gray-500"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    item.highlight ? "text-white/85" : "text-[#4A3221]"
                  }`}
                />
              </>
            );

            return isInternal ? (
              <Link key={item.id} href={item.href} className={buttonClasses}>
                {content}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {content}
              </a>
            );
          })}
        </div>

        <div className="relative z-10 text-center space-y-1.5 pt-3 border-t border-gray-200">
          <div className="w-full max-w-xs mx-auto py-1 px-2 rounded-lg bg-white backdrop-blur-xs border border-gray-200">
            <span className="font-body text-[0.625rem] text-gray-700 block truncate">
              Rescisão • Horas Extras • CLT vs PJ • Acidentes • INSS
            </span>
          </div>
          <p className="font-body text-[0.625rem] text-gray-500">
            © {new Date().getFullYear()} Grohs Sociedade de Advogados • Curitiba/PR
          </p>
        </div>
      </div>
    </main>
  );
}