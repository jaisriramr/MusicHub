import "./track-detail.css";

const TrackDetail = ({ track }: { track: any }) => {
  return (
    <div className="track-detail-container">
      <img
        src={track?.track_image_url}
        alt={track?.name}
        className="track-detail-image"
      />
      <div className="track-detail-text-container">
        <h6 className="track-detail-name">{track?.name}</h6>
        <p className="track-detail-artist">{track}</p>
      </div>
    </div>
  );
};

export default TrackDetail;
