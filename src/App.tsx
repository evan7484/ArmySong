import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddSong } from "./pages/AddSong";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSong />} />
      </Routes>
    </div>
  );
};

export default App;
