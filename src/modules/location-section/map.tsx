"use client";
import { GeolocationControl, Map, Placemark } from "@pbe/react-yandex-maps";
export default function MapLocation({ className }: { className: string }) {
  return (
    <Map
      defaultState={{
        center: [56.862612, 60.635024],
        zoom: 15,
        controls: ["zoomControl", "fullscreenControl"],
      }}
      modules={["control.ZoomControl", "control.FullscreenControl"]}
      className={className}
    >
      <GeolocationControl options={{ float: "left" }} />
      <Placemark defaultGeometry={[56.862612, 60.635024]} />
    </Map>
  );
}
