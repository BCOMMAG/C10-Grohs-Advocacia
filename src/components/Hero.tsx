"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO, LAWYER_PROFILE } from "@/lib/data";
import { MessageSquare, ChevronRight, ShieldCheck, Award, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax dinâmico no fundo que acompanha a rolagem
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 25,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Elevação e fade suave do texto ao sair da primeira dobra
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -50,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom 30%",
            scrub: 1,
          },
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-12 overflow-hidden editorial-border-b text-white"
    >
      {/* Imagem de Fundo com Parallax e Overlays de Alta Legibilidade */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 will-change-transform">
        {/* Mobile: header_mobile.jpeg */}
        <div className="relative w-full h-full block md:hidden">
          <Image
            src="/header_mobile.jpeg"
            alt="Grohs Sociedade de Advogados - Advocacia Trabalhista"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Desktop: header_desktop.jpeg com alta fidelidade */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/header_desktop.jpeg"
            alt="Grohs Sociedade de Advogados - Advocacia Trabalhista Curitiba"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays refinados com tom Grafite/Aço */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/60 md:from-black/85 md:via-black/45 md:via-55% md:to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121518]/95 via-transparent to-black/70 md:from-[#121518]/60 md:via-transparent md:to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4A3221]/20 rounded-full blur-3xl md:hidden" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* Topo do Hero: Badge + Título Principal */}
        <div className="pt-2 sm:pt-4 lg:pt-4 max-w-3xl animate-fade-in-down">
          {/* Badge de Autoridade */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wider uppercase text-[#D1D5D8] mb-5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#A0A5A9]" />
            <span>Grohs Sociedade de Advogados • {OFFICE_INFO.experienceYears} de Experiência</span>
          </div>

          {/* Headline Principal (Direta, em no máximo 2 linhas) */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-tight text-white font-semibold drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] uppercase">
            Defesa trabalhista com{" "}
            <span className="text-[#A0A5A9]">
              rigor técnico
            </span>{" "}
            e excelência processual.
          </h1>
        </div>

        {/* Base do Hero: Subtítulo + Botões de Conversão + Destaques de Rodapé */}
        <div className="pb-2 sm:pb-4 lg:pb-4 max-w-3xl mt-6 sm:mt-8 lg:mt-auto animate-fade-in-up">
          <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-6 font-normal drop-shadow-sm">
            Fruto do trabalho do advogado João Rodrigo Pimentel Grohs, com 13 anos de experiência na advocacia privada, com formação pelo Centro Universitário Curitiba - UniCuritiba e especialização pela Escola da Magistratura da 9ª Região - EMATRA-IX. Atendimento direto, estratégico e transparente.
          </p>

          {/* CTAs com Hover e Microinterações */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#4A3221] hover:bg-[#372417] hover:scale-[1.02] text-white border border-[#A0A5A9]/30 gap-2.5 py-3 sm:py-3.5 px-6 sm:px-7 text-xs sm:text-sm font-semibold tracking-wide shadow-xl group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Falar com o Dr. João Rodrigo</span>
            </a>

            <Link
              href="#sobre"
              className="btn-pill bg-white/95 text-black border-2 border-[#4E5357] hover:bg-white hover:border-[#372417] hover:scale-[1.02] shadow-md gap-2 py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-semibold tracking-wide group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <span className="text-black font-semibold">Conhecer o Advogado</span>
              <ChevronRight className="w-4 h-4 text-[#4A3221] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Barra de Atributos de Prestígio */}
          <div className="hidden lg:flex items-center justify-between py-3 border-t border-white/20 mt-8 text-white/90 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="bullet-indicator text-[#A0A5A9]" />
              <span className="font-heading uppercase text-xs tracking-widest text-white/90 font-bold">
                Curitiba / PR • Bom Retiro
              </span>
            </div>
            <div className="flex items-center gap-5 text-xs font-heading text-white/80">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#A0A5A9]" />
                UniCuritiba & EMATRA-IX
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A0A5A9]" />
                Atendimento Presencial e Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}