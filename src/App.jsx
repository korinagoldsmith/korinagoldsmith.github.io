import { useState } from 'react'
import shanghai1 from './assets/shanghai_city.jpg'
import shanghai2 from './assets/shanghai_night.jpg'
import beijing1 from './assets/great_wall.jpg'
import beijing2 from './assets/forbidden_city.jpg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import LocationPage from './LocationPage.jsx'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      name: 'Shanghai', 
      country: 'China',
      photos: [shanghai1, shanghai2]
    },
    {
      name: 'Beijing', 
      country: 'China',
      photos: [beijing1, beijing2]
     },
  ]

  return (
    <Routes>
      <Route path="/" element={
      <div className="container">
        <div className="header">
          <h1>Korina's Photography Portfolio</h1>
          <p>Welcome to my collection of photographs!</p>
        </div>

        <div className="cards-container">
          {locations.map(location => (
            <Link 
              key={location.name}
              className="location-card"
              to={'location/' + location.name}
            >
              <h2>{location.name}</h2>
              <p>{location.country}</p>
            </Link>
          ))}
        </div>
    </div>
      } />
    <Route path="/location/:name" element={<LocationPage locations={locations} />} />
    </Routes>
  )
}

export default App
