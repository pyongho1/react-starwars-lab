import "./App.css";
import { Route, Routes } from "react-router-dom";
import { getAllStarships } from "./services/sw.api";
import { useState, useEffect } from "react";
import StarshipCard from "./components/StarshipCard/StarshipCard";
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails";
import Index from "./pages/Index/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/starships" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
