"use client";
import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
export default function YMapsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <YMaps query={{ lang: "en_RU", apikey: process.env.MAP_API_KEY }}>
      {children}
    </YMaps>
  );
}
