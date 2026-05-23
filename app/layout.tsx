import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "E-AGRO PRO | Global B2B Infrastructure for Agricultural Trade",
  description:
    "E-AGRO PRO is building secure digital infrastructure for cross-border agricultural trade between Turkey, Central Asia, CIS, MENA and China.",
  keywords: [
    "E-AGRO PRO",
    "agricultural trade infrastructure",
    "B2B agriculture",
    "Turkey export hub",
    "Central Asia agro trade",
    "KYB verified suppliers"
  ],
  openGraph: {
    title: "E-AGRO PRO",
    description: "Global B2B infrastructure for agricultural trade.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
