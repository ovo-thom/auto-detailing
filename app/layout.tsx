import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: {
    default: "Flow Detailing — Nettoyage intérieur automobile à Liège",
    template: "%s | Flow Detailing",
  },
  description:
    "Nettoyage et detailing intérieur automobile à Liège et en Province de Liège. Devis sur photo.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
