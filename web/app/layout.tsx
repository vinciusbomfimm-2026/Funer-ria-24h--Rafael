import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomActionBar from "@/components/BottomActionBar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bela Vista - Serviço Funerário 24h | São Paulo - SP",
  description:
    "Assistência funerária 24 horas em São Paulo, com atendimento imediato, humanizado e sem burocracia. Fale agora por telefone ou WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <BottomActionBar />
      </body>
    </html>
  );
}
