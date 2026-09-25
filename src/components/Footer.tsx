"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, MessageSquare, ArrowUp } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#101316] text-white border-t border-[var(--border-subtle)]/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-12 w-64">
              <Image
                src="/Logosemfundo_escritaescura_usarnomodoescuro.png"
                alt="Grohs Sociedade de Advogados"
                fill
                className="object-contain object-left"
                sizes="260px"
              />
            </div>
            
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Advocacia trabalhista exercida por profissionais com especialização para um trabalho de excelência. Atendimento ético e técnico em Curitiba/PR e em âmbito nacional.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-heading text-[#D1D5D8] uppercase tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A0A5A9]" />
              <span>{OFFICE_INFO.lawyerName} • {OFFICE_INFO.oab}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#A0A5A9] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-gray-300 uppercase">
              <li>
                <Link href="#inicio" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors">O Escritório</Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-white transition-colors">Avaliações (Google)</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-white transition-colors">Como Trabalhamos</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">Contato & Localização</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#A0A5A9] hover:underline">Link-in-Bio (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#A0A5A9] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-gray-300">
              <p><strong className="text-white font-heading uppercase">Endereço:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading uppercase">WhatsApp:</strong> {OFFICE_INFO.whatsappFormatted}</p>
              <p><strong className="text-white font-heading uppercase">Telefone:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading uppercase">E-mail:</strong> {OFFICE_INFO.email}</p>
              <p><strong className="text-white font-heading uppercase">Horários:</strong> {OFFICE_INFO.workingHours.weekdays}</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Grohs Advocacia"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4A3221] flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Grohs Sociedade de Advogados"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4A3221] flex items-center justify-center text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Grohs Sociedade de Advogados"
                className="w-9 h-9 rounded-xl bg-[#4A3221] hover:bg-[#372417] flex items-center justify-center text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Ético OAB + Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[0.6875rem] text-gray-400 font-body">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} Grohs Sociedade de Advogados. Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              Este website possui caráter exclusivamente informativo e educativo, em estrita observância à Lei nº 8.906/1994, à Resolução CFOAB nº 02/2015 (Código de Ética e Disciplina) e ao Provimento nº 205/2021 do CFOAB.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-[#A0A5A9] text-gray-300 hover:text-white transition-colors flex-shrink-0 cursor-pointer text-xs font-heading uppercase"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}