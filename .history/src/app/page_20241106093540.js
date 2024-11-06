"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";

export default function Page() {
  const [dataContents, setDataContents] = useState([]); // Holds the fetched data

  async function toggleData() {
    if (dataContents.length > 0) {
      // Clear data
      setDataContents([]);
    } else {
      // Fetch data
      const API_URL = "https://rickandmortyapi.com/api/character";
      const response = await fetch(API_URL);
      if (!response.ok) {
        alert("Failed to fetch data");
        return;
      }
      const data = await response.json();
      setDataContents(data.results.slice(0, 5)); // Display only 5 results
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <Header toggleData={toggleData} isDataDisplayed={dataContents.length > 0} />
      <PictureDisplay dataContents={dataContents} />
    </div>
  );
}
