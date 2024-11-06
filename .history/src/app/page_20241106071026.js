"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";

export default function Page() {
  const [dataContents, setDataContents] = useState([]);
  const [error, setError] = useState("");

  async function fetchData() {
    const API_URL = "https://rickandmortyapi.com/api/character";
    
    const response = await fetch(API_URL);
    if (!response.ok) {
      setError("Failed to fetch data");
      return;
    }
    
    const data = await response.json();
    setDataContents(data.results.slice(0, 5));
    setError("");
  }

  function clearData() {
    setDataContents([]);
    setError("");
  }

  return (
    <div>
      <Header fetchData={fetchData} clearData={clearData} />
      {error && <p>{error}</p>}
      <PictureDisplay dataContents={dataContents} />
    </div>
  );
}
