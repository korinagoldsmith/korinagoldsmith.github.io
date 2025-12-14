import { Link } from 'react-router-dom';
import houseIcon from './assets/house_icon.png'
import mapIcon from './assets/map_icon.png'
import clockIcon from './assets/clock_icon.png'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import L from "leaflet";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapPage({ locations }) {
    const navigate = useNavigate();
    const [hoveredLocation, setHoveredLocation] = useState(null);

    return (
        <div className="container">
            <div className="header">
            <nav className="nav-bar">
                <h1 className="nav-title">Travel Map</h1>
                <Link to="/" className="nav-link"> 
                    <img src={houseIcon} alt="Home" />
                </Link>
                <Link to="/map" className="nav-link"> 
                    <img src={mapIcon} alt="Map" />
                </Link>
                <Link to="/timeline" className="nav-link">
                    <img src={clockIcon} alt="Timeline" />
                </Link>
            </nav>
            </div>

        <div style={{ position: 'relative'}}>
            {hoveredLocation && (
                <div className="location-preview">
                    <img src={hoveredLocation.heroImage} alt={hoveredLocation.name} />
                    <div className="preview-text">
                        <h3>{hoveredLocation.name}, {hoveredLocation.country}</h3>
                    </div>
                </div>
            )}

        </div>
        <MapContainer center={[30, 0]} zoom={2} style={{ height: "600px", width: "100%", borderRadius: "8px" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {locations.map(location => (
                <Marker 
                    key={location.name} 
                    position={location.coordinates}
                    eventHandlers={{
                        click: () => {
                            navigate('/location/' + location.name);
                        },
                    }}
                >
                    <Tooltip permanent={false} direction="top" className="leaflet-tooltip">
                        {location.name}, {location.country}
                    </Tooltip>
                </Marker>
            ))}
        </MapContainer>

        </div>
    )
}

export default MapPage;