import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Home from "../../Pages/Home/home";
import Search from "../../Pages/Search/search";
import Track from "../../Pages/Track/track";
import Playlist from "../../Pages/Playlist/playlist";
import Artist from "../../Pages/Artist/artist";
import Album from "../../Pages/Album/album";
import Player from "../Player/player";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <Sidebar />
        <main className="layout-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/track/:id" element={<Track />} />
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/album/:id" element={<Album />} />
          </Routes>
        </main>
      </header>
      <footer className="layout-footer">
        <Player />
      </footer>
    </div>
  );
};

export default Layout;
