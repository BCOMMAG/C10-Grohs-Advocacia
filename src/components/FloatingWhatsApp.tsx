"use client";

import { OFFICE_INFO } from "@/lib/data";
import { WhatsAppIcon } from "@/components/SocialIcons";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <a
        href={OFFICE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp com a Grohs Advocacia"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 relative"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-[#0F1215]" />
      </a>
    </div>
  );
}