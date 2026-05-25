import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
