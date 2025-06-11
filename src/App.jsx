import "./App.css";
import {ChanalPage, HomePage, Navebar, SearchPage, VideoPage} from "./components";

import { Routes, Route } from "react-router";


function App() {
  return (
    <div className="bg-black text-white">
      <Navebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/channel/:id" element={<ChanalPage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
