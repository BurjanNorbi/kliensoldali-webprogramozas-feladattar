import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";
import { Layout } from "./layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
