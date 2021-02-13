import React from "react";
import GoogleMapReact from "google-map-react";

// const WrappedMap = withScriptjs(withGoogleMap(Maps));

export default function Maps() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact defaultZoom={10} defaultCenter={{ lat: 12, lng: 12 }} />
    </div>
  );
  //   return (
  //     <div>
  //       <WrappedMap googleMapURL={""} />
  //     </div>
  //   );
}
