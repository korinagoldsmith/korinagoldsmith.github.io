import { useState } from 'react'
import houseIcon from './assets/house_icon.png'
import mapIcon from './assets/map_icon.png'
import clockIcon from './assets/clock_icon.png'
import shanghai1 from './assets/shanghai/shanghai_city.jpg'
import shanghai2 from './assets/shanghai/shanghai_night.jpg'
import beijing1 from './assets/beijing/great_wall.jpg'
import beijing2 from './assets/beijing/forbidden_city.jpg'
import la1 from './assets/la/ventura_surfers.jpg'
import la2 from './assets/la/camarillo_beach.jpg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import LocationPage from './LocationPage.jsx'
import MapPage from './MapPage.jsx'
import TimelinePage from './TimelinePage.jsx'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      name: 'Shanghai', 
      country: 'China',
      coordinates: [31.2304, 121.4737], 
      heroImage: shanghai1,
      photos: [
        {src: shanghai1, date: '2025-05-13'},
        {src: shanghai2, date: '2025-05-13'}
      ]
    },
    {
      name: 'Beijing', 
      country: 'China',
      coordinates: [39.9042, 116.4074],
      heroImage: beijing1,
      photos: [
        {src: beijing1, date: '2025-05-07'},
        {src: beijing2, date: '2025-05-10'}
      ]
     },
     {
      name: 'Los Angeles', 
      country: 'California, USA',
      coordinates: [34.0522, -118.2437],
      heroImage: la2,
      photos: [
        {src: la1, date: '2025-10-03'},
        {src: la2, date: '2025-10-04'}
      ]
     }
  ]

  return (
    <Routes>
      <Route path="/" element={
      <div className="container">
        <div className="header">
          <nav className="nav-bar">
            <h1 className="nav-title">Korina's Photography Portfolio</h1>
            <Link to="/" className="nav-link"> 
              <img src={houseIcon}/>
            </Link>
            <Link to="/map" className="nav-link"> 
              <img src={mapIcon}/>
            </Link>
            <Link to="/timeline" className="nav-link">
              <img src={clockIcon}/>
            </Link>
          </nav>
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
    <Route path="/timeline" element={<TimelinePage locations={locations} />} />
    </Routes>
  )
}

export default App
