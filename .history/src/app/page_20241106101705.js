"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";

export default function Page() {
  const [dataContents, setDataContents] = useState([]);
  const [error, setError] = useState("");

  async function toggleData() {
    if (dataContents.length > 0) {
      setDataContents([]);
      setError("");
    } else {
      const API_URL = "https://rickandmortyapi.com/api/character?limit=10"; // Fetch from page 1
      const response = await fetch(API_URL);

      if (!response.ok) {
        setError("Failed to fetch data");
        return;
      }

      const data = await response.json();
      setDataContents(data.results.slice(0, 5)); // Limit results to 10
      setError("");
    }
  }

  return (
    <div className="page-container" style={{ textAlign: "center", padding: "20px" }}>
      <Header toggleData={toggleData} isDataDisplayed={dataContents.length > 0} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <PictureDisplay dataContents={dataContents} />
    </div>
  );
}
