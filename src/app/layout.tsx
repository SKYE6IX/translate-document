import React from "react";
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
  title: "Переводчикк",
  description:
    "Переводчикк имеет офис в центре Екатеринбурга и осуществляет языковые переводы целого ряда документов, среди которых: гражданские паспорта, свидетельства о рождении, о браке, о перемене имени, учредительные, корпоративные, медицинские, технические и других документы",
  verification: {
    yandex: "822dae5a1ea2f324",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <YMapProvider>
        <body className={inter.className}>{children}</body>
      </YMapProvider>
    </html>
  );
}
