import type { Metadata } from "next";
import { Inter } from "next/font/google";
import YMapProvider from "@/provider/map-provider";
import "../globalStyles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  style: "normal",
});

export const metadata: Metadata = {
  title: "АГЕНТСВО ПЕРЕВОДОВ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
