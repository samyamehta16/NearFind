import { UserLocationContext } from "@/Context/userlocation";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useContext, useState } from "react";
import { BusinessListContext } from "@/Context/BusinessList";

function Googlemap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const containerStyle = {
    width: "700px",
    height: "700px",
    borderRadius: 20,
  };

  const { userLocation } = useContext(UserLocationContext); // Correct variable name
  const { businessList } = useContext(BusinessListContext); // Correct variable name
  console.log(businessList);
  const [map, setMap] = useState(null);

  // Ensure userLocation has valid lat/lng values before rendering map
  if (!userLocation) {
    return <div>Loading your location...</div>;
  }

  const center = {
    lat: userLocation.lat,
    lng: userLocation.lng,
  };

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={containerStyle}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        {businessList &&
          businessList.map((business, index) => (
            <Marker
              key={index}
              position={business.geometry?.location} // Access location correctly
            />
          ))}
      </GoogleMap>
    </div>
  );
}

export default Googlemap;
