import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ImagePreloader from "@/src/components/ImagePreloader";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Villa Nabo",
  description: "Disfruta de nuestras mejores carnes en un ambiente acogedor y auténtico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
        <ImagePreloader />
      </body>
    </html>
  );
}
