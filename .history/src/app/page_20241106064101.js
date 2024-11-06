"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";

export default function Page() {
  const [dataContents, setDataContents] = useState([]);

  // Fetch data from the Rick and Morty API
  async function fetchData() {
    const API_URL = "https://rickandmortyapi.com/api/character";
    const response = await fetch(API_URL);
    const data = await response.json();
    setDataContents(data.results.slice(0, 5)); // Display only 5 results
  }

  // Clear the displayed data
  function clearData() {
    setDataContents([]);
  }

  return (
    <div>
      <Header fetchData={fetchData} clearData={clearData} />
      <PictureDisplay dataContents={dataContents} />
    </div>
  );
}
