import React from "react";
import { AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps";

const locations = [
    { key: "우에노 공원", location: { lat: 35.71476, lng: 139.7708563 } },
];

function GoogleMap() {
    return (
        <div id="map" style={{ width: "100%", height: "100vh" }}>
            <Map
                defaultZoom={16}
                defaultCenter={{ lat: 35.71476, lng: 139.7708563 }}
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
}

export default GoogleMap;
