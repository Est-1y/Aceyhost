import React from "react";
import Map from "./map/Map";

const location = {
  address: "123 Ngong Road, Nairobi, Kenya.",
  lat: -1.2921,
  lng: 36.8219,
};

function GoogleMap() {
  return (
    <div className="GoogleMap bg-zinc-600 h-[500px] overflow-hidden">
      <Map location={location} zoomLevel={17} />
    </div>
  );
}

export default GoogleMap;
