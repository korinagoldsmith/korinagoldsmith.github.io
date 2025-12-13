import { useState } from 'react'
import shanghai1 from './assets/shanghai_city.jpg'
import shanghai2 from './assets/shanghai_night.jpg'
import beijing1 from './assets/great_wall.jpg'
import beijing2 from './assets/forbidden_city.jpg'
import la1 from './assets/ventura_surfers.jpg'
import la2 from './assets/camarillo_beach.jpg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import LocationPage from './LocationPage.jsx'
import MapPage from './MapPage.jsx'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      name: 'Shanghai', 
      country: 'China',
      coordinates: [31.2304, 121.4737], 
      heroImage: shanghai1,
      photos: [shanghai1, shanghai2]
    },
    {
      name: 'Beijing', 
      country: 'China',
      coordinates: [39.9042, 116.4074],
      heroImage: beijing1,
      photos: [beijing1, beijing2]
     },
     {
      name: 'Los Angeles', 
      country: 'California, USA',
      coordinates: [34.0522, -118.2437],
      heroImage: la2,
      photos: [la1, la2]
     }
  ]

  return (
    <Routes>
      <Route path="/" element={
      <div className="container">
        <div className="header">
          <h1>Korina's Photography Portfolio</h1>
          <Link to="/map" className="map-link"> View Travel Map</Link>
        </div>

        <div className="cards-container">
          {locations.map(location => (
            <Link 
              key={location.name}
              className="location-card"
              to={'location/' + location.name}
            >
              <img src={location.heroImage} alt={location.name} className="card-hero-image"/>
              <div className="card-overlay">
                <h2 className='p-handwriting'>{location.name}, {location.country}</h2>
              </div>
            </Link>
          ))}
        </div>
    </div>
      } />
    <Route path="/location/:name" element={<LocationPage locations={locations} />} />
    <Route path="/map" element={<MapPage locations={locations} />} />
    </Routes>
  )
}

export default App
