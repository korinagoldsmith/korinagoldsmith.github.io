import { Link } from 'react-router-dom';
import houseIcon from './assets/house_icon.png'
import mapIcon from './assets/map_icon.png'
import clockIcon from './assets/clock_icon.png'

function TimelinePage({ locations }) {
    const allPhotos = locations.flatMap(location =>
        location.photos.map(photo => ({
            ...photo,
            locationName: location.name,
            locationCountry: location.country
        }))
    );

    const sortedPhotos = allPhotos.sort((a, b) => new Date(a.date) - new Date(b.date));

    const photosByMonth = sortedPhotos.reduce((groups, photo) => {
        const date = new Date(photo.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        
        if (!groups[monthKey]) {
            groups[monthKey] = [];
        }
        groups[monthKey].push(photo);
        return groups;
    }, {});

    return (
        <div className="container">
            <div className="header">
            <nav className="nav-bar">
                <h1 className="nav-title">Timeline</h1>
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

            <div className="timeline">
                {Object.entries(photosByMonth).map(([date, photos]) => (
                    <div key={date} className="timeline-entry">
                        <h2 className="timeline-date">{new Date(date).toLocaleDateString(
                            'en-US', { month: 'long', year: 'numeric' })}</h2>
                        <div className="timeline-photos">
                            {photos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo.src}
                                    className="timeline-photo"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimelinePage;