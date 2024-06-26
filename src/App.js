import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetails from "./Pages/GameDetails";
import AllGames from "./Pages/AllGames";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route path="/all games" element={<AllGames />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
