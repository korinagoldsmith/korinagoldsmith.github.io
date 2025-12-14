import { useParams, useNavigate } from 'react-router-dom';
import backArrowIcon from './assets/back_arrow.png'

function LocationPage({ locations }) {
    const { name } = useParams();
    const navigate = useNavigate();
    const location = locations.find(loc => loc.name === name);

    if (!location) {
        return <div>Location not found</div>;
    }

  return (
    <div className="container">
        <button onClick={() => navigate(-1)} className="back-button">
        <img src={backArrowIcon} alt="Go Back" />
        </button>
      <h1 className='h1-handwriting'>{location.name}, {location.country}</h1>

        <div className="photos-grid">
            {location.photos.map(photo => (
                <img key={photo} src={photo.src} alt={`${location.name} photo`} />
            ))}
        </div>
    </div>
  );
}

export default LocationPage;