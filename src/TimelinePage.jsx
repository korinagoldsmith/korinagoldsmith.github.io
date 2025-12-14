function TimelinePage({ locations}) {
    const allPhotos = locations.flatMap(location =>
        location.photos.map(photo => ({
            ...photo,
            locationName: location.name,
            locationCountry: location.country
        }))
    );

    const sortedPhotos = allPhotos.sort((a, b) => new Date(a.date) - new Date(b.date));

    const photosByDate = sortedPhotos.reduce((groups, photo) => {
        const date = photo.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(photo);
        return groups;
    }, {});

    return (
        <div className="container">
            <h1 className="h1-handwriting">Timeline</h1>
            <div className="timeline">
                {Object.entries(photosByDate).map(([date, photos]) => (
                    <div key={date} className="timeline-entry">
                        <h2 className="timeline-date">{new Date(date).toLocaleDateString(
                            'en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h2>
                            <p className="timeline-location">{photos[0].locationName}, {photos[0].locationCountry}</p>
                        <div className="timeline-photos">
                            {photos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo.src}
                                    alt={`${photo.locationName} photo`}
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