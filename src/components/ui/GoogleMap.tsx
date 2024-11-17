import React from "react";
import { AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps";

interface GoogleMapProps {
    lat: number;
    lng: number;
}

const GoogleMap = ({ lat, lng }: GoogleMapProps) => {
    if (!lat) lat = 37.542505;
    if (!lng) lng = 127.075963;

    const locations = [
        {
            key: "우에노 공원",
            location: { lat: lat, lng: lng + 0.0027 },
        },
    ];
    return (
        <div id="map" style={{ width: "100%", height: "100vh" }}>
            <Map
                defaultZoom={16}
                defaultCenter={{
                    lat: locations[0].location.lat,
                    lng: locations[0].location.lng,
                }}
                mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
            >
                {locations.map(loc => (
                    <AdvancedMarker key={loc.key} position={loc.location}>
                        <Pin
                            background={"#e34343"}
                            glyphColor={"#fff"}
                            borderColor={"#e34343"}
                        />
                    </AdvancedMarker>
                ))}
            </Map>
        </div>
    );
};

export default GoogleMap;
