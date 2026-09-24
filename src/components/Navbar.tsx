"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { OFFICE_INFO } from "@/lib/data";
import { Menu, X, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Escolhe a logo apropriada de acordo com o fundo/tema
  const currentLogo = !isScrolled
    ? "/Logosemfundo_escritaescura_usarnomodoescuro.png"
    : theme === "dark"
    ? "/Logosemfundo_escritaescura_usarnomodoescuro.png"
    : "/Logosemfundo_escritaescura_usarnomodoclaro.png";

  const drawerLogo =
    theme === "dark"
      ? "/Logosemfundo_escritaescura_usarnomodoescuro.png"
      : "/Logosemfundo_escritaescura_usarnomodoclaro.png";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. LOGO MOBILE FIXA */}
      <div className="lg:hidden fixed top-2.5 left-2.5 sm:left-6 z-50 pointer-events-none">
        <Link href="#inicio" className="flex items-center group focus:outline-none pointer-events-auto">
          <div className="relative h-11 sm:h-13 w-40 sm:w-48 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={currentLogo}
              alt="Grohs Sociedade de Advogados"
              fill
              priority
              className="object-contain object-left drop-shadow-md"
              sizes="180px"
            />
          </div>
        </Link>
      </div>

      {/* 2. BARRA DE NAVEGAÇÃO PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border-subtle)]/25 py-2.5 sm:py-3"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative min-h-[3rem] sm:min-h-[3.5rem] flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Espaçador Mobile */}
            <div className="lg:hidden w-36 sm:w-44 flex-shrink-0 pointer-events-none" />

            {/* Logo Desktop */}
            <div className="hidden lg:flex items-center justify-start relative flex-shrink-0 w-64 xl:w-72 h-12">
              <Link href="#inicio" className="flex items-center group focus:outline-none">
                <div className="relative h-12 w-60 xl:w-68 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={currentLogo}
                    alt="Grohs Sociedade de Advogados"
                    fill
                    priority
                    className="object-contain object-left drop-shadow-md"
                    sizes="260px"
                  />
                </div>
              </Link>
            </div>

            {/* Menu Desktop */}
            <nav
              className={`hidden lg:flex items-center gap-7 xl:gap-9 text-[0.875rem] font-heading uppercase tracking-wider transition-colors duration-300 ${
                !isScrolled ? "text-white/95" : "text-[var(--text-main)]"
              }`}
            >
              <Link href="#inicio" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Início
              </Link>
              <Link href="#sobre" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                O Escritório
              </Link>
              <Link href="#avaliacoes" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Avaliações
              </Link>
              <Link href="#como-atuamos" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Atendimento
              </Link>
              <Link href="#contato" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Contato
              </Link>
            </nav>

            {/* Ações à Direita: Tema + WhatsApp + Menu Mobile */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <ThemeToggle />

              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 text-white transition-all duration-300 gap-1.5 sm:gap-2 shadow-sm text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 flex-shrink-0 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden text-xs">Whats</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border transition-colors flex-shrink-0 cursor-pointer ${
                  !isScrolled
                    ? "border-white/30 bg-black/40 backdrop-blur-md text-white hover:bg-black/60"
                    : "border-[var(--border-subtle)]/40 bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-secondary)]"
                }`}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MENU MOBILE DRAWER */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        <div
          className={`fixed top-0 right-0 bottom-0 w-[84vw] max-w-sm bg-[var(--bg-primary)] border-l border-[var(--border-subtle)]/30 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25">
              <div className="relative h-10 w-40">
                <Image
                  src={drawerLogo}
                  alt="Grohs Sociedade de Advogados"
                  fill
                  className="object-contain object-left"
                  sizes="160px"
                />
              </div>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="p-1.5 rounded-lg border border-[var(--border-subtle)]/30 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-subtle)]/40 bg-[var(--bg-secondary)]/70 text-xs font-heading text-[var(--accent)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{OFFICE_INFO.oab}</span>
            </div>

            {/* Navegação Mobile Enxuta */}
            <nav className="flex flex-col space-y-1 font-heading text-base font-medium text-[var(--text-main)] pt-2">
              <Link href="#inicio" onClick={closeMobileMenu} className="py-2.5 hover:text-[var(--accent)] border-b border-[var(--border-subtle)]/15">
                Início
              </Link>
              <Link href="#sobre" onClick={closeMobileMenu} className="py-2.5 hover:text-[var(--accent)] border-b border-[var(--border-subtle)]/15">
                O Escritório
              </Link>
              <Link href="#avaliacoes" onClick={closeMobileMenu} className="py-2.5 hover:text-[var(--accent)] border-b border-[var(--border-subtle)]/15">
                Avaliações no Google
              </Link>
              <Link href="#como-atuamos" onClick={closeMobileMenu} className="py-2.5 hover:text-[var(--accent)] border-b border-[var(--border-subtle)]/15">
                Como Atuamos
              </Link>
              <Link href="#contato" onClick={closeMobileMenu} className="py-2.5 hover:text-[var(--accent)] border-b border-[var(--border-subtle)]/15">
                Contato & Localização
              </Link>
              <Link href="/links" onClick={closeMobileMenu} className="py-2.5 text-[var(--accent)] font-semibold">
                Link-in-Bio (/links)
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)]/25 space-y-3 mt-6">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3 text-sm gap-2 shadow-md cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Falar no WhatsApp</span>
            </a>
            <p className="text-center text-[0.6875rem] text-[var(--text-muted)]">
              {OFFICE_INFO.addressShort}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}