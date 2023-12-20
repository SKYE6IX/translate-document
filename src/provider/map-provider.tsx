"use client";
import React from "react";
import Script from "next/script";

export default function YMapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isApiKey = `${process.env.MAP_API_KEY}` !== "undefined";
  return (
    <>
      {isApiKey && (
        <Script
          src={`https://api-maps.yandex.ru/2.1.79/?apikey=${process.env.MAP_API_KEY}&lang=ru_RU`}
          //   @ts-ignore
          onLoad={() => ymaps3.ready}
        />
      )}
      {children}
    </>
  );
}
