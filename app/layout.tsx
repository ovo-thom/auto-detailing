import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocalBusinessJsonLd from "@/components/layout/LocalBusinessJsonLd";
import { siteInfo } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: "Flow Detailing — Nettoyage intérieur automobile à Liège",
  description:
  "Flow Detailing propose le nettoyage intérieur et le detailing automobile à Saint-Nicolas, près de Liège. Un travail soigné, adapté à l’état de chaque véhicule.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
