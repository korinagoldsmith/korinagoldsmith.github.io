import { useParams, Link } from 'react-router-dom';

function LocationPage({ locations }) {
    const { name } = useParams();
    const location = locations.find(loc => loc.name === name);

    if (!location) {
        return <div>Location not found</div>;
    }

  return (
    <div className="container">
        <Link to="/" className="back-button"> Back to Home</Link>
      <h1>{location.name}, {location.country}</h1>

        <div className="photos-grid">
            {location.photos.map(photo => (
                <img key={photo} src={photo} alt={`${location.name} photo`} />
            ))}
        </div>
    </div>
  );
}

export default LocationPage;