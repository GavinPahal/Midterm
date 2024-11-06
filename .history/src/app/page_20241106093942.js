"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";

export default function Page() {
  const [dataContents, setDataContents] = useState([]);
  const [error, setError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  async function fetchData() {
    const API_URL = "https://rickandmortyapi.com/api/character";
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        setError("Failed to fetch data");
        return;
      }
      const data = await response.json();
      setDataContents(data.results.slice(0, 5));
      setError("");
      setShowDropdown(true); // Show dropdown when data is fetched
    } catch {
      setError("An error occurred while fetching data");
    }
  }

  function clearData() {
    setDataContents([]);
    setError("");
    setShowDropdown(false); // Hide dropdown on clear
  }

  return (
    <div className="page-container">
      <Header fetchData={fetchData} clearData={clearData} />
      {error && <p>{error}</p>}
      <div className="flex items-center gap-4 mt-4">
        <img src="/placeholder.jpg" alt="Placeholder" className="w-20 h-20" />
        {showDropdown && <PictureDisplay dataContents={dataContents} />}
      </div>
    </div>
  );
}
