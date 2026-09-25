import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grohs.adv.br"),
  title: {
    default: "Grohs Sociedade de Advogados | Advocacia Trabalhista em Curitiba - PR",
    template: "%s | Grohs Sociedade de Advogados",
  },
  description:
    "Grohs Sociedade de Advogados - Advocacia trabalhista exercida por profissionais com especialização e atuação na advocacia privada desde 2013 para um trabalho de excelência. Dr. João Rodrigo Pimentel Grohs. Curitiba - PR.",
  keywords: [
    "advogado trabalhista curitiba",
    "grohs advocacia",
    "grohs sociedade de advogados",
    "joão rodrigo pimentel grohs",
    "rescisão trabalhista curitiba",
    "horas extras curitiba",
    "pejotização vínculo clt",
    "acidente de trabalho curitiba pr",
    "advocacia trabalhista bom retiro curitiba",
  ],
  authors: [{ name: "João Rodrigo Pimentel Grohs" }],
  creator: "Grohs Sociedade de Advogados",
  publisher: "Grohs Sociedade de Advogados",
  alternates: {
    canonical: "https://grohs.adv.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://grohs.adv.br",
    title: "Grohs Sociedade de Advogados | Advocacia Trabalhista em Curitiba - PR",
    description:
      "Advocacia trabalhista exercida por profissionais com especialização e ampla experiência para um trabalho de excelência. Dr. João Rodrigo Pimentel Grohs.",
    siteName: "Grohs Sociedade de Advogados",
    images: [
      {
        url: "/og-image_1_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Grohs Sociedade de Advogados - Advocacia Trabalhista Curitiba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grohs Sociedade de Advogados | Advocacia Trabalhista em Curitiba - PR",
    description:
      "Advocacia trabalhista exercida por profissionais com especialização e ampla experiência para um trabalho de excelência. Dr. João Rodrigo Pimentel Grohs.",
    images: ["/og-image_1_optimized_300.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon_32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}