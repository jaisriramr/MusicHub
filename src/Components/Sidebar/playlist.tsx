import { Fragment } from "react";
import "./sidebar";
import { Link, useLocation } from "react-router-dom";

const PlayListBox = ({ playlistData }: { playlistData: any }) => {
  const location = useLocation();

  return (
    <Fragment>
      <Link to={"/playlist/" + playlistData?._id}>
        <div
          className={
            location.pathname.includes("playlist") &&
            location.pathname.split("/")[2] === playlistData?._id
              ? "playlist-box playlist-box-selected"
              : "playlist-box"
          }
        >
          <div className="playlist-box-image-container">
            <img src={playlistData?.playlist_image_url} alt="playlist-image" />
          </div>
          <div className="playlist-box-details">
            <h6 className="playlist-box-details-title">{playlistData?.name}</h6>
            <p className="playlist-box-details-type">{playlistData?.type}</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default PlayListBox;
