import { Fragment, useEffect, useState } from "react";
import "./sidebar.css";
import { Link, useParams } from "react-router-dom";
import Home from "../../assets/icons/home.svg";
import Search from "../../assets/icons/search.svg";
import Layer from "../../assets/icons/layer.svg";
import Plus from "../../assets/icons/plus.svg";
import { container } from "tsyringe";
import { UserService } from "../../Services/user.service";
import { jwtDecode } from "jwt-decode";
import { PlaylistService } from "../../Services/playlist.service";
import PlayListBox from "./playlist";

const Sidebar = () => {
  const userService = container.resolve(UserService);
  const playlistService = container.resolve(PlaylistService);
  const [playlist, setPlaylist] = useState<any>([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decoded: any = jwtDecode(localStorage.getItem("token") || "");
      console.log("WWWW ", decoded);
      playlistService
        .userGetAllPlaylist(decoded?._id)
        .then((response: any) => {
          console.log("REEESS ", response);
          setPlaylist(response);
        })
        .catch((err: any) => {
          console.log("ERR ", err);
        });
    }
  }, []);

  return (
    <div className="sidebar-container">
      <ul className="sidebar-header">
        <li className="sidebar-header-link">
          <Link to="/">
            <img src={Home} alt="home" />
            Home
          </Link>
        </li>
        <li className="sidebar-header-link">
          <Link to="/search">
            <img src={Search} alt="home" />
            Search
          </Link>
        </li>
      </ul>

      <div className="sidebar-library">
        <div className="sidebar-library-header">
          <div className="sidebar-library-left">
            <img src={Layer} alt="layer" />
            <h6>Your Library</h6>
          </div>
          <img src={Plus} alt="plus" className="cursor-pointer" />
        </div>

        <div className="sidebar-playlist-container">
          {playlist.map((data: any, i: any) => (
            <PlayListBox playlistData={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
